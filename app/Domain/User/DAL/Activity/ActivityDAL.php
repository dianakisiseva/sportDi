<?php

namespace App\Domain\User\DAL\Activity;

use App\Domain\User\Models\Activity;
use App\Traits\BaseDAL;


class ActivityDAL extends BaseDAL implements ActivityDALInterface
{
    public function __construct(Activity $activity)
    {
        $this->model = $activity;
    }
}
