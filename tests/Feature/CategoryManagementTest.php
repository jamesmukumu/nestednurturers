<?php

use App\Models\Admin;
use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Database\QueryException;
use Inertia\Testing\AssertableInertia as Assert;

test('category management requires authentication and lists only owned categories with pagination and counts', function () {
    $this->get('/dashboard/blog-categories')->assertRedirect('/login');
    $admin = Admin::factory()->create(['isAdmin' => false]);
    $category = BlogCategory::factory()->create(['admins_id' => $admin->id, 'title' => 'A featured category']);
    Blog::factory()->create(['admins_id' => $admin->id, 'blog_categories_id' => $category->id]);
    BlogCategory::factory()->count(11)->create(['admins_id' => $admin->id]);
    BlogCategory::factory()->create(['title' => 'Other private category']);
    $this->actingAs($admin, 'admin')->get('/dashboard/blog-categories')
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Categories/Index')->has('categories.data', 10)->where('categories.total', 12));
    $this->get('/dashboard/blog-categories?page=2')
        ->assertInertia(fn (Assert $page) => $page->has('categories.data', 2));
    $this->get('/dashboard/blog-categories?search=featured')
        ->assertInertia(fn (Assert $page) => $page->has('categories.data', 1)->where('categories.data.0.blogs_count', 1)->where('filters.search', 'featured'));
    $this->get('/dashboard/blog-categories?search=Other%20private')
        ->assertInertia(fn (Assert $page) => $page->has('categories.data', 0));
});

test('category JSON creation stays compatible and editing preserves slug and ownership', function () {
    $admin = Admin::factory()->create();
    $response = $this->actingAs($admin, 'admin')->postJson('/blog-categories', ['title' => 'Family care', 'description' => 'Practical advice']);
    $response->assertCreated()->assertJsonPath('category.title', 'Family care');
    $category = BlogCategory::findOrFail($response->json('category.id'));
    $slug = $category->slug;
    $this->patchJson('/dashboard/blog-categories/'.$category->id, ['title' => 'Updated care', 'description' => 'Updated advice', 'slug' => 'injected', 'admins_id' => 999])
        ->assertOk()->assertJsonPath('category.title', 'Updated care');
    expect($category->fresh()->slug)->toBe($slug)->and($category->fresh()->admins_id)->toBe($admin->id);
    $this->patchJson('/dashboard/blog-categories/'.$category->id, ['title' => 'Updated care', 'description' => null])->assertOk();
});

test('category title validation remains global and unauthorized mutations fail', function () {
    $admin = Admin::factory()->create();
    $owned = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    $other = BlogCategory::factory()->create();
    $this->actingAs($admin, 'admin')->postJson('/blog-categories', ['title' => $other->title])->assertUnprocessable()->assertJsonValidationErrors('title');
    $this->patchJson('/dashboard/blog-categories/'.$owned->id, ['title' => $other->title])->assertUnprocessable()->assertJsonValidationErrors('title');
    $this->patchJson('/dashboard/blog-categories/'.$owned->id, ['title' => ''])->assertUnprocessable();
    $this->patchJson('/dashboard/blog-categories/'.$other->id, ['title' => 'Intrusion'])->assertForbidden();
    $this->delete('/dashboard/blog-categories/'.$other->id)->assertNotFound();
    expect($other->fresh())->not->toBeNull();
});

test('empty categories can be deleted but draft and published articles prevent deletion', function (bool $published) {
    $admin = Admin::factory()->create();
    $empty = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    $used = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    $blog = Blog::factory()->create(['admins_id' => $admin->id, 'blog_categories_id' => $used->id, 'is_published' => $published]);
    $this->actingAs($admin, 'admin')->delete('/dashboard/blog-categories/'.$empty->id)->assertRedirect('/dashboard/blog-categories');
    $this->assertModelMissing($empty);
    $this->deleteJson('/dashboard/blog-categories/'.$used->id)->assertUnprocessable()->assertJsonValidationErrors('category');
    $this->assertModelExists($used);
    $this->assertModelExists($blog);
    expect(fn () => $used->delete())->toThrow(QueryException::class);
    $this->assertModelExists($blog);
})->with([false, true]);

test('restrictive category foreign key migration rolls back and reapplies', function () {
    $migration = require database_path('migrations/2026_11_26_000000_restrict_category_article_deletion.php');
    $category = BlogCategory::factory()->create();
    $blog = Blog::factory()->create(['admins_id' => $category->admins_id, 'blog_categories_id' => $category->id]);
    $migration->down();
    $migration->up();
    $this->assertModelExists($blog);
    expect(fn () => $category->delete())->toThrow(QueryException::class);
});
