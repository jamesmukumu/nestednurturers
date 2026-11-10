<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class AdminEmailVerificationController extends Controller
{
    public function __invoke(Request $request, int $id, string $hash): RedirectResponse
    {
        $admin = Admin::find($id);

        if (! $admin || ! hash_equals(sha1($admin->getEmailForVerification()), $hash)) {
            return redirect()->route('admin.verification.notice')
                ->with('error', 'This verification link is invalid. Request a new one.');
        }

        if ($admin->email_verified_at === null && $admin->markEmailAsVerified()) {
            event(new Verified($admin));
        }

        if ((int) $request->session()->get('pending_admin_verification_id') === $admin->getKey()) {
            $request->session()->forget('pending_admin_verification_id');
        }

        return redirect()->route('login')
            ->with('status', 'Your email address has been verified. You can now log in.');
    }
}
