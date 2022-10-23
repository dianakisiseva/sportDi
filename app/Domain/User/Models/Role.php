<?php

namespace App\Domain\User\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    public const ADMIN = 1;
    public const SPORTSMAN = 2;
    public const ORGANIZATION = 3;

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
