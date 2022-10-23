<?php

namespace App\Domain\User\Exceptions;

use Exception;

class UserNotFoundException extends Exception
{
    public function __construct($key = 'User not found')
    {
        parent::__construct($key);
    }
}
