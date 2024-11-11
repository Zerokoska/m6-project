<?php

use App\Http\Controllers\Api\PersonController;
use Illuminate\Support\Facades\Route;

Route::get('/people', [PersonController::class, 'index'])->name('people.list');
Route::get('/people/{personId}', [PersonController::class, 'show'])->name('people.show');
