<?php

namespace App\Http\Requests;

use App\Models\Admin;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateDirectoryAdminRequest extends FormRequest
{
    public function authorize(): bool
    {
        $actor = $this->user('admin');

        return $actor instanceof Admin && $actor->isAdmin && $actor->getKey() !== (int) $this->route('admin');
    }

    public function rules(): array
    {
        $id = $this->route('admin');

        return [
            'name' => ['required', 'string', 'max:255', Rule::unique(Admin::class)->ignore($id)],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(Admin::class)->ignore($id)],
            'phonenumber' => ['required', 'string', 'max:255', Rule::unique(Admin::class)->ignore($id)],
        ];
    }
}
