<?php

namespace App\Domain\User\Controllers;

use App\Domain\User\BLL\Activity\ActivityBLLInterface;
use App\Domain\User\BLL\User\UserBLLInterface;
use App\Domain\User\Models\Activity;
use App\Domain\User\Models\Role;
use App\Domain\User\Requests\CreateUserRequest;
use App\Http\Controllers\Controller;
use App\Traits\DataTableUtils;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Facades\DataTables;

/**
 * @property UserBLLInterface userBLL
 * @property ActivityBLLInterface $activityBLL
 */
class ActivityController extends Controller
{

    use DataTableUtils;

    public function __construct(
        UserBLLInterface $userBLL,
        ActivityBLLInterface $activityBLL
    ){
        $this->userBLL = $userBLL;
        $this->activityBLL = $activityBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $this->authorize('index', [Activity::class]);

        return inertia('Activity/Index', [
            'links' => [
                    'show' => route('activities.show', ['activity' => '%activity%']),
                    'edit' => route('activities.edit', ['activity' => '%activity%']),
                    'create' => route('activities.create'),
                    'store' => route('activities.store'),
                    'get' => Auth::user()->role_id == Role::ADMIN
                        ? route('activities.getAllActivities', ['tab' => request()->get('tab')])
                        : route('activities.getMyActivities', ['tab' => request()->get('tab')]),
                    'delete' => route('activities.destroy', ['activity' => '%activity%'])
                ],
            'categories' => $this->activityBLL->getCategoriesOptions()

        ]);
    }

    public function getAllActivities($tab)
    {
        $this->authorize('index', [Activity::class]);

        $activities = $this->activityBLL->getAllActivities($tab);

        return DataTables::eloquent($activities)->make(true);
    }

    public function getMyActivities($tab)
    {
        $this->authorize('index', [Activity::class]);

        $activities = $this->activityBLL->getMyActivities($tab);

        return DataTables::eloquent($activities)->make(true);
    }

    public function show(Activity $activity)
    {
        $this->authorize('view', $activity);

        return inertia('Activity/View', [
            'activity' => $activity,
            'links' => [
                'edit' => route('activities.edit', $activity),
                'index' => route('activities.index', ['tab' => 'all'])
            ]
        ]);
    }

    public function create()
    {
        $this->authorize('create', [Activity::class]);

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
        $this->authorize('create', [Activity::class]);

        $data = $request->except(['submitBtn', 'organized_by']);
        $data['user_id'] = Auth::user()->id;
        $data['date'] = Carbon::parse($request->date)->addDay(1)->format('d-m-Y');

        if($request->organized_by){
            $data['organization_id'] = $request->organization_id;
        }

        $this->activityBLL->create($data);

        return redirect()->route('activities.index', ['tab' => 'all'])
            ->with('success', 'Activity successfully created!');
    }

    public function edit(Activity $activity)
    {
        $this->authorize('update', $activity);

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
        $this->authorize('update', $activity);

        $data = $request->except(['submitBtn', 'organized_by']);
        $data['user_id'] = Auth::user()->id;
        $data['date'] = Carbon::parse($request->date)->addDay(1)->format('d-m-Y');

        if($request->organized_by){
            $data['organization_id'] = $request->organization_id;
        }

        $this->activityBLL->update($activity, $data);

        return redirect(route("activities.show", ['activity' => $activity]))
            ->with('success', 'Activity successfully updated!');
    }


    public function destroy(Activity $activity)
    {
        $this->authorize('delete', $activity);

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
