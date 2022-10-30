<?php

namespace App\Domain\Organization\Models;

use App\Traits\CarbonDefaultDateFormat;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    use CarbonDefaultDateFormat;

    protected $guarded = [];

    protected $dates = [
        'date',
    ];

    protected $appends = ['organization_name', 'formatted_date'];

    public function getOrganizationNameAttribute()
    {
        return $this->organization->name;
    }

    public function getFormattedDateAttribute()
    {
        return Carbon::parse($this->date)->format('m/d/Y');
    }

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }
}
