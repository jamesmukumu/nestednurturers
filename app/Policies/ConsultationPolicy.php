<?php

namespace App\Policies;

use App\Models\Admin;
use App\Models\Consultation;

class ConsultationPolicy
{
    public function viewAny(Admin $admin): bool
    {
        return true;
    }

    public function view(Admin $admin, Consultation $consultation): bool
    {
        return true;
    }

    public function update(Admin $admin, Consultation $consultation): bool
    {
        return true;
    }
}
