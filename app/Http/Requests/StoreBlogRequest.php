<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;
use Illuminate\Validation\Rule;

class StoreBlogRequest extends FormRequest
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
        $adminId = $this->user('admin')?->getAuthIdentifier();

        return [
            'title' => ['required', 'string', 'max:255', 'unique:blogs,title'],
            'description' => ['required', 'string'],
            'overview' => ['required', 'string'],
            'blog_categories_id' => [
                'required',
                Rule::exists('blog_categories', 'id')->where('admins_id', $adminId),
            ],
            'image' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'is_published' => ['sometimes', 'boolean'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator): void {
            foreach (['description', 'overview'] as $field) {
                $plainText = trim(html_entity_decode(strip_tags((string) $this->input($field))));
                if ($plainText === '') {
                    $validator->errors()->add($field, 'This field is required.');
                }
            }
        });
    }
}
