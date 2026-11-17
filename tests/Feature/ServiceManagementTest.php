<?php

use App\Models\Admin;
use App\Models\Services;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;

function servicePayload(string $title = 'Postpartum Doula Support'): array
{
    return [
        'title' => $title,
        'meta_overview' => '<p>Compassionate support for your growing family.</p>',
        'meta_description' => '<p>Practical, personalised care before and after birth.</p>',
        'published' => '1',
    ];
}

test('service management routes require admin authentication', function () {
    $this->get('/dashboard/services')->assertRedirect('/login');
    $this->get('/dashboard/services/create')->assertRedirect('/login');
});

test('admins can view service list, create, show, and edit pages for their services', function () {
    $admin = Admin::factory()->create();
    $service = Services::factory()->create(['admins_id' => $admin->id]);

    $this->actingAs($admin, 'admin')
        ->get('/dashboard/services')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Services/Index'));

    $this->get('/dashboard/services/create')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Services/Create'));

    $this->get("/dashboard/services/{$service->id}")
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Services/Show')->where('service.id', $service->id));

    $this->get("/dashboard/services/{$service->id}/edit")
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Services/Edit')->where('service.id', $service->id));
});

test('an admin can create, update, and delete an owned service with its image', function () {
    Storage::fake('public');
    $admin = Admin::factory()->create();

    $this->actingAs($admin, 'admin')
        ->post('/dashboard/services', [...servicePayload(), 'image' => UploadedFile::fake()->image('service.jpg')])
        ->assertRedirect('/dashboard/services');

    $service = Services::firstOrFail();
    expect($service->admins_id)->toBe($admin->id)
        ->and($service->published)->toBeTrue()
        ->and($service->slug)->toBe('postpartum-doula-support');
    Storage::disk('public')->assertExists($service->image_path);

    $originalImage = $service->image_path;
    $this->put("/dashboard/services/{$service->id}", [
        ...servicePayload('Updated Birth Support'),
        'image' => UploadedFile::fake()->image('updated.png'),
    ])->assertRedirect('/dashboard/services');

    $service->refresh();
    expect($service->title)->toBe('Updated Birth Support')
        ->and($service->slug)->toBe('updated-birth-support')
        ->and($service->image_path)->not->toBe($originalImage);
    Storage::disk('public')->assertMissing($originalImage);
    Storage::disk('public')->assertExists($service->image_path);

    $updatedImage = $service->image_path;
    $this->delete("/dashboard/services/{$service->id}")->assertRedirect('/dashboard/services');
    expect(Services::count())->toBe(0);
    Storage::disk('public')->assertMissing($updatedImage);
});

test('service validation rejects missing images, duplicate titles, and empty editor content', function () {
    Storage::fake('public');
    $admin = Admin::factory()->create();
    Services::factory()->create(['admins_id' => $admin->id, 'title' => 'Existing service']);

    $this->actingAs($admin, 'admin')
        ->from('/dashboard/services/create')
        ->post('/dashboard/services', [
            ...servicePayload('Existing service'),
            'meta_overview' => '<p><br></p>',
            'meta_description' => '<p>&nbsp;</p>',
            'image' => UploadedFile::fake()->create('invalid.gif', 10, 'image/gif'),
            'published' => 'not-a-boolean',
        ])
        ->assertRedirect('/dashboard/services/create')
        ->assertSessionHasErrors(['title', 'meta_overview', 'meta_description', 'image', 'published']);
});

test('updating a service without an image keeps its existing image', function () {
    Storage::fake('public');
    $admin = Admin::factory()->create();
    $service = Services::factory()->create([
        'admins_id' => $admin->id,
        'image_path' => 'services/current-image.jpg',
    ]);
    Storage::disk('public')->put($service->image_path, 'existing image');

    $this->actingAs($admin, 'admin')
        ->put("/dashboard/services/{$service->id}", servicePayload('Retained Image Service'))
        ->assertRedirect('/dashboard/services');

    expect($service->fresh()->image_path)->toBe('services/current-image.jpg');
    Storage::disk('public')->assertExists('services/current-image.jpg');
});

test('admins cannot access or mutate services belonging to another admin', function () {
    $admin = Admin::factory()->create();
    $otherService = Services::factory()->create(['admins_id' => Admin::factory()->create()->id]);

    $this->actingAs($admin, 'admin')
        ->get("/dashboard/services/{$otherService->id}")
        ->assertNotFound();

    $this->get("/dashboard/services/{$otherService->id}/edit")
        ->assertNotFound();

    $this->delete("/dashboard/services/{$otherService->id}")
        ->assertNotFound();

    $this->put("/dashboard/services/{$otherService->id}", servicePayload())
        ->assertForbidden();
});
