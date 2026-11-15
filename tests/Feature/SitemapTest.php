<?php

use App\Models\Admin;
use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Support\Facades\Cache;

function sitemapLocations(string $xml): array
{
    $document = new DOMDocument;
    expect($document->loadXML($xml))->toBeTrue();

    return array_map(
        fn (DOMElement $element) => $element->textContent,
        iterator_to_array($document->getElementsByTagName('loc')),
    );
}

test('sitemap contains public blogs and invalidates when they change', function () {
    Cache::flush();
    $admin = Admin::factory()->create();
    $category = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    $published = Blog::factory()->create([
        'admins_id' => $admin->id,
        'blog_categories_id' => $category->id,
        'slug' => 'public-story',
        'is_published' => true,
    ]);
    $draft = Blog::factory()->create([
        'admins_id' => $admin->id,
        'blog_categories_id' => $category->id,
        'slug' => 'draft-story',
        'is_published' => false,
    ]);

    $response = $this->get('/sitemap.xml')->assertOk()->assertHeader('Content-Type', 'application/xml; charset=UTF-8');
    $locations = sitemapLocations($response->getContent());
    expect($locations)->toContain('https://nestednurturers.com/blogs', 'https://nestednurturers.com/blog/public-story')
        ->not->toContain('https://nestednurturers.com/blog/draft-story')
        ->and(count($locations))->toBe(count(array_unique($locations)));
    $response->assertSee($published->updated_at->toW3cString(), false);

    $draft->update(['is_published' => true]);
    expect(sitemapLocations($this->get('/sitemap.xml')->getContent()))
        ->toContain('https://nestednurturers.com/blog/draft-story');
    $draft->update(['slug' => 'updated-story']);
    expect(sitemapLocations($this->get('/sitemap.xml')->getContent()))
        ->toContain('https://nestednurturers.com/blog/updated-story')
        ->not->toContain('https://nestednurturers.com/blog/draft-story');
    $published->delete();
    expect(sitemapLocations($this->get('/sitemap.xml')->getContent()))
        ->not->toContain('https://nestednurturers.com/blog/public-story');

    config(['sitemap.include_blogs' => false]);
    expect(sitemapLocations($this->get('/sitemap.xml')->getContent()))
        ->toContain('https://nestednurturers.com/blogs')
        ->not->toContain('https://nestednurturers.com/blog/updated-story');
    expect(file_get_contents(public_path('robots.txt')))
        ->toContain('https://nestednurturers.com/sitemap.xml');
});

test('large sitemaps are split into an index and bounded pages', function () {
    Cache::flush();
    config(['sitemap.blogs_per_page' => 1]);
    $admin = Admin::factory()->create();
    $category = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    foreach (['first', 'second'] as $slug) {
        Blog::factory()->create([
            'admins_id' => $admin->id,
            'blog_categories_id' => $category->id,
            'slug' => $slug,
            'is_published' => true,
        ]);
    }

    expect(sitemapLocations($this->get('/sitemap.xml')->assertOk()->getContent()))
        ->toBe(['https://nestednurturers.com/sitemap-1.xml', 'https://nestednurturers.com/sitemap-2.xml']);
    expect(sitemapLocations($this->get('/sitemap-1.xml')->assertOk()->getContent()))
        ->toContain('https://nestednurturers.com/blogs', 'https://nestednurturers.com/blog/first');
    expect(sitemapLocations($this->get('/sitemap-2.xml')->assertOk()->getContent()))
        ->toContain('https://nestednurturers.com/blog/second')
        ->not->toContain('https://nestednurturers.com/blogs');
    $this->get('/sitemap-3.xml')->assertNotFound();
});
