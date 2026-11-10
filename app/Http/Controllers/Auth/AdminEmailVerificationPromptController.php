<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminEmailVerificationPromptController extends Controller
{
    public function __invoke(Request $request): Response|RedirectResponse
    {
        $admin = Admin::find($request->session()->get('pending_admin_verification_id'));

        if ($admin?->email_verified_at !== null) {
            $request->session()->forget('pending_admin_verification_id');

            return redirect()->route('login')
                ->with('status', 'Your email address is already verified. You can log in.');
        }

        return Inertia::render('Auth/VerifyEmail', [
            'status' => $request->session()->get('status'),
            'error' => $request->session()->get('error'),
            'email' => $admin?->email,
            'expirationMinutes' => config('auth.verification.expire', 5),
        ]);
    }
}
