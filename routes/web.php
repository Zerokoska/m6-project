<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
// return view('index');
// });

Route::view('/{path?}', 'index')->where('path', '.*'); 


