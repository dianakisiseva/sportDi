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

Route::prefix('organizations')
    ->middleware('auth')
    ->group(function () {
        Route::get('/', 'OrganizationController@index')->name('organizations.index');
        Route::post('/', 'OrganizationController@store')->name('organizations.store');

        Route::get('/get', 'OrganizationController@get')->name('organizations.get');

        Route::get('/create', 'OrganizationController@create')->name('organizations.create');
        Route::get('{organization}', 'OrganizationController@show')->name('organizations.show');
        Route::get('{organization}/edit', 'OrganizationController@edit')->name('organizations.edit');
        Route::put('{organization}', 'OrganizationController@update')->name('organizations.update');
        Route::delete('{organization}', 'OrganizationController@destroy')->name('organizations.destroy');
    });

Route::prefix('events')
    ->middleware('auth')
    ->group(function () {
        Route::get('/', 'EventController@index')->name('events.index');
        Route::post('/', 'EventController@store')->name('events.store');

        Route::get('/get', 'EventController@get')->name('events.get');
        Route::get('/get-upcoming-events', 'EventController@getUpcomingEvents')->name('events.getUpcoming');

        Route::get('/create', 'EventController@create')->name('events.create');
        Route::get('{event}', 'EventController@show')->name('events.show');
        Route::get('{event}/edit', 'EventController@edit')->name('events.edit');
        Route::put('{event}', 'EventController@update')->name('events.update');
        Route::delete('{event}', 'EventController@destroy')->name('events.destroy');
    });
