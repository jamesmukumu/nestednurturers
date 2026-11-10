<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminProfileController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Admin/Profile');
    }

    public function data(Request $request): JsonResponse
    {
        $admin = $request->user('admin');
        abort_unless($admin instanceof Admin, 401);

        return response()->json([
            'profile' => [
                'id' => $admin->getKey(),
                'name' => $admin->name,
                'email' => $admin->email,
                'phonenumber' => $admin->phonenumber,
                'isEmailVerified' => $admin->hasVerifiedEmail(),
                'isAdmin' => $admin->isAdmin,
                'created_at' => $admin->created_at?->toIso8601String(),
                'updated_at' => $admin->updated_at?->toIso8601String(),
            ],
        ]);
    }
}
