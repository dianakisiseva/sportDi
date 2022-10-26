<?php

namespace App\Domain\Organization\Controllers;

use App\Domain\Organization\BLL\Organization\OrganizationBLLInterface;
use App\Http\Controllers\Controller;
use App\Domain\organization\Models\organization;
use Illuminate\Http\Request;
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
//        $this->authorize('index', [organization::class]);

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
//        $this->authorize('index', [organization::class]);

        $organizations = $this->organizationBLL->getDatatable();

        return DataTables::eloquent($organizations)->make(true);
    }

    public function show(organization $organization)
    {
//        $this->authorize('view', [organization::class]);

        return inertia('Organization/View', [
            'organization' => $organization,
            'links' => [
                'edit' => route('organizations.edit', $organization),
                'index' => route('organizations.index')
            ]
        ]);
    }

    public function create()
    {
//        $this->authorize('create', [Organization::class]);

        return inertia('Organization/Create', [
            'links' => [
                'store' => route('organizations.store')
            ]
        ]);
    }


    public function store(Request $request)
    {
//        $this->authorize('create', [organization::class]);

        $logo = $request->logo;
        $test =  basename($logo->store('public/uploads/logos'));
        $data = [
            'name' => $request->name,
            'login' => $request->login,
            'email' => $request->email,
            'city' => $request->city,
            'facebook' => $request->facebook,
            'description' => $request->decription,
            'password' => Hash::make($request->password),
//            'logo' =>  basename($logo->store('public/uploads/logos'))
        ];

        $this->organizationBLL->create($data);

        return redirect()->route('organizations.index')
            ->with('success', 'Organization successfully created!');
    }

    public function edit(organization $organization)
    {
//        $this->authorize('update',  $organization);

        return inertia('Organization/Edit', [
            'organization' => $organization,
            'links' => [
                'update' => route('organizations.update', $organization),
                'delete' => route('organizations.destroy', $organization)
            ]
        ]);
    }

    public function update(Request $request,Organization $organization)
    {
//        $this->authorize('update',  $organization);

        $this->organizationBLL->update($organization, $request->all());

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
//        $this->authorize('delete',  $organization);

        try {
            $this->organizationBLL->delete($organization);
        } catch (\Throwable $tr) {
            throw $tr;
        }

        return response()->json([
            'message' => 'Organization successfully deleted!'
        ]);
    }
}
