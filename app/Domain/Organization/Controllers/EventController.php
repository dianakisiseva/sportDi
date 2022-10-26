<?php

namespace App\Domain\Organization\Controllers;

use App\Domain\Organization\BLL\Event\EventBLLInterface;
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
 */
class EventController extends Controller
{

    use DataTableUtils;

    public function __construct(
        EventBLLInterface $eventBLL
    ){
        $this->eventBLL = $eventBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
//        $this->authorize('index', [User::class]);

        return inertia('Activity/Index', [
            'links' => [
                    'show' => route('activities.show', ['activity' => '%activity%']),
                    'edit' => route('activities.edit', ['activity' => '%activity%']),
                    'create' => route('activities.create'),
                    'store' => route('activities.store'),
                    'get' => Auth::user()->role_id == Role::ADMIN
                        ? route('activities.getAllActivities')
                        : route('activities.getMyActivities'),
                    'delete' => route('activities.destroy', ['activity' => '%activity%'])
                ],
            'categories' => $this->activityBLL->getCategoriesOptions()

        ]);
    }

    public function getAllActivities()
    {
//        $this->authorize('index', [User::class]);

        $activities = $this->activityBLL->getAllActivities();

        return DataTables::eloquent($activities)
            ->filter(function ($query) {
                $this->filterMultipleColumns($query);
                $this->filterCustomRule($query);
            }, true)
            ->make(true);

        return DataTables::eloquent($activities)->make(true);
    }

    public function getMyActivities()
    {
//        $this->authorize('index', [User::class]);

        $activities = $this->activityBLL->getMyActivities();


        return DataTables::eloquent($activities)->make(true);
    }


    public function show(Activity $activity)
    {
//        $this->authorize('view', [User::class]);

        return inertia('Activity/View', [
            'activity' => $activity,
            'links' => [
                'edit' => route('activities.edit', $activity),
                'index' => route('activities.index')
            ]
        ]);
    }

    public function create()
    {
//        $this->authorize('create', [User::class]);

        return inertia('Activity/Create', [
            'links' => [
                'store' => route('activities.store')
            ],
            'categories' => $this->activityBLL->getCategoriesOptions()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateUserRequest $request
     */
    public function store(Request $request)
    {
//        $this->authorize('create', [User::class]);

        $data = $request->except(['submitBtn', 'organized_by']);
        $data['user_id'] = Auth::user()->id;
        $data['date'] = Carbon::parse($request->date)->format('d-m-Y');

        if($request->organized_by){
            $data['organization_id'] = $request->organization_id;
        }

        $this->activityBLL->create($data);

        return redirect()->route('activities.index')
            ->with('success', 'Activity successfully created!');
    }

    public function edit(Activity $activity)
    {
//        $this->authorize('update',  $activity);

        return inertia('Activity/Edit', [
            'activity' => $activity,
            'links' => [
                'update' => route('activities.update', $activity),
                'delete' => route('activities.destroy', $activity)
            ],
            'categories' => $this->activityBLL->getCategoriesOptions()

        ]);
    }

    public function update(Request $request, Activity $activity)
    {
//        $this->authorize('update',  $user);

        $data = $request->except(['submitBtn', 'organized_by']);
        $data['user_id'] = Auth::user()->id;
        $data['date'] = Carbon::parse($request->date)->format('d-m-Y');

        if($request->organized_by){
            $data['organization_id'] = $request->organization_id;
        }

        $this->activityBLL->update($activity, $data);

        return redirect(route("activities.show", ['activity' => $activity]))
            ->with('success', 'Activity successfully updated!');
    }


    public function destroy(Activity $activity)
    {
//        $this->authorize('delete',  $user);

        try {
            $this->activityBLL->delete($activity);
        } catch (\Throwable $tr) {
            throw $tr;
        }

        return response()->json([
            'message' => 'Activity successfully deleted!'
        ]);
    }

}
