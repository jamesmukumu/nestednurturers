<?php

namespace Database\Factories;

use App\Models\Admin;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Services>
 */
class ServicesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->unique()->sentence(3);

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'admins_id' => Admin::factory(),
            'meta_overview' => '<p>'.fake()->sentence().'</p>',
            'meta_description' => '<p>'.fake()->paragraph().'</p>',
            'image_path' => 'services/'.fake()->uuid().'.jpg',
            'published' => false,
        ];
    }
}
