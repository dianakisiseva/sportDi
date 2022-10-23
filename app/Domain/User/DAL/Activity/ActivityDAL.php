<?php

namespace App\Domain\User\DAL\Activity;

use App\Domain\User\BLL\BaseDAL;
use App\Domain\User\Models\Activity;


class ActivityDAL extends BaseDAL implements ActivityDALInterface
{
    public function __construct(Activity $activity)
    {
        $this->model = $activity;
    }
}
