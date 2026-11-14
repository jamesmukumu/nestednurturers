<?php

use App\Mail\EnquiryMail;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;

test('a modern enquiry submission succeeds without hidden legacy fields', function () {
    Mail::fake();
    $today = Carbon::today()->format('Y-m-d H:i:s');

    $response = $this->postJson('/api/submit/enquiry', [
        'email' => 'parent@example.test',
        'consultationDate' => Carbon::tomorrow()->setTime(10, 0)->format('Y-m-d H:i:s'),
        'phonenumber' => '+14155550123',
        'name' => 'Morgan Parent',
        'location' => 'Oakland, CA',
        'timezone' => 'America/Los_Angeles',
        'services_seeked' => json_encode(['Postpartum Day support']),
        'duration_of_support' => 'Six weeks',
        'howHeard' => 'Referral',
    ]);

    $response
        ->assertOk()
        ->assertJson([
            'message' => 'Enquiry Received',
            'success' => true,
        ]);

    $this->assertDatabaseHas('consultations', [
        'email' => 'parent@example.test',
        'expected_due_time' => $today,
        'preferred_douala_services_start' => $today,
        'no_nights_per_week' => '[]',
    ]);

    Mail::assertSent(EnquiryMail::class, fn (EnquiryMail $mail) => $mail->hasTo('parent@example.test'));
});
