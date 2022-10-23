<?php

namespace App\Domain\User\Controllers\Auth;


use App\Domain\User\BLL\User\UserBLLInterface;
use App\Domain\User\Exceptions\UserNotFoundException;
use App\Domain\User\Exceptions\WrongPasswordException;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;


/**
 * @property UserBLLInterface $userBLL
 */
class LoginController extends Controller
{
    use AuthenticatesUsers;

    public function __construct(
        UserBLLInterface $userBLL
    ) {
        $this->userBLL = $userBLL;
    }
    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function login()
    {
        return inertia('User/Auth/Login');
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

    public function store(Request $request)
    {
        try {
            $credentials = $request->only(['login', 'password']);
            $user = $this->userBLL->getUserByLogin($request->login);

            if (!$user) {
                throw new UserNotFoundException();
            }

            if (!Hash::check($credentials['password'], $user->password)) {
                throw new WrongPasswordException();
            }

            if ($this->attemptLogin($request)) {
                $this->sendLoginResponse($request);
            }
        } catch (\Exception $e) {
            return redirect()->route('login')
                ->withErrors(
                    $e->getMessage(),
                );
        }

        $this->clearLoginAttempts($request);
        return redirect()->route('dashboard');
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
}
