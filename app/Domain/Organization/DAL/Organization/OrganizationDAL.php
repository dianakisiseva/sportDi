<?php

namespace App\Domain\Organization\DAL\Organization;

use App\Domain\Organization\Models\Organization;
use App\Traits\BaseDAL;


class OrganizationDAL extends BaseDAL implements OrganizationDALInterface
{
    public function __construct(Organization $organization)
    {
        $this->model = $organization;
    }

}
