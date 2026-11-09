<?php

use App\Models\Admin;
use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;

function blogPayload(BlogCategory $category, string $title = 'A useful blog title'): array
{
    return [
        'title' => $title,
        'overview' => '<p>A clear overview of the blog for readers.</p>',
        'description' => '<p>Useful blog content that explains the main topic.</p>',
        'blog_categories_id' => $category->id,
        'is_published' => '1',
    ];
}

test('admins can create categories and view only their own category list', function () {
    $admin = Admin::factory()->create();
    $otherAdmin = Admin::factory()->create();
    BlogCategory::factory()->create(['admins_id' => $otherAdmin->id]);

    $this->actingAs($admin, 'admin')
        ->getJson('/blog-categories')
        ->assertOk()
        ->assertJsonPath('categories', []);

    $response = $this->postJson('/blog-categories', [
        'title' => 'Parenting',
        'description' => 'Support and guidance for parents.',
    ])->assertCreated()
        ->assertJsonPath('category.title', 'Parenting');

    expect(BlogCategory::findOrFail($response->json('category.id'))->admins_id)->toBe($admin->id);
});

test('blogs list, create, show, and edit pages use existing categories', function () {
    $admin = Admin::factory()->create();
    $category = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    $blog = Blog::factory()->create([
        'admins_id' => $admin->id,
        'blog_categories_id' => $category->id,
    ]);

    $this->actingAs($admin, 'admin')
        ->get('/dashboard/blogs')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Blogs/Index'));

    $this->get('/dashboard/blogs/create')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Admin/Blogs/Create')
            ->where('categories.0.id', $category->id));

    $this->get("/dashboard/blogs/{$blog->id}")
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Admin/Blogs/Show')
            ->where('blog.id', $blog->id));

    $this->get("/dashboard/blogs/{$blog->id}/edit")
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Admin/Blogs/Edit')
            ->where('blog.blog_categories_id', $category->id));
});

test('an admin can create, update, and delete an owned blog', function () {
    Storage::fake('public');
    $admin = Admin::factory()->create();
    $category = BlogCategory::factory()->create(['admins_id' => $admin->id]);

    $this->actingAs($admin, 'admin')
        ->post('/dashboard/blogs', [
            ...blogPayload($category),
            'image' => UploadedFile::fake()->image('cover.jpg'),
        ])
        ->assertRedirect('/dashboard/blogs');

    $blog = Blog::firstOrFail();
    expect($blog->admins_id)->toBe($admin->id)
        ->and($blog->blog_categories_id)->toBe($category->id)
        ->and($blog->is_published)->toBeTrue()
        ->and($blog->slug)->toBe('a-useful-blog-title')
        ->and($blog->reading_time)->toBeGreaterThan(0);
    Storage::disk('public')->assertExists($blog->image_path);

    $newCategory = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    $this->put("/dashboard/blogs/{$blog->id}", [
        ...blogPayload($newCategory, 'An updated blog title'),
    ])->assertRedirect('/dashboard/blogs');

    expect($blog->fresh()->title)->toBe('An updated blog title')
        ->and($blog->fresh()->blog_categories_id)->toBe($newCategory->id);

    $imagePath = $blog->fresh()->image_path;
    $this->delete("/dashboard/blogs/{$blog->id}")->assertRedirect('/dashboard/blogs');
    expect(Blog::count())->toBe(0);
    Storage::disk('public')->assertMissing($imagePath);
});

test('blog validation rejects categories belonging to another admin', function () {
    $admin = Admin::factory()->create();
    $otherAdmin = Admin::factory()->create();
    $category = BlogCategory::factory()->create(['admins_id' => $otherAdmin->id]);

    $this->actingAs($admin, 'admin')
        ->from('/dashboard/blogs/create')
        ->post('/dashboard/blogs', [
            ...blogPayload($category),
            'image' => UploadedFile::fake()->image('cover.png'),
        ])
        ->assertRedirect('/dashboard/blogs/create')
        ->assertSessionHasErrors('blog_categories_id');

    expect(Blog::count())->toBe(0);
});

test('blog management routes require admin authentication', function () {
    $this->get('/dashboard/blogs')->assertRedirect('/login');
    $this->get('/blog-categories')->assertRedirect('/login');
});
