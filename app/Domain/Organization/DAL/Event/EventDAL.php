<?php

namespace App\Domain\Organization\DAL\Event;

use App\Domain\Organization\Models\Event;
use App\Traits\BaseDAL;


class EventDAL extends BaseDAL implements EventDALInterface
{
    public function __construct(Event $event)
    {
        $this->model = $event;
    }
}
