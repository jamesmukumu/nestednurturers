<?php

namespace App\Http\Middleware;

use App\Models\Consultation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $admin = $request->user('admin');

        return [
            ...parent::share($request),
            'uscities' => fn() => collect(
                json_decode(
                    Storage::disk('private')->get('us_cities_states.json'),
                    true,
                ),
            )->map(
                    fn(array $city) => $city['city'] . ' (' . $city['state'] . ')',
                )->values()->all(),
            'auth' => [
                'user' => $admin,
                'emailVerified' => $admin?->hasVerifiedEmail() ?? false,
                'canViewEnquiries' => $admin?->can('viewAny', Consultation::class) ?? false,
            ],
            'pendingEnquiriesCount' => fn () => $admin?->can('viewAny', Consultation::class)
                ? Cache::remember(
                    'pending_enquiries_count',
                    now()->addSeconds(45),
                    fn () => Consultation::pending()->count(),
                )
                : 0,
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'status' => fn () => $request->session()->get('status'),
            ],
        ];
    }
}
