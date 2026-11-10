<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class UpdateBlogRequest extends FormRequest
{
    public function authorize(): bool
    {
        $admin = $this->user('admin');
        $blogId = $this->route('blog');

        return $admin !== null && $admin->blogs()->whereKey($blogId)->exists();
    }

    /**
     * @return array<string, array<int, string|\Illuminate\Contracts\Validation\ValidationRule>>
     */
    public function rules(): array
    {
        $adminId = $this->user('admin')?->getAuthIdentifier();
        $blog = $this->route('blog');

        return [
            'title' => [
                'required',
                'string',
                'max:255',
                Rule::unique('blogs', 'title')->ignore($blog),
            ],
            'description' => ['required', 'string'],
            'overview' => ['required', 'string'],
            'blog_categories_id' => [
                'required',
                Rule::exists('blog_categories', 'id')->where('admins_id', $adminId),
            ],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            'reading_time' => ['required', 'integer', 'min:1', 'max:300'],
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
