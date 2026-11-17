<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Models\Admin;
use App\Models\Services;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ServicesController extends Controller
{
    public function index(Request $request): Response
    {
        $admin = $this->admin($request);
        $search = trim((string) $request->query('search', ''));
        $services = $admin->services()
            ->when($search !== '', fn ($query) => $query->where('title', 'like', "%{$search}%"))
            ->latest()
            ->paginate(10)
            ->withQueryString()
            ->through(fn (Services $service) => $this->present($service));

        return Inertia::render('Admin/Services/Index', [
            'services' => $services,
            'filters' => ['search' => $search],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Services/Create');
    }

    public function store(StoreServiceRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $image = $request->file('image');
        unset($validated['image']);

        $validated['image_path'] = $image->store('services', 'public');
        $validated['slug'] = $this->uniqueSlug($validated['title']);
        $validated['published'] = $validated['published'] ?? false;
        $this->admin($request)->services()->create($validated);

        return to_route('admin.services.index')->with('success', 'Service created successfully.');
    }

    public function show(Request $request, string $service): Response
    {
        return Inertia::render('Admin/Services/Show', [
            'service' => $this->present($this->findService($request, $service)),
        ]);
    }

    public function edit(Request $request, string $service): Response
    {
        return Inertia::render('Admin/Services/Edit', [
            'service' => $this->present($this->findService($request, $service)),
        ]);
    }

    public function update(UpdateServiceRequest $request, string $service): RedirectResponse
    {
        $record = $this->findService($request, $service);
        $validated = $request->validated();
        $newImagePath = $request->file('image')?->store('services', 'public');
        unset($validated['image']);

        if ($newImagePath !== null) {
            $validated['image_path'] = $newImagePath;
        }

        $validated['slug'] = $this->uniqueSlug($validated['title'], $record->id);
        $validated['published'] = $validated['published'] ?? false;
        $previousImagePath = $record->image_path;
        $record->update($validated);

        if ($newImagePath !== null && $previousImagePath !== '') {
            Storage::disk('public')->delete($previousImagePath);
        }

        return to_route('admin.services.index')->with('success', 'Service updated successfully.');
    }

    public function destroy(Request $request, string $service): RedirectResponse
    {
        $record = $this->findService($request, $service);
        $imagePath = $record->image_path;
        $record->delete();

        if ($imagePath !== '') {
            Storage::disk('public')->delete($imagePath);
        }

        return to_route('admin.services.index')->with('success', 'Service deleted successfully.');
    }

    private function admin(Request $request): Admin
    {
        $admin = $request->user('admin');
        abort_unless($admin instanceof Admin, 403);

        return $admin;
    }

    private function findService(Request $request, string $service): Services
    {
        return $this->admin($request)->services()->findOrFail($service);
    }

    private function uniqueSlug(string $title, ?int $ignoreServiceId = null): string
    {
        $base = Str::slug($title) ?: 'service';
        $slug = $base;
        $suffix = 2;

        while (Services::query()
            ->where('slug', $slug)
            ->when($ignoreServiceId, fn ($query) => $query->where('id', '!=', $ignoreServiceId))
            ->exists()) {
            $slug = "{$base}-{$suffix}";
            $suffix++;
        }

        return $slug;
    }

    /**
     * @return array<string, mixed>
     */
    private function present(Services $service): array
    {
        return [
            'id' => $service->id,
            'title' => $service->title,
            'slug' => $service->slug,
            'meta_overview' => $service->meta_overview,
            'meta_description' => $service->meta_description,
            'image_url' => $service->image_path !== ''
                ? Storage::disk('public')->url($service->image_path)
                : null,
            'published' => $service->published,
            'created_at' => $service->created_at?->toIso8601String(),
            'updated_at' => $service->updated_at?->toIso8601String(),
        ];
    }
}
