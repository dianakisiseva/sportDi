<?php

namespace App\Domain\User\Policies;

use App\Domain\User\Models\Activity;
use App\Domain\User\Models\Role;
use App\Domain\User\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ActivityPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @return boolean
     */
    public function index(User $user)
    {
        return $user->role_id == Role::ADMIN ||
            $user->role_id == Role::SPORTSMAN;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @return boolean
     */
    public function view(User $user, Activity $activity)
    {
        return $user->role_id == Role::ADMIN ||
            $activity->user_id === auth()->user()->id;

    }

    /**
     * Determine whether the user can create models.
     *
     * @return boolean
     */
    public function create(User $user)
    {
        return $user->role_id == Role::SPORTSMAN;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @return boolean
     */
    public function update(User $user, Activity $activity)
    {
        return $user->role_id == Role::ADMIN ||
            $activity->user_id === auth()->user()->id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @return boolean
     */
    public function delete(User $user, Activity $activity)
    {
        return $user->role_id == Role::ADMIN ||
            $activity->user_id === auth()->user()->id;
    }
}
