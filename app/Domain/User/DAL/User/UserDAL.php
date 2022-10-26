<?php

namespace App\Domain\User\DAL\User;

use App\Domain\User\Models\User;
use App\Traits\BaseDAL;

/**
 * @property User model
 */
class UserDAL extends BaseDAL implements UserDALInterface
{
    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function getUserByLogin($login)
    {
        return $this->model->where('login', $login)->first();
    }
}
