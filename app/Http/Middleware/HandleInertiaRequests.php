<?php

namespace App\Http\Middleware;

use App\Domain\Organization\BLL\Organization\OrganizationBLLInterface;
use App\Domain\User\Models\Role;
use App\Domain\User\Models\User;
//use App\Services\Translator\TranslatorService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */
    public function getMyProfileLink()
    {
        if(!Auth::user()){
            return null;
        }
        $organization = resolve(OrganizationBLLInterface::class)
            ->getOrganizationByLogin(Auth::user()->login);

        if(Auth::user()->role_id === Role::ORGANIZATION){
           return route('organizations.show', ['organization' => $organization->id]);
        }
        return route('users.show', ['user' => auth()->user()]);

    }
    public function share(Request $request): array
    {
        /** @var User $user */
        $user = Auth::user();

        return array_merge(parent::share($request), [
            'app' => [
                'name' => config('app.name'),
                'locale' => app()->getLocale(),
            ],
           'menu' => [
               'links' => [
                   'home' => route('dashboard'),
                   'my_profile' => $this->getMyProfileLink(),
                   'users' => route('users.index'),
                   'activities' => route('activities.index'),
                   'organizations' => route('organizations.index'),
                   'events' => route('events.index')
               ]
           ],
            'url' => [
                'current' => $request->path(),
                'current_full' => $request->fullUrl(),
            ],
            'auth' => $user
                ? [
                    'user' => $user,
                ]
                : null,
            'flash' => [
                'success' => Session::get('success'),
                'error' => Session::get('error'),
                'warning' => Session::get('warning')
            ],
        ]);
    }

    /**
     * Resolves and prepares validation errors in such
     * a way that they are easier to use client-side.
     *
     * @param  Request  $request
     * @return object
     */
    public function resolveValidationErrors(Request $request)
    {
        if (! $request->session()->has('errors')) {
            return (object) [];
        }

        return (object) collect($request->session()->get('errors')->getBags())->map(function ($bag) {
            return (object) collect($bag->messages())->toArray();
        })->pipe(function ($bags) use ($request) {
            if ($bags->has('default') && $request->header('x-inertia-error-bag')) {
                return [$request->header('x-inertia-error-bag') => $bags->get('default')];
            }

            if ($bags->has('default')) {
                return $bags->get('default');
            }

            return $bags->toArray();
        });
    }
}
