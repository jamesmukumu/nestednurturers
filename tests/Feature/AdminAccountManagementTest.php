<?php

use App\Mail\EmailVerifierMailer;
use App\Models\Admin;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\Consultation;
use App\Models\Services;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;

function directoryPayload(Admin $admin, array $changes = []): array
{
    return array_merge($admin->only(['name', 'email', 'phonenumber']), $changes);
}

test('directory account actions require elevated authenticated verified admins', function () {
    $target = Admin::factory()->create();
    $path = '/dashboard/admins/'.$target->id;
    $this->get($path.'/edit')->assertRedirect('/login');
    $this->patch($path, [])->assertRedirect('/login');
    $this->delete($path)->assertRedirect('/login');
    $this->actingAs(Admin::factory()->create(['isAdmin' => false]), 'admin');
    $this->get($path.'/edit')->assertForbidden();
    $this->patch($path, directoryPayload($target))->assertForbidden();
    $this->delete($path)->assertForbidden();
    $this->actingAs(Admin::factory()->create(['email_verified_at' => null]), 'admin');
    $this->patch($path, directoryPayload($target))->assertRedirect();
    $this->assertModelExists($target);
});

test('directory edit exposes only contact fields and prevents privileged field injection', function () {
    $actor = Admin::factory()->create();
    $target = Admin::factory()->create(['isAdmin' => false]);
    $password = $target->password;
    $verified = $target->email_verified_at->toIso8601String();
    $this->actingAs($actor, 'admin')->get('/dashboard/admins/'.$target->id.'/edit')
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Admins/Edit')->where('admin.phonenumber', $target->phonenumber)->missing('admin.password')->missing('admin.remember_token')->missing('admin.isAdmin'));
    $this->patch('/dashboard/admins/'.$target->id, directoryPayload($target, [
        'name' => 'Updated admin name', 'isAdmin' => true, 'password' => 'injected', 'email_verified_at' => null, 'isEmailVerified' => false,
    ]))->assertRedirect('/dashboard/admins');
    $target->refresh();
    expect($target->name)->toBe('Updated admin name')->and($target->isAdmin)->toBeFalse()->and($target->password)->toBe($password)
        ->and($target->email_verified_at->toIso8601String())->toBe($verified)->and($target->isEmailVerified)->toBeTrue();
});

test('directory validation excludes the target but rejects duplicate and invalid details', function () {
    $actor = Admin::factory()->create();
    $target = Admin::factory()->create();
    $path = '/dashboard/admins/'.$target->id;
    $this->actingAs($actor, 'admin')->patch($path, directoryPayload($target))->assertSessionHasNoErrors();
    $this->patch($path, directoryPayload($actor))->assertSessionHasErrors(['name', 'email', 'phonenumber']);
    $this->patch($path, ['name' => '', 'email' => 'invalid', 'phonenumber' => ''])->assertSessionHasErrors(['name', 'email', 'phonenumber']);
});

test('directory email changes reset verification and queue verification after commit', function () {
    Mail::fake();
    $actor = Admin::factory()->create();
    $target = Admin::factory()->create();
    $this->actingAs($actor, 'admin')->patch('/dashboard/admins/'.$target->id, directoryPayload($target, ['email' => 'new-address@example.test']))->assertRedirect('/dashboard/admins');
    expect($target->fresh()->email_verified_at)->toBeNull()->and($target->fresh()->isEmailVerified)->toBeFalse();
    Mail::assertQueued(EmailVerifierMailer::class, fn ($mail) => $mail->hasTo('new-address@example.test'));
    $this->actingAs($target->fresh(), 'admin')->get('/dashboard')->assertRedirect();
});

