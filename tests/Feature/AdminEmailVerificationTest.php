<?php

use App\Mail\EmailVerifierMailer;
use App\Mail\EnquiryMail;
use App\Models\Admin;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Inertia\Testing\AssertableInertia as Assert;

function unverifiedAdmin(array $attributes = []): Admin
{
    return Admin::factory()->create(array_merge([
        'email_verified_at' => null,
        'isEmailVerified' => false,
    ], $attributes));
}

test('verification notice is available after registration without an admin session', function () {
    $this->withSession(['pending_admin_verification_id' => null])
        ->get(route('admin.verification.notice'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Auth/VerifyEmail'));
});

test('a valid signed verification link verifies the admin and redirects to login', function () {
    Event::fake([Verified::class]);
    $admin = unverifiedAdmin();
    $url = URL::temporarySignedRoute(
        'admin.verification.verify',
        now()->addMinutes(5),
        ['id' => $admin->id, 'hash' => sha1($admin->getEmailForVerification())],
    );

    $this->get($url)
        ->assertRedirect(route('login'))
        ->assertSessionHas('status', 'Your email address has been verified. You can now log in.');

    expect($admin->fresh()->email_verified_at)->not->toBeNull();
    expect($admin->fresh()->isEmailVerified)->toBeTrue();
    Event::assertDispatched(Verified::class);
});

test('verification links expire after five minutes and direct the admin to request another', function () {
    $admin = unverifiedAdmin();
    $url = URL::temporarySignedRoute(
        'admin.verification.verify',
        now()->addMinutes(5),
        ['id' => $admin->id, 'hash' => sha1($admin->getEmailForVerification())],
    );

    $this->travel(6)->minutes();

    $this->get($url)
        ->assertRedirect(route('admin.verification.notice'))
        ->assertSessionHas('error', 'This link has expired. Request a new one.');

    expect($admin->fresh()->email_verified_at)->toBeNull();
});

test('verification mail links use the configured five minute expiry', function () {
    Mail::fake();
    $time = now()->startOfSecond();
    $this->travelTo($time);
    $admin = unverifiedAdmin();

    $admin->sendEmailVerificationNotification();

    $queuedMail = null;
    Mail::assertQueued(EmailVerifierMailer::class, function (EmailVerifierMailer $mail) use (&$queuedMail, $admin) {
        $queuedMail = $mail;

        return $mail->hasTo($admin->email);
    });

    $query = [];
    parse_str(parse_url($queuedMail->verificationUrl, PHP_URL_QUERY), $query);

    expect((int) $query['expires'])->toBe($time->addMinutes(5)->timestamp);
});

test('unverified admins cannot log in even when their legacy verification flag is set', function () {
    $admin = unverifiedAdmin([
        'isEmailVerified' => true,
        'password' => Hash::make('secure-pass-123'),
    ]);

    $this->from('/login')->post('/login', [
        'email' => $admin->email,
        'password' => 'secure-pass-123',
        'remember' => true,
    ])->assertRedirect('/login')
        ->assertSessionHasErrors([
            'email' => 'Please verify your email address before logging in.',
        ])
        ->assertSessionHas('pending_admin_verification_id', $admin->id);

    $this->assertGuest('admin');
    expect($admin->fresh()->getRememberToken())->toBe($admin->getRememberToken());
});

test('an active session for an unverified admin is blocked from protected admin routes', function () {
    $admin = unverifiedAdmin();

    $this->actingAs($admin, 'admin')
        ->get('/dashboard')
        ->assertRedirect(route('admin.verification.notice'))
        ->assertSessionHas('pending_admin_verification_id', $admin->id);

    $this->assertGuest('admin');
});

test('verified admins can log in normally', function () {
    $admin = Admin::factory()->create([
        'password' => Hash::make('secure-pass-123'),
    ]);

    $this->post('/login', [
        'email' => $admin->email,
        'password' => 'secure-pass-123',
    ])->assertRedirect(route('dashboard'));

    $this->assertAuthenticatedAs($admin, 'admin');
});

test('resend queues a new verification email and is throttled', function () {
    Mail::fake();
    $admin = unverifiedAdmin();

    foreach (range(1, 3) as $attempt) {
        $this->from(route('admin.verification.notice'))
            ->withSession(['pending_admin_verification_id' => $admin->id])
            ->post(route('admin.verification.send'))
            ->assertRedirect(route('admin.verification.notice'));
    }

    $this->from(route('admin.verification.notice'))
        ->withSession(['pending_admin_verification_id' => $admin->id])
        ->post(route('admin.verification.send'))
        ->assertTooManyRequests();

    Mail::assertQueued(EmailVerifierMailer::class, 3);
});

test('the enquiry email still renders with the shared email layout', function () {
    $html = (new EnquiryMail([
        'name' => 'Morgan Family',
        'email' => 'morgan@example.test',
        'phonenumber' => '+14155550123',
        'location' => 'Oakland',
        'expected_due_time' => '2027-01-15',
        'preferred_doula_services_start' => '2026-12-20',
        'duration_of_support' => 'Six weeks',
        'no_nights_per_week' => '2',
        'services_seeked' => 'Postpartum doula',
        'howHeard' => 'Referral',
    ]))->render();

    expect($html)
        ->toContain('Enquiry Summary')
        ->toContain('Thank you for reaching out to NestedNurturers')
        ->toContain(rtrim(config('app.url'), '/').'/images/updates-logo.jpeg')
        ->toContain('All rights reserved.');
});
