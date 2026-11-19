<?php

use App\Mail\AdminPasswordResetMailer;
use App\Models\Admin;
use App\Models\AdminPasswordResetRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Inertia\Testing\AssertableInertia as Assert;

test('forgot password page renders and login links to it', function () {
    $this->get('/forgot-password')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Auth/ForgotPassword'));

    $this->get('/login')->assertSee('forgot-password');
});

test('unknown admin email cannot request a password reset', function () {
    $this->from('/forgot-password')->post('/forgot-password', [
        'email' => 'missing@example.test',
    ])->assertRedirect('/forgot-password')
        ->assertSessionHasErrors('email');

    expect(AdminPasswordResetRequest::count())->toBe(0);
});

test('known admin receives a signed reset link immediately with a snowflake reference', function () {
    Mail::fake();
    $admin = Admin::factory()->create(['email' => 'reset@example.test']);

    $this->post('/forgot-password', ['email' => $admin->email])
        ->assertRedirect('/forgot-password')
        ->assertSessionHas('status');

    $request = AdminPasswordResetRequest::firstOrFail();
    expect($request->admin_id)->toBe($admin->id)
        ->and((string) $request->reference)->toMatch('/^\d{15,19}$/')
        ->and($request->expires_at->getTimestamp() - now()->getTimestamp())->toBeGreaterThanOrEqual(299)
        ->toBeLessThanOrEqual(300);

    Mail::assertSent(AdminPasswordResetMailer::class, function (AdminPasswordResetMailer $mail) use ($admin, &$resetUrl) {
        $resetUrl = $mail->resetUrl;

        return $mail->hasTo($admin->email);
    });

    expect($resetUrl)->toContain('/reset-password/'.$request->reference)
        ->toContain('signature=');
});

test('a valid reset link changes the password once', function () {
    Mail::fake();
    $admin = Admin::factory()->create(['password' => Hash::make('old-password')]);

    $this->post('/forgot-password', ['email' => $admin->email]);
    $mail = null;
    Mail::assertSent(AdminPasswordResetMailer::class, function (AdminPasswordResetMailer $sentMail) use (&$mail) {
        $mail = $sentMail;

        return true;
    });

    $this->get($mail->resetUrl)
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Auth/ResetPassword'));

    $this->post($mail->resetUrl, [
        'password' => 'new-secure-password',
        'password_confirmation' => 'new-secure-password',
    ])->assertRedirect('/login');

    expect(Hash::check('new-secure-password', $admin->fresh()->password))->toBeTrue()
        ->and(AdminPasswordResetRequest::firstOrFail()->consumed_at)->not->toBeNull();

    $this->post($mail->resetUrl, [
        'password' => 'another-secure-password',
        'password_confirmation' => 'another-secure-password',
    ])->assertSessionHasErrors('password');
});

test('expired, altered, and superseded reset links are rejected', function () {
    Mail::fake();
    $admin = Admin::factory()->create();

    $this->post('/forgot-password', ['email' => $admin->email]);
    $firstMail = null;
    Mail::assertSent(AdminPasswordResetMailer::class, function (AdminPasswordResetMailer $mail) use (&$firstMail) {
        $firstMail = $mail;

        return true;
    });

    $this->post('/forgot-password', ['email' => $admin->email]);
    expect(AdminPasswordResetRequest::orderBy('id')->firstOrFail()->superseded_at)->not->toBeNull();
    $this->get($firstMail->resetUrl)->assertRedirect('/forgot-password');
    $this->get(str_replace('reset-password/', 'reset-password/9', $firstMail->resetUrl))
        ->assertRedirect('/forgot-password');

    $second = AdminPasswordResetRequest::orderByDesc('id')->firstOrFail();
    $secondUrl = URL::temporarySignedRoute('password.reset', $second->expires_at, ['reference' => $second->reference]);
    $this->travel(6)->minutes();
    $this->get($secondUrl)->assertRedirect('/forgot-password');
});
