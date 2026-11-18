<?php

namespace App\Jobs;

use App\Mail\AdminPasswordResetMailer;
use App\Models\AdminPasswordResetRequest;
use Illuminate\Contracts\Queue\ShouldBeEncrypted;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

class SendAdminPasswordResetLink implements ShouldBeEncrypted, ShouldQueue
{
    use Queueable;

    public int $tries = 3;

    public array $backoff = [10, 30, 60];

    public function __construct(public int $resetRequestId)
    {
        $this->afterCommit = true;
    }

    public function handle(): void
    {
        $resetRequest = AdminPasswordResetRequest::query()
            ->with('admin')
            ->find($this->resetRequestId);

        if ($resetRequest === null || $resetRequest->consumed_at !== null || $resetRequest->superseded_at !== null || $resetRequest->expires_at->isPast()) {
            return;
        }

        $resetUrl = URL::temporarySignedRoute(
            'password.reset',
            $resetRequest->expires_at,
            ['reference' => $resetRequest->reference],
        );

        Mail::to($resetRequest->admin->email)->send(
            new AdminPasswordResetMailer($resetRequest->admin, $resetUrl),
        );
    }
}
