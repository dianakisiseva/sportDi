<?php

namespace App\Domain\Organization\Policies;

use App\Domain\Organization\Models\Event;
use App\Domain\User\Models\Role;
use App\Domain\User\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EventPolicy
{
    use HandlesAuthorization;

    public const CREATE = 'create';
    public const UPDATE = 'update';
    public const DELETE = 'delete';

    /**
     * Determine whether the user can view any models.
     *
     * @return boolean
     */
    public function index(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @return boolean
     */
    public function view(User $user)
    {
        return true;

    }

    /**
     * Determine whether the user can create models.
     *
     * @return boolean
     */
    public function create(User $user)
    {
        return $user->role_id == Role::ORGANIZATION;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @return boolean
     */
    public function update(User $user, Event $event)
    {
        return $user->role_id == Role::ADMIN ||
            $event->organization->email === auth()->user()->email;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @return boolean
     */
    public function delete(User $user, Event $event)
    {
        return $user->role_id == Role::ADMIN ||
            $event->organization->email === auth()->user()->email;
    }
}
