<?php

use App\Http\Controllers\API\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::get('/customers',[CustomerController::class,'list']);
Route::post('/add-customer',[CustomerController::class,'store']);
Route::get('/edit-customer/{id}',[CustomerController::class,'edit']);
Route::put('/update-customer/{id}',[CustomerController::class,'update']);
Route::delete('/delete-customer/{id}',[CustomerController::class,'delete']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
