<?php

use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

test('login screen can be rendered', function () {
    $response = $this->get('/login');

    $response->assertStatus(200);
});

test('admins can authenticate using the login screen', function () {
    $admin = Admin::factory()->create([
        'password' => Hash::make('password'),
    ]);

    $response = $this->post('/login', [
        'email' => $admin->email,
        'password' => 'password',
    ]);

    $this->assertAuthenticatedAs($admin, 'admin');
    $response->assertRedirect(route('dashboard', absolute: false));
});

test('admins can not authenticate with invalid password', function () {
    $admin = Admin::factory()->create();

    $this->post('/login', [
        'email' => $admin->email,
        'password' => 'wrong-password',
    ]);

    $this->assertGuest('admin');
});

test('admins can logout', function () {
    $admin = Admin::factory()->create();

    $response = $this->actingAs($admin, 'admin')->post('/logout');

    $this->assertGuest('admin');
    $response->assertRedirect(route('login'));
});
