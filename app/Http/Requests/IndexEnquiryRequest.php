<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class IndexEnquiryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'status' => ['sometimes', Rule::in(['all', 'pending', 'addressed'])],
            'q' => ['sometimes', 'nullable', 'string', 'max:100'],
            'sort' => ['sometimes', Rule::in(['created_at', '-created_at'])],
            'per_page' => ['sometimes', Rule::in([10, 25, 50, '10', '25', '50'])],
            'page' => ['sometimes', 'integer', 'min:1'],
        ];
    }
}
