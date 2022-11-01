<?php

namespace App\Domain\Organization\BLL\Organization;

use App\Domain\Organization\BLL\Event\EventBLLInterface;
use App\Domain\Organization\DAL\Organization\OrganizationDALInterface;
use App\Domain\User\BLL\User\UserBLLInterface;
use App\Domain\User\Models\Role;
use App\Traits\BaseBLL;
use Illuminate\Support\Facades\Hash;


/**
 * @property UserBLLInterface $userBLL
 * @property EventBLLInterface $eventBLL
 */
class OrganizationBLL extends BaseBLL implements OrganizationBLLInterface
{

    public function __construct(
        OrganizationDALInterface $organizationDAL,
        UserBLLInterface $userBLL,
        EventBLLInterface $eventBLL
    ){
        $this->DAL = $organizationDAL;
        $this->userBLL = $userBLL;
        $this->eventBLL = $eventBLL;
    }

    public function getDatatable()
    {
        return $this->DAL->query()->select([
            'id', 'name', 'city', 'login', 'email', 'facebook'
        ]);
    }

    public function getDashboardOrganizations()
    {
        $organizations = $this->DAL->get();

        if($organizations->count() > 3){
            return $this->DAL->get()->random(3);
        }
        return $organizations;
    }

    public function getOrganizationByLogin($login)
    {
        return $this->DAL->getOrganizationByLogin($login);

    }

    public function createOrganization($request)
    {
        $logo = $request->file('logo');

        $data = [
            'name' => $request->name,
            'login' => $request->login,
            'email' => $request->email,
            'city' => $request->city,
            'facebook' => $request->facebook,
            'description' => $request->description,
            'password' => Hash::make($request->password),
            'logo' => $logo ? basename($logo->store('public/uploads/logos')) : null
        ];

        $this->DAL->create($data);

        $data = [
            'first_name' => 'Organization',
            'last_name' => 'Organization',
            'login' => $data['login'],
            'email' => $data['email'],
            'password' => $data['password'],
            'role_id' => Role::ORGANIZATION,
            'is_organization' => true
        ];

        $this->userBLL->create($data);

    }

    public function updateOrganization($organization, $data)
    {
        $userOrganization = $this->userBLL->getUserByLogin($organization->login);

        $this->DAL->update($organization, $data);

        $this->userBLL->update($userOrganization, [
            'login' => $data['login'],
            'email' => $data['email']
        ]);
    }

    public function deleteOrganization($organization)
    {
        $userOrganization = $this->userBLL->getUserByLogin($organization->login);
        $events = $organization->events;

        $this->userBLL->delete($userOrganization);
        $this->DAL->delete($organization);

        if($events){
            foreach ($events as $event){
                $this->eventBLL->delete($event);
            }
        }

    }

}
