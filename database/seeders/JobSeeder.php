<?php

namespace Database\Seeders;

use App\Models\Job;
use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       // Create 3 tags
       $tags = Tag::factory(3)->create();

       // Create 25 jobs and attach tags to each
       Job::factory(20)->create(new Sequence(

        [
            'featured' => false ,
        ],[
            'featured' => true ,]
        ))->each(function ($job) use ($tags) {
           $job->tags()->attach($tags->random(rand(1, 3))->pluck('id')->toArray());
       });
    }
}
