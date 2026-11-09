<?php

use App\Models\Admin;
use App\Models\Blog;
use App\Models\BlogCategory;
use Inertia\Testing\AssertableInertia as Assert;

test('public blog listing contains only published posts and categories', function () {
    $admin = Admin::factory()->create();
    $publishedCategory = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    $draftOnlyCategory = BlogCategory::factory()->create(['admins_id' => $admin->id]);

    Blog::factory()->create([
        'admins_id' => $admin->id,
        'blog_categories_id' => $publishedCategory->id,
        'title' => 'Published article',
        'slug' => 'published-article',
        'is_published' => true,
    ]);
    Blog::factory()->create([
        'admins_id' => $admin->id,
        'blog_categories_id' => $publishedCategory->id,
        'title' => 'Draft article',
        'slug' => 'draft-article',
        'is_published' => false,
    ]);
    Blog::factory()->create([
        'admins_id' => $admin->id,
        'blog_categories_id' => $draftOnlyCategory->id,
        'is_published' => false,
    ]);

    $this->get('/blogs')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Blogs/Index')
            ->has('blogs.data', 1)
            ->where('blogs.data.0.title', 'Published article')
            ->has('categories', 1)
            ->where('categories.0.id', $publishedCategory->id));
});

test('public blog category filters show only published posts in that category', function () {
    $admin = Admin::factory()->create();
    $selectedCategory = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    $otherCategory = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    Blog::factory()->create([
        'admins_id' => $admin->id,
        'blog_categories_id' => $selectedCategory->id,
        'is_published' => true,
    ]);
    Blog::factory()->create([
        'admins_id' => $admin->id,
        'blog_categories_id' => $otherCategory->id,
        'is_published' => true,
    ]);

    $this->get('/blogs?articlesCategories_id='.$selectedCategory->id)
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Blogs/Index')
            ->has('blogs.data', 1)
            ->where('blogs.data.0.category.id', $selectedCategory->id)
            ->where('filters.categoryId', (string) $selectedCategory->id));
});

test('public blog detail is available only for published posts', function () {
    $admin = Admin::factory()->create();
    $category = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    $publishedBlog = Blog::factory()->create([
        'admins_id' => $admin->id,
        'blog_categories_id' => $category->id,
        'slug' => 'published-story',
        'is_published' => true,
    ]);
    Blog::factory()->create([
        'admins_id' => $admin->id,
        'blog_categories_id' => $category->id,
        'slug' => 'draft-story',
        'is_published' => false,
    ]);

    $this->get('/blog/published-story')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Blog/Show')
            ->where('blog.slug', $publishedBlog->slug));

    $this->get('/blog/draft-story')->assertNotFound();
});
