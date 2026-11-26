<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogCategoryRequest;
use App\Http\Requests\UpdateBlogCategoryRequest;
use App\Models\Admin;
use App\Models\BlogCategory;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class BlogCategoryController extends Controller
{
    public function manage(Request $request): Response
    {
        $search = trim((string) $request->query('search', ''));

        return Inertia::render('Admin/Categories/Index', [
            'categories' => $request->user('admin')->blogCategories()
                ->when($search !== '', fn ($query) => $query->where('title', 'like', '%'.$search.'%'))
                ->withCount('blogs')->orderBy('title')->orderBy('id')->paginate(10)->withQueryString(),
            'filters' => ['search' => $search],
        ]);
    }

    public function update(UpdateBlogCategoryRequest $request, string $category): JsonResponse
    {
        $record = $request->user('admin')->blogCategories()->findOrFail($category);
        $record->update($request->validated());

        return response()->json(['category' => $record->only(['id', 'title', 'description'])]);
    }

    public function destroy(Request $request, string $category): RedirectResponse
    {
        $message = 'Move or delete all articles in this category before deleting it.';
        try {
            DB::transaction(function () use ($request, $category, $message) {
                $record = $request->user('admin')->blogCategories()->lockForUpdate()->findOrFail($category);
                if ($record->blogs()->exists()) {
                    throw ValidationException::withMessages(['category' => $message]);
                }
                $record->delete();
            });
        } catch (QueryException $exception) {
            // The restrictive FK also covers an article created during deletion.
            if (in_array((string) $exception->getCode(), ['23000', '23503'], true)) {
                throw ValidationException::withMessages(['category' => $message]);
            }
            throw $exception;
        }

        return to_route('admin.categories.index')->with('success', 'Category deleted successfully.');
    }

    public function index(): JsonResponse
    {
        $admin = request()->user('admin');
        abort_unless($admin instanceof Admin, 403);

        return response()->json([
            'categories' => $admin->blogCategories()
                ->orderBy('title')
                ->get(['id', 'title', 'description']),
        ]);
    }

    public function store(StoreBlogCategoryRequest $request): JsonResponse
    {
        $admin = $request->user('admin');
        abort_unless($admin instanceof Admin, 403);

        $validated = $request->validated();
        $base = Str::slug($validated['title']) ?: 'category';
        $slug = $base;
        $suffix = 2;
        while (BlogCategory::query()->where('slug', $slug)->exists()) {
            $slug = "{$base}-{$suffix}";
            $suffix++;
        }

        $category = $admin->blogCategories()->create([
            ...$validated,
            'slug' => $slug,
        ]);

        return response()->json([
            'category' => $category->only(['id', 'title', 'description']),
        ], 201);
    }
}
