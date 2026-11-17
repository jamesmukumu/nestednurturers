<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class UpdateServiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        $admin = $this->user('admin');

        return $admin !== null && $admin->services()->whereKey($this->route('service'))->exists();
    }

    /**
     * @return array<string, array<int, string|\Illuminate\Contracts\Validation\ValidationRule>>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255', Rule::unique('services', 'title')->ignore($this->route('service'))],
            'meta_overview' => ['required', 'string'],
            'meta_description' => ['required', 'string'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'published' => ['sometimes', 'boolean'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator): void {
            foreach (['meta_overview', 'meta_description'] as $field) {
                $plainText = trim(str_replace("\u{00A0}", ' ', html_entity_decode(strip_tags((string) $this->input($field)))));
                if ($plainText === '') {
                    $validator->errors()->add($field, 'This field is required.');
                }
            }
        });
    }
}
