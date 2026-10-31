<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
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
                'user' => $request->user(),
            ],
        ];
    }
}
