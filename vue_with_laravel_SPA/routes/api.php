<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('checkemail', 'AppController@checkEmail');
Route::get('get_sheet_1', 'AppController@get_sheet_1');
Route::get('get_sheet_2', 'AppController@get_sheet_2');
Route::get('get_sheet_3', 'AppController@get_sheet_3');
Route::get('get_sheet_4', 'AppController@get_sheet_4');
Route::get('get_sheet_5', 'AppController@get_sheet_5');
