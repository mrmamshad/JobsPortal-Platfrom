<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class SearchController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $tags = Tag::all();
        $searchQuery = $request->input('q');

        $Searchedjob = Job::where('title', 'like', '%' . $searchQuery . '%')
                            ->with(['employer', 'tags'])
                            ->get();

        return Inertia::render('Jobs/Search', [
            'jobs' => $Searchedjob,
            'tags' => $tags
        ]);
    }
}
