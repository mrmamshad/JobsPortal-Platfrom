<?php

namespace Database\Factories;

use App\Models\Employer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Job>
 */
class JobFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'employer_id' => Employer::factory(),
            'title' => fake()->jobTitle(),
            'salary' => fake()->randomElement(['$1000', '$2000', '$3000', '$4000', '$5000', '$6000', '$7000', '$8000', '$9000', '$10000']),
            'location' => 'Remote',
            'schedule' => fake()->randomElement(['full-time', 'part-time', 'remote']),
            'url' => fake()->url,
            'featured' => false,
        ];
    }
}
