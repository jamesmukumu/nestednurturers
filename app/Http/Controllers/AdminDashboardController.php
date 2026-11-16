<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Consultation;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $this->authorize('viewAny', Consultation::class);
        $admin = $request->user('admin');
        $now = now()->toImmutable();
        $weekStart = $now->subDays(7);
        $firstMonth = $now->startOfMonth()->subMonths(5);

        $consultations = Consultation::query()->selectRaw(
            'COUNT(*) AS total, COUNT(CASE WHEN addressed_at IS NULL THEN 1 END) AS pending,
             COUNT(CASE WHEN created_at >= ? AND created_at <= ? THEN 1 END) AS recent',
            [$weekStart, $now],
        )->first();
        $articles = $admin->blogs()->selectRaw(
            'COUNT(*) AS total, COUNT(CASE WHEN is_published = ? THEN 1 END) AS published', [true],
        )->first();

        $months = collect(range(0, 5))->map(fn (int $offset) => $firstMonth->addMonths($offset));
        // Conditional aggregates keep monthly buckets portable across MySQL and SQLite.
        $series = function (Builder $query) use ($months, $firstMonth, $now): array {
            $query->where('created_at', '>=', $firstMonth)->where('created_at', '<=', $now);
            foreach ($months as $index => $month) {
                $query->selectRaw(
                    "COUNT(CASE WHEN created_at >= ? AND created_at < ? THEN 1 END) AS month_{$index}",
                    [$month, $month->addMonth()],
                );
            }
            $counts = $query->first();

            return $months->map(fn ($month, $index) => (int) $counts->{"month_{$index}"})->all();
        };
        $consultationSeries = $series(Consultation::query());
        $articleSeries = $series($admin->blogs()->getQuery());

        return Inertia::render('Admin/Dashboard', [
            'dashboard' => [
                'generatedAt' => $now->toIso8601String(),
                'timezone' => config('app.timezone'),
                'admins' => Admin::query()->count(),
                'articles' => [
                    'total' => (int) $articles->total,
                    'published' => (int) $articles->published,
                    'drafts' => (int) $articles->total - (int) $articles->published,
                ],
                'consultations' => [
                    'total' => (int) $consultations->total,
                    'pending' => (int) $consultations->pending,
                    'addressed' => (int) $consultations->total - (int) $consultations->pending,
                    'newThisWeek' => (int) $consultations->recent,
                ],
                'activity' => $months->map(fn ($month, $index) => [
                    'month' => $month->format('Y-m'),
                    'label' => $month->format('M'),
                    'fullLabel' => $month->format('F Y'),
                    'consultations' => $consultationSeries[$index],
                    'articles' => $articleSeries[$index],
                ])->all(),
                'pendingConsultations' => Consultation::query()->pending()->latest('created_at')->latest('id')
                    ->limit(4)->get(['id', 'name', 'location', 'created_at'])
                    ->map(fn (Consultation $consultation) => [
                        'id' => $consultation->id,
                        'name' => $consultation->name,
                        'location' => $consultation->location,
                        'createdAt' => $consultation->created_at?->toIso8601String(),
                    ]),
            ],
        ]);
    }
}
