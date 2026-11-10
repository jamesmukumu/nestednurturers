<?php

namespace App\Http\Controllers;

use App\Http\Requests\IndexEnquiryRequest;
use App\Models\Consultation;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class EnquiryController extends Controller
{
    public function index(IndexEnquiryRequest $request): Response|RedirectResponse
    {
        $this->authorize('viewAny', Consultation::class);

        $filters = $request->validated();
        $status = $filters['status'] ?? 'all';
        $perPage = (int) ($filters['per_page'] ?? 10);
        $sortDirection = ($filters['sort'] ?? '-created_at') === 'created_at' ? 'asc' : 'desc';

        $query = Consultation::query()
            ->select([
                'id',
                'name',
                'email',
                'phonenumber',
                'consultationDate',
                'timezone',
                'consultationID',
                'location',
                'expected_due_time',
                'preferred_douala_services_start',
                'services_seeked',
                'duration_of_support',
                'no_nights_per_week',
                'is_acknowledged',
                'created_at',
                'addressed_at',
                'addressed_by',
            ])
            ->with('addressedBy:id,name')
            ->when($status === 'pending', fn ($query) => $query->pending())
            ->when($status === 'addressed', fn ($query) => $query->addressed())
            ->search($filters['q'] ?? null)
            ->orderBy('created_at', $sortDirection);

        $paginator = $query
            ->paginate($perPage, ['*'], 'page', (int) ($filters['page'] ?? 1))
            ->withQueryString();

        if ($paginator->currentPage() > $paginator->lastPage()) {
            return redirect()->route('enquiries.index', [
                ...$filters,
                'page' => $paginator->lastPage(),
            ]);
        }

        return Inertia::render('Admin/Enquiries/Index', [
            'enquiries' => $paginator->getCollection()->map(fn (Consultation $consultation) => [
                'id' => $consultation->id,
                'name' => $consultation->name,
                'email' => $consultation->email,
                'phonenumber' => $consultation->phonenumber,
                'consultationID' => $consultation->consultationID,
                'location' => $consultation->location,
                'consultationDate' => $consultation->consultationDate,
                'expectedDueTime' => $consultation->expected_due_time,
                'servicesSeeked' => $this->servicesPreview($consultation->services_seeked),
                'durationOfSupport' => $consultation->duration_of_support,
                'noNightsPerWeek' => $consultation->no_nights_per_week,
                'createdAt' => $consultation->created_at?->toIso8601String(),
                'addressedAt' => $consultation->addressed_at?->toIso8601String(),
                'addressedBy' => $consultation->addressedBy?->name,
                'isAddressed' => $consultation->isAddressed,
            ])->values(),
            'pagination' => [
                'currentPage' => $paginator->currentPage(),
                'lastPage' => $paginator->lastPage(),
                'perPage' => $paginator->perPage(),
                'total' => $paginator->total(),
                'from' => $paginator->firstItem(),
                'to' => $paginator->lastItem(),
                'links' => $paginator->linkCollection(),
            ],
            'filters' => [
                'status' => $status,
                'q' => $filters['q'] ?? '',
                'sort' => $filters['sort'] ?? '-created_at',
                'per_page' => $perPage,
            ],
        ]);
    }

    public function show(IndexEnquiryRequest $request, Consultation $consultation): Response
    {
        $this->authorize('view', $consultation);

        $consultation->load('addressedBy:id,name');

        return Inertia::render('Admin/Enquiries/Show', [
            'backUrl' => route('enquiries.index', $request->validated()),
            'enquiry' => [
                'id' => $consultation->id,
                'name' => $consultation->name,
                'email' => $consultation->email,
                'phonenumber' => $consultation->phonenumber,
                'consultationID' => $consultation->consultationID,
                'location' => $consultation->location,
                'consultationDate' => $consultation->consultationDate,
                'timezone' => $consultation->timezone,
                'expectedDueTime' => $consultation->expected_due_time,
                'preferredServicesStart' => $consultation->preferred_douala_services_start,
                'servicesSeeked' => $consultation->services_seeked,
                'durationOfSupport' => $consultation->duration_of_support,
                'noNightsPerWeek' => $consultation->no_nights_per_week,
                'howHeard' => $consultation->howHeard,
                'createdAt' => $consultation->created_at?->toIso8601String(),
                'addressedAt' => $consultation->addressed_at?->toIso8601String(),
                'addressedBy' => $consultation->addressedBy?->name,
                'isAddressed' => $consultation->isAddressed,
            ],
        ]);
    }

    private function servicesPreview(?string $services): string
    {
        if ($services === null || trim($services) === '') {
            return '';
        }

        $decoded = json_decode($services, true);
        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
            $services = implode(', ', array_filter($decoded, fn ($service) => is_string($service)));
        }

        return Str::limit($services, 120);
    }
}
