<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        $result = Person::with(['aliases', 'image', 'status'])->limit(18)->get();
        return $result;
    }

    public function show($personId)
    {
        $human = Person::with(['aliases', 'image', 'status'])->where('id', $personId)->get();
        return $human;
    }
}
