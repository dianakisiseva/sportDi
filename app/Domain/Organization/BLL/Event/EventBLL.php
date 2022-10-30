<?php

namespace App\Domain\Organization\BLL\Event;

use App\Domain\Organization\DAL\Event\EventDALInterface;
use App\Domain\User\Models\Activity;
use App\Traits\BaseBLL;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class EventBLL extends BaseBLL implements EventBLLInterface
{
    public function __construct(EventDALInterface $eventDAL)
    {
        $this->DAL = $eventDAL;
    }

    public function getAllEvents()
    {
        return $this->DAL->query()->with(['organization'])->select([
            'id', 'category_id', 'name', 'place', 'date', 'organization_id',
            'contact', 'guide', 'description'
        ]);
    }

    public function getUpcomingEvents()
    {
        return $this->DAL->query()->with(['organization'])
            ->where('date', '>', Carbon::now())
            ->select([
            'id', 'category_id', 'name', 'place', 'date', 'organization_id',
            'contact', 'guide', 'description'
        ]);
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
