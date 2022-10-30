<?php

namespace App\Domain\Organization\Controllers;

use App\Domain\Organization\BLL\Event\EventBLLInterface;
use App\Domain\Organization\BLL\Organization\OrganizationBLLInterface;
use App\Domain\Organization\Models\Event;
use App\Domain\Organization\Policies\EventPolicy;
use App\Domain\User\BLL\Activity\ActivityBLLInterface;
use App\Domain\User\BLL\User\UserBLLInterface;
use App\Domain\User\Models\Activity;
use App\Domain\User\Models\Role;
use App\Domain\User\Models\User;
use App\Domain\User\Requests\CreateUserRequest;
use App\Domain\User\Requests\UpdateUserRequest;
use App\Domain\User\Requests\UserPasswordUpdateRequest;
use App\Http\Controllers\Controller;
use App\Traits\DataTableUtils;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Yajra\DataTables\Facades\DataTables;


/**
 * @property EventBLLInterface $eventBLL
 * @property OrganizationBLLInterface $organizationBLL
 */
class EventController extends Controller
{

    use DataTableUtils;

    public function __construct(
        EventBLLInterface $eventBLL,
        OrganizationBLLInterface $organizationBLL
    ){
        $this->eventBLL = $eventBLL;
        $this->organizationBLL = $organizationBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return inertia('Event/Index', [
            'links' => [
                    'show' => route('events.show', ['event' => '%event%']),
                    'edit' => route('events.edit', ['event' => '%event%']),
                    'create' => route('events.create'),
                    'store' => route('events.store'),
                    'get' => route('events.get'),
                    'delete' => route('events.destroy', ['event' => '%event%']),
                    'showOrganization' => route('organizations.show', ['organization' => '%organization%']),
                ],
            'categories' => $this->eventBLL->getCategoriesOptions()


        ]);
    }

    public function get()
    {
        $events = $this->eventBLL->getAllEvents();

        return DataTables::eloquent($events)->make(true);
    }

    public function getUpcomingEvents()
    {
        $events = $this->eventBLL->getUpcomingEvents();

        return DataTables::eloquent($events)->make(true);
    }

    public function show(Event $event)
    {
        $event->load('organization');

        return inertia('Event/View', [
            'event' => $event,
            'links' => [
                'edit' => route('events.edit', $event),
                'index' => route('events.index')
            ]
        ]);
    }

    public function create()
    {
        $this->authorize(EventPolicy::CREATE, Event::class);

        return inertia('Event/Create', [
            'links' => [
                'store' => route('events.store')
            ],
            'categories' => $this->eventBLL->getCategoriesOptions()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateUserRequest $request
     */
    public function store(Request $request)
    {
        $this->authorize(EventPolicy::CREATE, Event::class);

        $data = $request->except(['submitBtn']);

        $organization = $this->organizationBLL->getOrganizationByLogin(Auth::user()->login);
        $data['organization_id'] = $organization->id ?? 1;
        $data['date'] = Carbon::parse($request->date)->addDay(1)->format('d-m-Y');

        $this->eventBLL->create($data);

        return redirect()->route('events.index')
            ->with('success', 'Event successfully created!');
    }

    public function edit(Event $event)
    {
        $this->authorize(EventPolicy::UPDATE, $event->load('organization'));

        return inertia('Event/Edit', [
            'event' => $event,
            'links' => [
                'update' => route('events.update', $event),
                'delete' => route('events.destroy', $event)
            ],
            'categories' => $this->eventBLL->getCategoriesOptions()

        ]);
    }

    public function update(Request $request, Event $event)
    {
        $this->authorize(EventPolicy::UPDATE, $event->load('organization'));

        $data = $request->except(['submitBtn', 'organization_name']);
        $data['date'] = Carbon::parse($request->date)->addDay(1)->format('d-m-Y');

        $this->eventBLL->update($event, $data);

        return redirect(route("events.show", ['event' => $event]))
            ->with('success', 'Event successfully updated!');
    }


    public function destroy(Event $event)
    {
        $this->authorize(EventPolicy::DELETE, $event);

        try {
            $this->eventBLL->delete($event);
        } catch (\Throwable $tr) {
            throw $tr;
        }

        return response()->json([
            'message' => 'Event successfully deleted!'
        ]);
    }

}
