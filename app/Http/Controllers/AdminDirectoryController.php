<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Inertia\Inertia;
use Inertia\Response;

class AdminDirectoryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Admins/Index', [
            'admins' => Admin::query()
                ->orderBy('name')
                ->get(['id', 'name', 'email', 'isAdmin', 'email_verified_at', 'created_at'])
                ->map(fn (Admin $admin) => [
                    'id' => $admin->getKey(),
                    'name' => $admin->name,
                    'email' => $admin->email,
                    'isAdmin' => $admin->isAdmin,
                    'emailVerified' => $admin->hasVerifiedEmail(),
                    'createdAt' => $admin->created_at?->toIso8601String(),
                ]),
        ]);
    }
}
