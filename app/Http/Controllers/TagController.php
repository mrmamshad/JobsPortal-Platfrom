<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TagController extends Controller
{

    public function __invoke(Request $request, Tag $tag)
    {

       // Eager load the jobs and their associated employees
       $tag->load('jobs.employer');

       // Pass the jobs with related employees to the Inertia view
       return Inertia::render('Jobs/Search', [
           'jobs' => $tag->jobs,
       ]);
    }
}
