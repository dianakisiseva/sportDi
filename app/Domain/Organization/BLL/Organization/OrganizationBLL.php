<?php

namespace App\Domain\Organization\BLL\Organization;

use App\Domain\Organization\DAL\Organization\OrganizationDALInterface;
use App\Traits\BaseBLL;


class OrganizationBLL extends BaseBLL implements OrganizationBLLInterface
{

    public function __construct(OrganizationDALInterface $organizationDAL)
    {
        $this->DAL = $organizationDAL;
    }

    public function getDatatable()
    {
        return $this->DAL->query()->select([
            'id', 'first_name', 'last_name', 'login', 'email'
        ]);
    }

}
