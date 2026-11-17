<?php

use App\Models\Admin;
use Inertia\Testing\AssertableInertia as Assert;

test('admin profile page requires authentication', function () {
    $this->get('/dashboard/profile')->assertRedirect(route('login'));
    $this->get('/dashboard/profile/data')->assertRedirect(route('login'));
});

test('authenticated admins can view the profile page', function () {
    $this->actingAs(Admin::factory()->create(), 'admin')
        ->get('/dashboard/profile')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Profile'));
});

test('admins can update their own profile details without changing their password', function () {
    $admin = Admin::factory()->create([
        'name' => 'Taylor Writer',
        'email' => 'taylor@example.test',
        'phonenumber' => '+19255550123',
        'password' => 'original-password',
        'email_verified_at' => now(),
        'isEmailVerified' => true,
    ]);
    $originalPassword = $admin->password;

    $this->actingAs($admin, 'admin')
        ->patch('/dashboard/profile', [
            'name' => 'Taylor Editor',
            'email' => 'taylor.editor@example.test',
            'phonenumber' => '+14155550123',
            'password' => 'not-an-accepted-profile-field',
        ])
        ->assertRedirect(route('dashboard.profile'));

    $admin->refresh();

    expect($admin->name)->toBe('Taylor Editor')
        ->and($admin->email)->toBe('taylor.editor@example.test')
        ->and($admin->phonenumber)->toBe('+14155550123')
        ->and($admin->password)->toBe($originalPassword)
        ->and($admin->email_verified_at)->toBeNull()
        ->and($admin->isEmailVerified)->toBeFalse();
});

test('admin profile details must be unique', function () {
    $admin = Admin::factory()->create();
    $otherAdmin = Admin::factory()->create();

    $this->actingAs($admin, 'admin')
        ->from('/dashboard/profile')
        ->patch('/dashboard/profile', [
            'name' => $otherAdmin->name,
            'email' => $otherAdmin->email,
            'phonenumber' => $otherAdmin->phonenumber,
        ])
        ->assertRedirect('/dashboard/profile')
        ->assertSessionHasErrors(['name', 'email', 'phonenumber']);
});

test('profile data returns only the signed-in admin profile fields', function () {
    $admin = Admin::factory()->create([
        'name' => 'Taylor Writer',
        'email' => 'taylor@example.test',
        'phonenumber' => '+19255550123',
        'isEmailVerified' => true,
        'isAdmin' => true,
    ]);

    $this->actingAs($admin, 'admin')
        ->getJson('/dashboard/profile/data')
        ->assertOk()
        ->assertJsonPath('profile.id', $admin->id)
        ->assertJsonPath('profile.name', 'Taylor Writer')
        ->assertJsonPath('profile.email', 'taylor@example.test')
        ->assertJsonPath('profile.phonenumber', '+19255550123')
        ->assertJsonPath('profile.isEmailVerified', true)
        ->assertJsonPath('profile.isAdmin', true)
        ->assertJsonMissingPath('profile.password')
        ->assertJsonMissingPath('profile.remember_token');
});
