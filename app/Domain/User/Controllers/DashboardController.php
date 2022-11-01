<?php

namespace App\Domain\User\Controllers;

use App\Domain\Organization\BLL\Event\EventBLLInterface;
use App\Domain\Organization\BLL\Organization\OrganizationBLLInterface;
use App\Http\Controllers\Controller;

/**
 * @property OrganizationBLLInterface $organizationBLL
 * @property EventBLLInterface $eventBLL
 */
class DashboardController extends Controller
{

    public function __construct(
        OrganizationBLLInterface $organizationBLL,
        EventBLLInterface $eventBLL
    ){
        $this->organizationBLL = $organizationBLL;
        $this->eventBLL = $eventBLL;
    }

    public function index()
    {
        return inertia('Dashboard', [
            'links' => [
                'create_organization' => route('organizations.create'),
                'all_organizations' => route('organizations.index'),
                'show_organization' => route('organizations.show', ['organization' => '%organization%']),
                'get_events' => route('events.get'),
                'get_upcoming_events' => route('events.getUpcoming'),
                'show_event' => route('events.show', ['event' => '%event%']),
                'all_events' => route('events.index'),


            ],
            'organizations' => $this->organizationBLL->getDashboardOrganizations(),
            'events' => $this->eventBLL->get()
        ]);
    }
}
