<?php

namespace App\Domain\Organization\Providers;


use App\Domain\Organization\BLL\Event\EventBLL;
use App\Domain\Organization\BLL\Event\EventBLLInterface;
use App\Domain\Organization\BLL\Organization\OrganizationBLL;
use App\Domain\Organization\BLL\Organization\OrganizationBLLInterface;
use App\Domain\Organization\DAL\Event\EventDAL;
use App\Domain\Organization\DAL\Event\EventDALInterface;
use App\Domain\Organization\DAL\Organization\OrganizationDAL;
use App\Domain\Organization\DAL\Organization\OrganizationDALInterface;
use App\Domain\Organization\Models\Event;
use App\Domain\Organization\Models\Organization;
use App\Domain\Organization\Policies\EventPolicy;
use App\Domain\Organization\Policies\OrganizationPolicy;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;


class OrganizationProvider extends ServiceProvider
{
    protected $namespace = 'App\Domain\Organization\Controllers';

    /**
     * All of the container bindings that should be registered.
     *
     * @var array
     */
    public $bindings = [
        OrganizationBLLInterface::class => OrganizationBLL::class,
        OrganizationDALInterface::class => OrganizationDAL::class,
        EventBLLInterface::class => EventBLL::class,
        EventDALInterface::class => EventDAL::class

    ];

    /** The policy mappings for the domain.
     *
     * @var array
     */
    protected $policies = [
        Organization::class => OrganizationPolicy::class,
        Event::class => EventPolicy::class
    ];


    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        //
    ];

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerEvents();
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerRoutes();
        $this->registerPolicies();
    }

    /**
     * Register the domain's routes.
     *
     * @return void
     */
    public function registerRoutes()
    {
        if (!$this->app->routesAreCached()) {
            Route::middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('app/Domain/Organization/Routes/web.php'));

            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('app/Domain/Organization/Routes/api.php'));

            $this->app->booted(function () {
                $this->app['router']->getRoutes()->refreshNameLookups();
                $this->app['router']->getRoutes()->refreshActionLookups();
            });
        }
    }

    /**
     * Register the domain's policies.
     *
     * @return void
     */
    public function registerPolicies()
    {
        foreach ($this->policies as $key => $value) {
            Gate::policy($key, $value);
        }
    }

    public function registerEvents()
    {
        $this->booting(function () {
            foreach ($this->listen as $event => $listeners) {
                foreach (array_unique($listeners) as $listener) {
                    Event::listen($event, $listener);
                }
            }
        });
    }
}
