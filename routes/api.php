<?php

use App\Http\Controllers\Api\PersonController;
use App\Http\Controllers\Api\StatusController;
use Illuminate\Support\Facades\Route;

Route::get('/people', [PersonController::class, 'index'])->name('people.get');
Route::get('/people/{personId}', [PersonController::class, 'show'])->name('people.show');
Route::get('/statuses', [StatusController::class, 'index'])->name('statuses.get');
