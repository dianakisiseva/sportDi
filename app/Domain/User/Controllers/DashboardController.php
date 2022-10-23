<?php

namespace App\Domain\User\Controllers;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        return inertia('Dashboard');
    }
}
