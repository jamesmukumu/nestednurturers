<?php

use App\Models\Admin;
use App\Models\Consultation;
use App\Mail\EmailVerifierMailer;
use Illuminate\Support\Facades\Mail;
use Inertia\Testing\AssertableInertia as Assert;

function createConsultation(array $overrides = []): Consultation
{
    return Consultation::create(array_merge([
        'name' => 'Morgan Family',
        'email' => 'morgan@example.test',
        'phonenumber' => '+14155550123',
        'consultationDate' => '2026-12-01 10:00:00',
        'timezone' => 'America/Los_Angeles',
        'consultationID' => (string) Illuminate\Support\Str::uuid(),
        'location' => 'Oakland',
        'expected_due_time' => '2027-01-15 00:00:00',
        'preferred_douala_services_start' => '2026-12-20 00:00:00',
        'services_seeked' => 'Postpartum doula',
        'duration_of_support' => 'Six weeks',
        'no_nights_per_week' => '2',
        'howHeard' => 'Referral',
        'is_acknowledged' => true,
    ], $overrides));
}

function verifiedAdmin(array $attributes = []): Admin
{
    return Admin::factory()->create(array_merge([
        'isAdmin' => true,
        'isEmailVerified' => true,
    ], $attributes));
}

test('guests are redirected from enquiries and status endpoints', function () {
    $consultation = createConsultation();

    $this->get('/enquiries')->assertRedirect(route('login'));
    $this->get("/enquiries/{$consultation->id}")->assertRedirect(route('login'));
    $this->patch("/enquiries/{$consultation->id}/status", ['status' => 'addressed'])
        ->assertRedirect(route('login'));
});

test('authenticated admin accounts can access consultations regardless of the legacy admin flag', function () {
    $admin = verifiedAdmin(['isAdmin' => false]);

    $this->actingAs($admin, 'admin')
        ->get('/enquiries')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('auth.canViewEnquiries', true));
});

test('enquiry index paginates filters and clamps out of range pages', function () {
    $admin = verifiedAdmin();

    foreach (range(1, 13) as $number) {
        createConsultation([
            'name' => "Family {$number}",
            'email' => "family{$number}@example.test",
            'services_seeked' => $number === 13 ? 'Overnight care' : 'Postpartum support',
        ]);
    }

    $this->actingAs($admin, 'admin')
        ->get('/enquiries?status=pending&q=postpartum&sort=-created_at&per_page=10')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Admin/Enquiries/Index')
            ->where('pagination.total', 12)
            ->where('pagination.perPage', 10)
            ->has('enquiries', 10)
            ->where('filters.status', 'pending'));

    $this->get('/enquiries?status=pending&q=overnight')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('pagination.total', 1)
            ->where('enquiries.0.servicesSeeked', 'Overnight care'));

    $this->get('/enquiries?page=20')
        ->assertRedirect(route('enquiries.index', ['page' => 2]));
});

test('marking addressed is idempotent and reopening clears tracking', function () {
    $admin = verifiedAdmin();
    $consultation = createConsultation();
    $this->actingAs($admin, 'admin');

    $this->patch("/enquiries/{$consultation->id}/status", ['status' => 'addressed'])
        ->assertRedirect();
    $firstAddressedAt = $consultation->fresh()->addressed_at;

    $this->travel(5)->minutes();
    $this->patch("/enquiries/{$consultation->id}/status", ['status' => 'addressed'])
        ->assertRedirect();
    expect($consultation->fresh()->addressed_at->equalTo($firstAddressedAt))->toBeTrue();
    expect($consultation->fresh()->addressed_by)->toBe($admin->id);

    $this->patch("/enquiries/{$consultation->id}/status", ['status' => 'pending'])
        ->assertRedirect();
    expect($consultation->fresh()->addressed_at)->toBeNull();
    expect($consultation->fresh()->addressed_by)->toBeNull();
});

test('sidebar pending count is refreshed after an enquiry status change', function () {
    $admin = verifiedAdmin();
    $consultation = createConsultation();
    $this->actingAs($admin, 'admin');

    $this->get('/dashboard')
        ->assertInertia(fn (Assert $page) => $page->where('pendingEnquiriesCount', 1));

    $this->patch("/enquiries/{$consultation->id}/status", ['status' => 'addressed'])
        ->assertRedirect();

    $this->get('/dashboard')
        ->assertInertia(fn (Assert $page) => $page->where('pendingEnquiriesCount', 0));
});

test('profile shares verification state from the authenticated admin', function () {
    $unverifiedAdmin = Admin::factory()->create([
        'email_verified_at' => null,
        'isEmailVerified' => false,
    ]);
    $this->actingAs($unverifiedAdmin, 'admin')
        ->get('/dashboard/profile')
        ->assertRedirect(route('admin.verification.notice'))
        ->assertSessionHas('pending_admin_verification_id', $unverifiedAdmin->id);
    $this->assertGuest('admin');

    $verifiedAdmin = verifiedAdmin();
    $this->actingAs($verifiedAdmin, 'admin')
        ->get('/dashboard/profile')
        ->assertInertia(fn (Assert $page) => $page->where('auth.emailVerified', true));
});

test('verification email route is throttled', function () {
    Mail::fake();
    $admin = Admin::factory()->create([
        'email_verified_at' => null,
        'isEmailVerified' => false,
    ]);
    foreach (range(1, 3) as $attempt) {
        $this->from(route('admin.verification.notice'))
            ->withSession(['pending_admin_verification_id' => $admin->id])
            ->post(route('admin.verification.send'))
            ->assertRedirect(route('admin.verification.notice'));
    }

    $this->from(route('admin.verification.notice'))
        ->withSession(['pending_admin_verification_id' => $admin->id])
        ->post(route('admin.verification.send'))
        ->assertStatus(429);

    Mail::assertQueued(EmailVerifierMailer::class, 3);
});
