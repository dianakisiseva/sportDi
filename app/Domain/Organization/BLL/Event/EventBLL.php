<?php

namespace App\Domain\Organization\BLL\Event;

use App\Domain\Organization\DAL\Event\EventDALInterface;
use App\Domain\User\Models\Activity;
use App\Traits\BaseBLL;
use Illuminate\Support\Facades\Auth;

class EventBLL extends BaseBLL implements EventBLLInterface
{
    public function __construct(EventDALInterface $eventDAL)
    {
        $this->DAL = $eventDAL;
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
