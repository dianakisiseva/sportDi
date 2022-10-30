<?php

namespace App\Domain\Organization\Controllers;

use App\Domain\Bill\Policies\BillPolicy;
use App\Domain\Organization\BLL\Organization\OrganizationBLLInterface;
use App\Domain\Organization\Policies\OrganizationPolicy;
use App\Domain\Organization\Requests\UpdateOrganizationRequest;
use App\Http\Controllers\Controller;
use App\Domain\organization\Models\organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Yajra\DataTables\Facades\DataTables;


/**
 * @property OrganizationBLLInterface $organizationBLL
 */
class OrganizationController extends Controller
{
    public function __construct(
        OrganizationBLLInterface $organizationBLL
    ){
        $this->organizationBLL = $organizationBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return inertia('Organization/Index', [
            'links' => [
                    'show' => route('organizations.show', ['organization' => '%organization%']),
                    'edit' => route('organizations.edit', ['organization' => '%organization%']),
                    'create' => route('organizations.create'),
                    'store' => route('organizations.store'),
                    'get' => route('organizations.get'),
                    'delete' => route('organizations.destroy', ['organization' => '%organization%'])
                ]

        ]);
    }

    public function get()
    {
        $organizations = $this->organizationBLL->getDatatable();

        return DataTables::eloquent($organizations)->make(true);
    }

    public function show(organization $organization)
    {
        return inertia('Organization/View', [
            'organization' => $organization,
            'links' => [
                'edit' => route('organizations.edit', $organization),
                'delete' => route('organizations.destroy', $organization),
                'index' => route('organizations.index')
            ]
        ]);
    }

    public function create()
    {
        $this->authorize(OrganizationPolicy::CREATE, Organization::class);

        return inertia('Organization/Create', [
            'links' => [
                'store' => route('organizations.store')
            ]
        ]);
    }

    public function store(Request $request)
    {
        $this->authorize(OrganizationPolicy::CREATE, Organization::class);

        $this->organizationBLL->createOrganization($request);

        return redirect()->route('organizations.index')
            ->with('success', 'Organization successfully created!');
    }

    public function edit(organization $organization)
    {
        $this->authorize(OrganizationPolicy::UPDATE, $organization);

        return inertia('Organization/Edit', [
            'organization' => $organization,
            'links' => [
                'update' => route('organizations.update', $organization),
                'delete' => route('organizations.destroy', $organization),
                'index' => route('organizations.index')
            ]
        ]);
    }

    public function update(UpdateOrganizationRequest $request,Organization $organization)
    {
        $this->authorize(OrganizationPolicy::UPDATE, $organization);

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

        $this->organizationBLL->updateOrganization($organization, $data);

        return redirect(route("organizations.show", ['organization' => $organization]))
            ->with('success', 'Organization successfully updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Organization $organization
     */
    public function destroy(Organization $organization)
    {
        $this->authorize(OrganizationPolicy::DELETE, $organization);

        try {
            $this->organizationBLL->deleteOrganization($organization);
        } catch (\Throwable $tr) {
            throw $tr;
        }

        return response()->json([
            'message' => 'Organization successfully deleted!'
        ]);
    }
}
