<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class PublicBlogController extends Controller
{
    public function index(Request $request): Response
    {
        $categoryId = $request->query('articlesCategories_id');
        $blogs = Blog::query()
            ->where('is_published', true)
            ->with('category')
            ->when($categoryId, fn ($query) => $query->where('blog_categories_id', $categoryId))
            ->latest()
            ->paginate(6)
            ->withQueryString()
            ->through(fn (Blog $blog) => $this->present($blog, includeContent: false));

        $categories = BlogCategory::query()
            ->whereHas('blogs', fn ($query) => $query->where('is_published', true))
            ->orderBy('title')
            ->get(['id', 'title']);

        return Inertia::render('Blogs/Index', [
            'blogs' => $blogs,
            'categories' => $categories,
            'filters' => ['categoryId' => $categoryId],
        ]);
    }

    public function show(string $slug): Response
    {
        $blog = Blog::query()
            ->where('is_published', true)
            ->where('slug', $slug)
            ->with('category')
            ->firstOrFail();

        return Inertia::render('Blog/Show', [
            'blog' => $this->present($blog),
        ]);
    }

    /**
     * @return array<string, mixed>
     */
    private function present(Blog $blog, bool $includeContent = true): array
    {
        $overview = $this->sanitizeHtml($blog->overview ?? '');
        $description = $this->sanitizeHtml($blog->description ?? '');

        return [
            'title' => $blog->title,
            'slug' => $blog->slug,
            'overview' => $includeContent
                ? $overview
                : trim(html_entity_decode(strip_tags($overview), ENT_QUOTES | ENT_HTML5, 'UTF-8')),
            'description' => $includeContent ? $description : '',
            'image_url' => $blog->image_path !== ''
                ? Storage::disk('public')->url($blog->image_path)
                : null,
            'reading_time' => $blog->reading_time,
            'created_at' => $blog->created_at?->toIso8601String(),
            'category' => $blog->category ? [
                'id' => $blog->category->id,
                'title' => $blog->category->title,
            ] : null,
        ];
    }

    private function sanitizeHtml(?string $value): string
    {
        if ($value === null) {
            return '';
        }

        return trim($value);
    }
}
