<?php

use App\Http\Controllers\Api\PersonController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\StatusController;
use App\Http\Controllers\Api\MissionController;
use Illuminate\Http\Request;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/people",[PersonController::class,"index"])->name("people");
Route::get("/people/{person_id}",[PersonController::class,"show"])->name("person");
Route::get("/statuses",[StatusController::class,"index"])->name("status");
Route::get("/missions",[MissionController::class,"index"])->name("missions");
Route::get("/missions/{mission_id}",[MissionController::class,"show"])->name("mission");
Route::post("/missions/store/{mission_id}",[MissionController::class,"store"])->name("mission.store");