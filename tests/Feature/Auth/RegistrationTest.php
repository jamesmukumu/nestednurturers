<?php

use App\Models\Admin;
use Illuminate\Support\Facades\Mail;

test('registration screen can be rendered', function () {
    $response = $this->get('/register');

    $response->assertStatus(200);
});

test('new admins can register', function () {
    Mail::fake();

    $response = $this->post('/register', [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'phonenumber' => '+12025550123',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $this->assertGuest('admin');
    $response->assertRedirect(route('admin.verification.notice'));
    expect(Admin::where('email', 'test@example.com')->value('email_verified_at'))->toBeNull();
});
