<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\AdminPasswordResetMailer;
use App\Models\Admin;
use App\Models\AdminPasswordResetRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Qh\LaravelSnowflake\Snowflake;

class AdminPasswordResetController extends Controller
{
    public function createRequest(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    public function storeRequest(Request $request, Snowflake $snowflake): RedirectResponse
    {
        $validated = $request->validate(['email' => ['required', 'email']]);
        $email = Str::lower(trim($validated['email']));
        $admin = Admin::query()->where('email', $email)->first();

        if ($admin === null) {
            throw ValidationException::withMessages([
                'email' => ['No administrator account was found for this email address.'],
            ]);
        }

        $resetRequest = DB::transaction(function () use ($admin, $snowflake): AdminPasswordResetRequest {
            $now = now();

            AdminPasswordResetRequest::query()
                ->where('admin_id', $admin->getKey())
                ->whereNull('consumed_at')
                ->whereNull('superseded_at')
                ->update(['superseded_at' => $now]);

            return AdminPasswordResetRequest::create([
                'admin_id' => $admin->getKey(),
                'reference' => $snowflake->generate(),
                'expires_at' => $now->copy()->addMinutes(config('auth.admin_password_reset.expire')),
            ]);
        });

        $resetUrl = URL::temporarySignedRoute(
            'password.reset',
            $resetRequest->expires_at,
            ['reference' => $resetRequest->reference],
        );

        Mail::to($admin->email)->send(new AdminPasswordResetMailer($admin, $resetUrl));

        return to_route('password.request')
            ->with('status', 'A password reset link has been sent. It expires in 5 minutes.');
    }

    public function createReset(Request $request, string $reference): Response|RedirectResponse
    {
        if ($this->activeRequest($reference) === null) {
            return redirect()->route('password.request')
                ->with('status', 'This password reset link is invalid or has expired. Request a new one.');
        }

        return Inertia::render('Auth/ResetPassword', [
            'reference' => $reference,
            'resetUrl' => $request->fullUrl(),
        ]);
    }

    public function storeReset(Request $request, string $reference): RedirectResponse
    {
        $validated = $request->validate([
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $updated = DB::transaction(function () use ($reference, $validated): bool {
            $resetRequest = AdminPasswordResetRequest::query()
                ->where('reference', $reference)
                ->lockForUpdate()
                ->first();

            if ($resetRequest === null || $resetRequest->consumed_at !== null || $resetRequest->superseded_at !== null || $resetRequest->expires_at->isPast()) {
                return false;
            }

            $admin = Admin::query()->lockForUpdate()->find($resetRequest->admin_id);

            if ($admin === null) {
                return false;
            }

            $admin->forceFill([
                'password' => Hash::make($validated['password']),
                'remember_token' => Str::random(60),
            ])->save();

            $resetRequest->forceFill(['consumed_at' => now()])->save();

            return true;
        });

        if (! $updated) {
            throw ValidationException::withMessages([
                'password' => ['This password reset link is invalid or has expired.'],
            ]);
        }

        return redirect()->route('login')->with('status', 'Your password has been reset. You can now log in.');
    }

    private function activeRequest(string $reference): ?AdminPasswordResetRequest
    {
        return AdminPasswordResetRequest::query()
            ->where('reference', $reference)
            ->active()
            ->first();
    }
}
