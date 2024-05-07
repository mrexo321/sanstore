<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $category = Category::all();
        return [
            'productName' => $productName = fake()->name(),
            'description' => fake()->sentence(),
            'price' => rand(1000,10000) * 2,
            'slug' => Str::slug($productName),
            'category_id' => rand(1,3),
            'image' => 'https://1.bp.blogspot.com/-sogeJNCX5L8/XWpewDcS1dI/AAAAAAAACG0/Z5pDpRThtawxs7T62aFqWNy3q71a3ligQCLcBGAs/s1600/spotify%2Blogo.png'
        ];
    }
}
