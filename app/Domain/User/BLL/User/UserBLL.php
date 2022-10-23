<?php

namespace App\Domain\User\BLL\User;

use App\Domain\User\BLL\BaseBLL;
use App\Domain\User\DAL\User\UserDALInterface;

/**
 * @property UserDALInterface DAL
 */
class UserBLL extends BaseBLL implements UserBLLInterface
{

    public function __construct(UserDALInterface $userDAL)
    {
        $this->DAL = $userDAL;
    }

    public function getDatatable()
    {
        return $this->DAL->query()->select([
            'id', 'first_name', 'last_name', 'login', 'email'
        ]);
    }

    public function getUserByLogin($login)
    {
        return $this->DAL->getUserByLogin($login);
    }
}
