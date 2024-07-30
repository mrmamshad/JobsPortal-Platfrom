<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Faker\Core\File;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $employerattributes = $request->validate([
            'employerName' => ['required', 'string', 'max:255'],
            'employerLogo' => ['required', 'mimes:jpg,jpeg,png,webp'],
        ]);

        if ($request->hasFile('employerLogo')) {
           $image = $request->file('employerLogo');
           $imageName = time() . '_' . $image->getClientOriginalName();
           $path = $image->storeAs('uploads', $imageName, 'public');
           $employerattributes['logo'] = $path;
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user->employer()->create([
            'name' => $employerattributes['employerName'],
            'logo' => $employerattributes['logo'],
        ]);

        
        event(new Registered($user));
        Auth::login($user);
        return redirect(route('home'));
    }
}