test('directory rejects self editing and deletion and missing targets', function () {
    $actor = Admin::factory()->create();
    $this->actingAs($actor, 'admin')->get('/dashboard/admins/'.$actor->id.'/edit')->assertForbidden();
    $this->patch('/dashboard/admins/'.$actor->id, directoryPayload($actor))->assertForbidden();
    $this->delete('/dashboard/admins/'.$actor->id)->assertForbidden();
    $this->delete('/dashboard/admins/0'.$actor->id)->assertForbidden();
    $this->get('/dashboard/admins/0'.$actor->id.'/edit')->assertForbidden();
    $this->delete('/dashboard/admins/999999')->assertNotFound();
    $this->get('/dashboard/admins/999999/edit')->assertNotFound();
    $this->assertModelExists($actor);
});

test('deleting an admin preserves and transfers all content and images and consultation history', function (bool $elevated) {
    Storage::fake('public');
    $actor = Admin::factory()->create();
    $target = Admin::factory()->create(['isAdmin' => $elevated]);
    $category = BlogCategory::factory()->create(['admins_id' => $target->id]);
    $blog = Blog::factory()->create(['admins_id' => $target->id, 'blog_categories_id' => $category->id, 'image_path' => 'blogs/keep.jpg', 'is_published' => true]);
    $service = Services::factory()->create(['admins_id' => $target->id]);
    $consultation = Consultation::create([
        'name' => 'Test family', 'email' => 'family@example.test', 'phonenumber' => '+14155550123',
        'consultationDate' => '2026-12-01 10:00:00', 'timezone' => 'America/Los_Angeles',
        'consultationID' => (string) Illuminate\Support\Str::uuid(), 'location' => 'Oakland',
        'expected_due_time' => '2027-01-15 00:00:00', 'preferred_douala_services_start' => '2026-12-20 00:00:00',
        'services_seeked' => 'Postpartum doula', 'duration_of_support' => 'Six weeks',
        'no_nights_per_week' => '2', 'howHeard' => 'Referral', 'is_acknowledged' => true,
        'addressed_by' => $target->id, 'addressed_at' => now(),
    ]);
    Storage::disk('public')->put('blogs/keep.jpg', 'image');
    $before = $blog->only(['id', 'slug', 'is_published', 'image_path', 'blog_categories_id']);
    $this->actingAs($actor, 'admin')->delete('/dashboard/admins/'.$target->id)->assertRedirect('/dashboard/admins');
    $this->assertModelMissing($target);
    foreach ([$category, $blog, $service] as $record) {
        expect($record->fresh()->admins_id)->toBe($actor->id);
    }
    expect($blog->fresh()->only(array_keys($before)))->toBe($before);
    expect($consultation->fresh()->addressed_by)->toBeNull()->and($consultation->fresh()->addressed_at)->not->toBeNull();
    Storage::disk('public')->assertExists('blogs/keep.jpg');
    $this->get('/dashboard/blogs/'.$blog->id)->assertOk();
    $this->get('/dashboard/services/'.$service->id.'/edit')->assertOk();
    // A previously issued login session cannot resolve the deleted user on a new request.
    $this->withSession([Auth::guard('admin')->getName() => $target->id]);
    Auth::forgetGuards();
    $this->get('/dashboard')->assertRedirect('/login');
})->with([false, true]);

test('a failed account deletion rolls back content ownership transfers', function () {
    $actor = Admin::factory()->create();
    $target = Admin::factory()->create();
    $category = BlogCategory::factory()->create(['admins_id' => $target->id]);
    $blog = Blog::factory()->create(['admins_id' => $target->id, 'blog_categories_id' => $category->id]);
    $service = Services::factory()->create(['admins_id' => $target->id]);
    $dispatcher = Admin::getEventDispatcher();
    Admin::setEventDispatcher(clone $dispatcher);
    Admin::deleting(fn () => throw new RuntimeException('Simulated deletion failure'));
    try {
        $this->actingAs($actor, 'admin')->delete('/dashboard/admins/'.$target->id)->assertServerError();
    } finally {
        Admin::setEventDispatcher($dispatcher);
    }
    $this->assertModelExists($target);
    foreach ([$category, $blog, $service] as $record) {
        expect($record->fresh()->admins_id)->toBe($target->id);
    }
});
