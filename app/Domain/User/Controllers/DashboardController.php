<?php

namespace App\Domain\User\Controllers;

use App\Domain\Organization\BLL\Organization\OrganizationBLLInterface;
use App\Http\Controllers\Controller;

/**
 * @property OrganizationBLLInterface $organizationBLL
 */
class DashboardController extends Controller
{

    public function __construct(
        OrganizationBLLInterface $organizationBLL
    ){
        $this->organizationBLL = $organizationBLL;
    }

    public function index()
    {
        return inertia('Dashboard', [
            'links' => [
                'create_organization' => route('organizations.create')
            ],
            'organizations' => $this->organizationBLL->get()
        ]);
    }
}
