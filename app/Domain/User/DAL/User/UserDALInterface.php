<?php

namespace App\Domain\User\DAL\User;

interface UserDALInterface
{
    public function getUserByLogin($login);
}
