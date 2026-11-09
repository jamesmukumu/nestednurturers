<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use App\Models\Admin;
use App\Models\Blog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(Request $request): Response
    {
        $admin = $this->admin($request);
        $search = trim((string) $request->query('search', ''));
        $blogs = $admin->blogs()
            ->with(['category', 'admin'])
            ->when($search !== '', fn ($query) => $query->where('title', 'like', "%{$search}%"))
            ->latest()
            ->paginate(10)
            ->withQueryString()
            ->through(fn (Blog $blog) => $this->present($blog));

        return Inertia::render('Admin/Blogs/Index', [
            'blogs' => $blogs,
            'filters' => ['search' => $search],
        ]);
    }

    public function create(Request $request): Response
    {
        return Inertia::render('Admin/Blogs/Create', [
            'categories' => $this->admin($request)->blogCategories()->orderBy('title')->get(['id', 'title']),
        ]);
    }

    public function store(StoreBlogRequest $request): RedirectResponse
    {
        $admin = $this->admin($request);
        $validated = $request->validated();
        $image = $request->file('image');
        unset($validated['image']);
        $validated['image_path'] = $image->store('blogs', 'public');
        $validated['slug'] = $this->uniqueSlug($validated['title']);
        $validated['reading_time'] = $this->readingTime($validated['description']);
        $validated['is_published'] = $validated['is_published'] ?? false;

        $admin->blogs()->create($validated);

        return to_route('admin.blogs.index')->with('success', 'Blog created successfully.');
    }

    public function show(Request $request, string $blog): Response
    {
        $record = $this->findBlog($request, $blog)->load(['category', 'admin']);

        return Inertia::render('Admin/Blogs/Show', [
            'blog' => $this->present($record),
        ]);
    }

    public function edit(Request $request, string $blog): Response
    {
        $admin = $this->admin($request);
        $record = $this->findBlog($request, $blog)->load(['category', 'admin']);

        return Inertia::render('Admin/Blogs/Edit', [
            'blog' => $this->present($record),
            'categories' => $admin->blogCategories()->orderBy('title')->get(['id', 'title']),
        ]);
    }

    public function update(UpdateBlogRequest $request, string $blog): RedirectResponse
    {
        $record = $this->findBlog($request, $blog);
        $validated = $request->validated();
        $previousImagePath = $record->image_path;
        $newImagePath = $request->file('image')?->store('blogs', 'public');
        unset($validated['image']);

        if ($newImagePath !== null) {
            if ($record->image_path !== '') {
                Storage::disk('public')->delete($record->image_path);
            }
            $validated['image_path'] = $newImagePath;
        }

        $validated['slug'] = $this->uniqueSlug($validated['title'], $record->id);
        $validated['reading_time'] = $this->readingTime($validated['description']);
        $validated['is_published'] = $validated['is_published'] ?? false;
        $record->update($validated);
        if ($newImagePath !== null && $previousImagePath !== '') {
            Storage::disk('public')->delete($previousImagePath);
        }

        return to_route('admin.blogs.index')->with('success', 'Blog updated successfully.');
    }

    public function destroy(Request $request, string $blog): RedirectResponse
    {
        $record = $this->findBlog($request, $blog);
        if ($record->image_path !== '') {
            Storage::disk('public')->delete($record->image_path);
        }
        $record->delete();

        return to_route('admin.blogs.index')->with('success', 'Blog deleted successfully.');
    }

    private function admin(Request $request): Admin
    {
        $admin = $request->user('admin');
        abort_unless($admin instanceof Admin, 403);

        return $admin;
    }

    private function findBlog(Request $request, string $blog): Blog
    {
        return $this->admin($request)->blogs()->findOrFail($blog);
    }

    private function uniqueSlug(string $title, ?int $ignoreBlogId = null): string
    {
        $base = $this->baseSlug($title);
        $slug = $base;
        $suffix = 2;

        while (Blog::query()
            ->where('slug', $slug)
            ->when($ignoreBlogId, fn ($query) => $query->where('id', '!=', $ignoreBlogId))
            ->exists()) {
            $slug = "{$base}-{$suffix}";
            $suffix++;
        }

        return $slug;
    }

    private function baseSlug(string $title): string
    {
        return Str::slug($title) ?: 'blog';
    }

    private function readingTime(string $content): int
    {
        $plainText = html_entity_decode(strip_tags($content), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $wordCount = str_word_count($plainText);

        return max(1, (int) ceil($wordCount / 200));
    }

    /**
     * @return array<string, mixed>
     */
    private function present(Blog $blog): array
    {
        return [
            'id' => $blog->id,
            'title' => $blog->title,
            'description' => $blog->description,
            'overview' => $blog->overview,
            'image_url' => $blog->image_path !== ''
                ? Storage::disk('public')->url($blog->image_path)
                : null,
            'is_published' => $blog->is_published,
            'slug' => $blog->slug,
            'blog_categories_id' => $blog->blog_categories_id,
            'category' => $blog->category ? [
                'id' => $blog->category->id,
                'title' => $blog->category->title,
            ] : null,
            'reading_time' => $blog->reading_time,
            'admin' => $blog->admin ? [
                'id' => $blog->admin->id,
                'name' => $blog->admin->name,
            ] : null,
            'views' => $blog->views,
            'created_at' => $blog->created_at?->toIso8601String(),
            'updated_at' => $blog->updated_at?->toIso8601String(),
        ];
    }
}
