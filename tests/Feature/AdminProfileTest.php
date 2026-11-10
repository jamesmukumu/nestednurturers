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
