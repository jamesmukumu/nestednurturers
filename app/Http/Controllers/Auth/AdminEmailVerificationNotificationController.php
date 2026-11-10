<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class AdminEmailVerificationNotificationController extends Controller
{
    public function __invoke(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'email' => ['nullable', 'email', 'max:255'],
        ]);

        $pendingAdminId = $request->session()->get('pending_admin_verification_id');
        $admin = Admin::find($pendingAdminId);
        $hasPendingAdmin = $admin !== null;

        if (! $admin && isset($validated['email'])) {
            $admin = Admin::where('email', $validated['email'])->first();
        }

        if (! $admin) {
            return back()->with('status', 'If an unverified account matches that email, a fresh verification link has been sent.');
        }

        if ($admin->email_verified_at !== null) {
            if (! $hasPendingAdmin) {
                return back()->with('status', 'If an unverified account matches that email, a fresh verification link has been sent.');
            }

            $request->session()->forget('pending_admin_verification_id');
            return redirect()->route('login')
                ->with('status', 'Your email address is already verified. You can log in.');
        }

        $admin->sendEmailVerificationNotification();

        return back()->with('status', $hasPendingAdmin
            ? 'A fresh verification link has been sent to your email address.'
            : 'If an unverified account matches that email, a fresh verification link has been sent.');
    }
}
