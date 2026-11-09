<?php

use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Inertia\Testing\AssertableInertia as Assert;

test('admins can register and are logged in', function () {
    $this->get('/register')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Auth/Register'));

    $this->post('/register', [
        'name' => 'Taylor Writer',
        'email' => 'taylor@example.test',
        'phonenumber' => '+12025550123',
        'password' => 'secure-pass-123',
        'password_confirmation' => 'secure-pass-123',
    ])->assertRedirect('/dashboard');

    $this->assertAuthenticatedAs(Admin::where('email', 'taylor@example.test')->first(), 'admin');
    expect(Hash::check('secure-pass-123', Admin::where('email', 'taylor@example.test')->value('password')))->toBeTrue();
});

test('admin registration validates schema fields and password confirmation', function () {
    $this->from('/register')->post('/register', [
        'name' => '',
        'email' => 'bad-email',
        'phonenumber' => '',
        'password' => 'short',
        'password_confirmation' => 'different',
    ])->assertRedirect('/register')
        ->assertSessionHasErrors(['name', 'email', 'phonenumber', 'password']);
});

test('admins can log in with remember me and log out', function () {
    $admin = Admin::factory()->create([
        'password' => Hash::make('secure-pass-123'),
    ]);

    $this->get('/login')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Auth/Login'));

    $this->post('/login', [
        'email' => $admin->email,
        'password' => 'secure-pass-123',
        'remember' => true,
    ])->assertRedirect('/dashboard');

    $this->assertAuthenticatedAs($admin, 'admin');
    expect($admin->fresh()->getRememberToken())->not->toBeNull();

    $this->post('/logout')->assertRedirect('/login');
    $this->assertGuest('admin');
});

test('invalid admin credentials return the expected email error', function () {
    $this->from('/login')->post('/login', [
        'email' => 'missing@example.test',
        'password' => 'incorrect',
    ])->assertRedirect('/login')
        ->assertSessionHasErrors([
            'email' => 'These credentials do not match our records.',
        ]);
});

test('admin dashboard routes require the admin guard', function () {
    $this->get('/dashboard')->assertRedirect('/login');

    $this->actingAs(Admin::factory()->create(), 'admin')
        ->get('/dashboard')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Dashboard'));
});
