<?php

namespace App\Domain\Organization\Models;

use App\Domain\User\Models\User;
use App\Traits\CarbonDefaultDateFormat;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;
    use CarbonDefaultDateFormat;

    protected $guarded = [];

    public const HIKE = 1;
    public const BIKE = 2;
    public const RUN = 3;

    public const CATEGORIES = [
        self::HIKE => 'Hike',
        self::BIKE => 'Bike',
        self::RUN => 'Run',
    ];

    protected $dates = [
        'date',
    ];

    protected $appends = ['logo_url'];

    public function getLogoUrlAttribute()
    {
        if (empty($this->logo)) {
            return asset('assets/media/various/profile-placeholder.svg');
        }

        return asset('uploads/logos/' . $this->logo);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

//    public function organization()
//    {
//        return $this->belongsTo(User::class, 'user_id');
//    }
}
