<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
    public function index(){
        $people = Person::all();
        return $people;
    }

    public function show($person_id){
        $person = Person::find($person_id);
    }

}
