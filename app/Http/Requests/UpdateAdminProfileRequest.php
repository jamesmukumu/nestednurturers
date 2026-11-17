<?php

namespace App\Http\Requests;

use App\Models\Admin;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateAdminProfileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user('admin') instanceof Admin;
    }

    /**
     * @return array<string, array<int, string|\Illuminate\Contracts\Validation\ValidationRule>>
     */
    public function rules(): array
    {
        /** @var Admin $admin */
        $admin = $this->user('admin');

        return [
            'name' => ['required', 'string', 'max:255', Rule::unique(Admin::class)->ignore($admin->getKey())],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(Admin::class)->ignore($admin->getKey())],
            'phonenumber' => ['required', 'string', 'max:255', Rule::unique(Admin::class)->ignore($admin->getKey())],
        ];
    }
}
