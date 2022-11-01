<?php

namespace App\Domain\User\Controllers\Auth;

use App\Domain\Organization\BLL\Organization\OrganizationBLLInterface;
use App\Domain\User\BLL\User\UserBLLInterface;
use App\Domain\User\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


/**
 * @property UserBLLInterface $userBLL
 * @property OrganizationBLLInterface $organizationBLL
 */
class RegisterController extends Controller
{
    use AuthenticatesUsers;

    public function __construct(
        UserBLLInterface $userBLL,
        OrganizationBLLInterface $organizationBLL
    ) {
        $this->userBLL = $userBLL;
        $this->organizationBLL = $organizationBLL;
    }
    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function registerUserForm()
    {
        return inertia('User/Auth/RegisterUser',[
            'links' => [
                'registerUser' => route('register.user.store'),
            ]
        ]);
    }

    public function registerOrganizationForm()
    {
        return inertia('User/Auth/RegisterOrganization',[
            'links' => [
                'registerOrganization' => route('register.organization.store')
            ]
        ]);
    }


    public function registerUser(Request $request)
    {
        try {
            $request->validate([
                'first_name' => 'required|max:255',
                'last_name' => 'required|max:255',
                'login' => 'required|max:255|unique:users,login',
                'email' => 'required|email|max:255|unique:users,email',
                'password' => 'required|string|min:8',
                'password_confirmation' => 'required|same:password'
            ]);

            $data = [
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'login' => $request->login,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role_id' => Role::SPORTSMAN,
            ];

            $this->userBLL->create($data);

            if ($this->attemptLogin($request)) {
                $this->sendLoginResponse($request);
            }

        } catch (\Exception $e) {
            return redirect()->route('register.user')
                ->withErrors(
                    $e->validator->messages(),
                );
        }

        $this->clearLoginAttempts($request);
        return redirect()->route('dashboard')
            ->with('success', 'Welcome to your SportDi account!');
    }


    public function registerOrganization(Request $request)
    {
        try {
            $this->organizationBLL->createOrganization($request);

            if ($this->attemptLogin($request)) {
                $this->sendLoginResponse($request);
            }

        } catch (\Exception $e) {
            return redirect()->route('login')
                ->withErrors(
                    $e->messages(),
                );
        }

        $this->clearLoginAttempts($request);
        return redirect()->route('dashboard')
            ->with('success', 'Welcome to your SportDi account!');



    }
    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    protected function validateLogin(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
    }

    public function username()
    {
        return 'login';
    }

}
