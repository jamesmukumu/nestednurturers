<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateDirectoryAdminRequest;
use App\Models\Admin;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class AdminDirectoryController extends Controller
{
    public function edit(Request $request, string $admin): Response
    {
        abort_if($request->user('admin')->getKey() === (int) $admin, 403);

        return Inertia::render('Admin/Admins/Edit', [
            'admin' => Admin::query()->findOrFail($admin)->only(['id', 'name', 'email', 'phonenumber']),
        ]);
    }

    public function update(UpdateDirectoryAdminRequest $request, string $admin): RedirectResponse
    {
        DB::transaction(function () use ($request, $admin) {
            $accounts = Admin::query()->whereIn('id', [$request->user('admin')->getKey(), $admin])
                ->orderBy('id')->lockForUpdate()->get()->keyBy('id');
            $actor = $accounts->get($request->user('admin')->getKey());
            abort_unless($actor?->isAdmin && $actor->hasVerifiedEmail() && (string) $actor->getKey() !== $admin, 403);
            $target = $accounts->get($admin);
            abort_unless($target, 404);
            $target->fill($request->validated());
            $emailChanged = $target->isDirty('email');
            if ($emailChanged) {
                $target->email_verified_at = null;
                $target->isEmailVerified = false;
            }
            $target->save();
            if ($emailChanged) {
                DB::afterCommit(fn () => $target->sendEmailVerificationNotification());
            }
        });

        return to_route('dashboard.admins.index')->with('success', 'Admin details updated successfully.');
    }

    public function destroy(Request $request, string $admin): RedirectResponse
    {
        abort_if($request->user('admin')->getKey() === (int) $admin, 403);
        DB::transaction(function () use ($request, $admin) {
            // Consistent lock order prevents two elevated admins deleting each other.
            $accounts = Admin::query()->whereIn('id', [$request->user('admin')->getKey(), $admin])
                ->orderBy('id')->lockForUpdate()->get()->keyBy('id');
            $actor = $accounts->get($request->user('admin')->getKey());
            abort_unless($actor?->isAdmin && $actor->hasVerifiedEmail(), 403);
            $target = $accounts->get($admin);
            abort_unless($target, 404);
            foreach (['blogs', 'blogCategories', 'services'] as $relation) {
                $target->{$relation}()->update(['admins_id' => $actor->getKey()]);
            }
            $target->delete();
        });

        return to_route('dashboard.admins.index')->with('success', 'Admin deleted. Their content has been transferred to you.');
    }

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
