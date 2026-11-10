<?php

namespace App\Actions;

use App\Models\Admin;
use App\Models\Consultation;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class UpdateConsultationStatus
{
    public function execute(Consultation $consultation, string $status, Admin $admin): Consultation
    {
        $updated = DB::transaction(function () use ($consultation, $status, $admin) {
            $locked = Consultation::query()
                ->lockForUpdate()
                ->findOrFail($consultation->getKey());

            $shouldBeAddressed = $status === 'addressed';

            if ($locked->isAddressed === $shouldBeAddressed) {
                return $locked;
            }

            $locked->forceFill([
                'addressed_at' => $shouldBeAddressed ? now() : null,
                'addressed_by' => $shouldBeAddressed ? $admin->getKey() : null,
            ])->save();

            return $locked;
        });

        Cache::forget('pending_enquiries_count');

        return $updated->load('addressedBy:id,name');
    }
}
