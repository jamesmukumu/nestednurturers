<?php

namespace App\Http\Controllers;

use App\Actions\UpdateConsultationStatus;
use App\Http\Requests\UpdateConsultationStatusRequest;
use App\Models\Admin;
use App\Models\Consultation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;

class EnquiryStatusController extends Controller
{
    public function __invoke(
        UpdateConsultationStatusRequest $request,
        Consultation $consultation,
        UpdateConsultationStatus $updateStatus,
    ): RedirectResponse|JsonResponse {
        $this->authorize('update', $consultation);

        $admin = $request->user('admin');
        abort_unless($admin instanceof Admin, 403);

        $updated = $updateStatus->execute(
            $consultation,
            $request->validated('status'),
            $admin,
        );

        $message = $request->validated('status') === 'addressed'
            ? 'Enquiry marked as addressed.'
            : 'Enquiry reopened.';

        if ($request->expectsJson()) {
            return response()->json([
                'message' => $message,
                'enquiry' => [
                    'id' => $updated->id,
                    'addressedAt' => $updated->addressed_at?->toIso8601String(),
                    'addressedBy' => $updated->addressedBy?->name,
                    'isAddressed' => $updated->isAddressed,
                ],
            ]);
        }

        return back()->with('success', $message);
    }
}
