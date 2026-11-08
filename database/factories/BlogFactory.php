<?php

namespace Database\Factories;

use App\Models\Admin;
use App\Models\BlogCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->unique()->sentence(4);

        return [
            'title' => $title,
            'description' => fake()->paragraphs(3, true),
            'overview' => fake()->paragraph(),
            'image_path' => 'blogs/placeholder.jpg',
            'is_published' => false,
            'slug' => Str::slug($title),
            'blog_categories_id' => BlogCategory::factory(),
            'reading_time' => 1,
            'admins_id' => Admin::factory(),
            'views' => 0,
        ];
    }
}
