<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', 'Auth\LoginController@login')->name('login');
Route::post('/login', 'Auth\LoginController@store');

Route::get('/register-user', 'Auth\RegisterController@registerUserForm')
    ->name('register.user');

Route::post('/register-user', 'Auth\RegisterController@registerUser')
    ->name('register.user.store');

Route::get('/register-organization', 'Auth\RegisterController@registerOrganizationForm')
    ->name('register.organization');

Route::post('/register-organization', 'Auth\RegisterController@registerOrganization')
    ->name('register.organization.store');

Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/', 'DashboardController@index')->middleware(['auth'])->name('dashboard');

Route::prefix('users')
    ->middleware('auth')
    ->group(function () {
        Route::get('/', 'UserController@index')->name('users.index');
        Route::post('/', 'UserController@store')->name('users.store');
        Route::get('/get', 'UserController@get')->name('users.get');
        Route::get('/create', 'UserController@create')->name('users.create');
        Route::get('{user}', 'UserController@show')->name('users.show');
        Route::get('{user}/edit', 'UserController@edit')->name('users.edit');
        Route::put('{user}', 'UserController@update')->name('users.update');
        Route::delete('{user}', 'UserController@destroy')->name('users.destroy');
        Route::put('{user}/update-password', 'UserController@updatePassword')->name('users.updatePassword');
    });

Route::prefix('activities')
    ->middleware('auth')
    ->group(function () {
        Route::get('/', 'ActivityController@index')->name('activities.index');
        Route::post('/', 'ActivityController@store')->name('activities.store');

        Route::get('/get-all/{tab?}', 'ActivityController@getAllActivities')->name('activities.getAllActivities');
        Route::get('/get-my/{tab?}', 'ActivityController@getMyActivities')->name('activities.getMyActivities');

        Route::get('/create', 'ActivityController@create')->name('activities.create');
        Route::get('{activity}', 'ActivityController@show')->name('activities.show');
        Route::get('{activity}/edit', 'ActivityController@edit')->name('activities.edit');
        Route::put('{activity}', 'ActivityController@update')->name('activities.update');
        Route::delete('{activity}', 'ActivityController@destroy')->name('activities.destroy');
    });
