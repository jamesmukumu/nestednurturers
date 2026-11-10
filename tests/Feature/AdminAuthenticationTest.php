<?php

use App\Models\Admin;
use App\Mail\EmailVerifierMailer;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Testing\AssertableInertia as Assert;

test('admin registration queues email verification without logging in', function () {
    Mail::fake();

    $this->get('/register')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Auth/Register'));

    $this->post('/register', [
        'name' => 'Taylor Writer',
        'email' => 'taylor@example.test',
        'phonenumber' => '+12025550123',
        'password' => 'secure-pass-123',
        'password_confirmation' => 'secure-pass-123',
    ])->assertRedirect(route('admin.verification.notice'));

    $admin = Admin::where('email', 'taylor@example.test')->firstOrFail();
    $this->assertGuest('admin');
    $this->assertSame($admin->id, session('pending_admin_verification_id'));
    expect(Hash::check('secure-pass-123', $admin->password))->toBeTrue();
    Mail::assertQueued(EmailVerifierMailer::class, fn (EmailVerifierMailer $mail) => $mail->hasTo($admin->email));
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
