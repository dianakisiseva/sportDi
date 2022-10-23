<?php

namespace App\Domain\User\BLL\Activity;

use App\Domain\User\BLL\BaseBLL;
use App\Domain\User\DAL\Activity\ActivityDALInterface;

class ActivityBLL extends BaseBLL implements ActivityBLLInterface
{
    public function __construct(ActivityDALInterface $activityDAL)
    {
        $this->DAL = $activityDAL;
    }
}
