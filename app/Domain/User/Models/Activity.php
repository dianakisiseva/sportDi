<?php

namespace App\Domain\User\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $guarded = [];

    public const HIKE = 1;
    public const BIKE = 2;
    public const RUN = 3;

    public const CATEGORIES = [
        self::HIKE => 'Hike',
        self::BIKE => 'Bike',
        self::RUN => 'Run',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

//    public function organization()
//    {
//        return $this->belongsTo(User::class, 'user_id');
//    }
}
