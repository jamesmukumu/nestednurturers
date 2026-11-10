<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureAdminEmailIsVerified
{
    public function handle(Request $request, Closure $next): Response
    {
        $admin = $request->user('admin');

        if (! $admin || $admin->email_verified_at !== null) {
            return $next($request);
        }

        $request->session()->put('pending_admin_verification_id', $admin->getKey());
        Auth::guard('admin')->logout();

        return redirect()->route('admin.verification.notice')
            ->with('error', 'Please verify your email address to access the admin area.');
    }
}
