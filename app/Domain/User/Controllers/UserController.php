<?php

namespace App\Domain\User\Controllers;

use App\Domain\User\Models\Role;
use App\Domain\User\Requests\CreateUserRequest;
use App\Domain\User\Requests\UserPasswordUpdateRequest;
use App\Http\Controllers\Controller;
use App\Domain\User\BLL\User\UserBLLInterface;
use App\Domain\User\Models\User;
use App\Domain\User\Requests\UpdateUserRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Yajra\DataTables\Facades\DataTables;

/**
 * @property UserBLLInterface userBLL
 */
class UserController extends Controller
{
    public function __construct(
        UserBLLInterface $userBLL
    ){
        $this->userBLL = $userBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $this->authorize('index', [User::class]);

        return inertia('User/Index', [
            'links' => [
                    'show' => route('users.show', ['user' => '%user%']),
                    'edit' => route('users.edit', ['user' => '%user%']),
                    'create' => route('users.create'),
                    'store' => route('users.store'),
                    'get' => route('users.get'),
                    'updatePassword' => route('users.updatePassword', ['user' => '%user%']),
                    'delete' => route('users.destroy', ['user' => '%user%'])
                ]

        ]);
    }

    public function get()
    {
        $this->authorize('index', [User::class]);

        $users = $this->userBLL->getDatatable();

        return DataTables::eloquent($users)->make(true);
    }

    public function show(User $user)
    {
        $this->authorize('view', [User::class]);

        return inertia('User/View', [
            'user' => $user,
            'links' => [
                'edit' => route('users.edit', $user),
                'index' => route('users.index')
            ]
        ]);
    }

    public function create()
    {
        $this->authorize('create', [User::class]);

        return inertia('User/Create', [
            'links' => [
                'store' => route('users.store')
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateUserRequest $request
     */
    public function store(CreateUserRequest $request)
    {
        $this->authorize('create', [User::class]);

        $data = [
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'login' => $request->login,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => Role::SPORTSMAN
        ];

        $this->userBLL->create($data);

        return redirect()->route('users.index')
            ->with('success', 'User successfully created!');
    }

    public function edit(User $user)
    {
        $this->authorize('update',  $user);

        return inertia('User/Edit', [
            'user' => $user,
            'links' => [
                'update' => route('users.update', $user),
                'updatePassword' => route('users.updatePassword', $user),
                'delete' => route('users.destroy', $user)
            ]
        ]);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $this->authorize('update',  $user);

        $this->userBLL->update($user, $request->all());

        return redirect(route("users.show", ['user' => $user]))
            ->with('success', 'User successfully updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     */
    public function destroy(User $user)
    {
        $this->authorize('delete',  $user);

        try {
            $this->userBLL->delete($user);
        } catch (\Throwable $tr) {
            throw $tr;
        }

        return response()->json([
            'message' => trans('users.message.successfully_deleted')
        ]);
    }

    public function updatePassword(UserPasswordUpdateRequest $request, User $user)
    {
        $this->authorize('update',  $user);

        try {
            $this->userBLL->update($user, ['password' => Hash::make($request->password)]);
        } catch (\Throwable $tr) {
            throw $tr;
        }

        return response()->json([
            'message' => 'User password has been successfully changed'
        ]);
    }
}
