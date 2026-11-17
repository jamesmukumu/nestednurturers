<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class StoreServiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user('admin') !== null;
    }

    /**
     * @return array<string, array<int, string|\Illuminate\Contracts\Validation\ValidationRule>>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255', 'unique:services,title'],
            'meta_overview' => ['required', 'string'],
            'meta_description' => ['required', 'string'],
            'image' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
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
