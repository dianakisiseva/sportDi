<?php

namespace App\Domain\User\BLL\Activity;

use App\Domain\User\DAL\Activity\ActivityDALInterface;
use App\Domain\User\Models\Activity;
use App\Traits\BaseBLL;
use Illuminate\Support\Facades\Auth;

class ActivityBLL extends BaseBLL implements ActivityBLLInterface
{
    public function __construct(ActivityDALInterface $activityDAL)
    {
        $this->DAL = $activityDAL;
    }

    public function getAllActivities($tab)
    {
        $query = $this->DAL->query()->with(['user'])->select([
            'id', 'category_id', 'name', 'place', 'date', 'distance', 'user_id'
        ]);

        switch ($tab) {
            case 'hike':
                return $query->where('category_id', Activity::HIKE);
            case 'bike':
                return $query->where('category_id', Activity::BIKE);
            case 'run':
                return $query->where('category_id', Activity::RUN);
            default:
                return $query;
        }
    }

    public function getMyActivities($tab)
    {
        $query = $this->DAL->query()->select([
            'id', 'category_id', 'name', 'place', 'date', 'distance'
        ])->where('user_id', Auth::user()->id);

        switch ($tab) {
            case 'hike':
                return $query->where('category_id', Activity::HIKE);
            case 'bike':
                return $query->where('category_id', Activity::BIKE);
            case 'run':
                return $query->where('category_id', Activity::RUN);
            default:
                return $query;
        }
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
