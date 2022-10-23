<?php

namespace App\Domain\User\DAL\User;

use App\Domain\User\BLL\BaseDAL;
use App\Domain\User\Models\User;

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
