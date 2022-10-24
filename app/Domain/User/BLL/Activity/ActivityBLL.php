<?php

namespace App\Domain\User\BLL\Activity;

use App\Domain\User\BLL\BaseBLL;
use App\Domain\User\DAL\Activity\ActivityDALInterface;
use App\Domain\User\Models\Activity;
use Illuminate\Support\Facades\Auth;

class ActivityBLL extends BaseBLL implements ActivityBLLInterface
{
    public function __construct(ActivityDALInterface $activityDAL)
    {
        $this->DAL = $activityDAL;
    }

    public function getAllActivities()
    {
        return $this->DAL->query()->with(['user'])->select([
            'id', 'category_id', 'name', 'place', 'date', 'distance', 'user_id'
        ]);
    }

    public function getMyActivities()
    {
        return $this->DAL->query()->select([
            'id', 'category_id', 'name', 'place', 'date', 'distance'
        ])->where('user_id', Auth::user()->id);
    }

    public function getCategoriesOptions()
    {
        return array_values(array_map(function ($value) {
            return [
                'label' => $value,
                'value' => array_search($value, Activity::CATEGORIES)
            ];
        }, Activity::CATEGORIES));
    }
}
