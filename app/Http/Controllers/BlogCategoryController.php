<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogCategoryRequest;
use App\Models\Admin;
use App\Models\BlogCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;

class BlogCategoryController extends Controller
{
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
