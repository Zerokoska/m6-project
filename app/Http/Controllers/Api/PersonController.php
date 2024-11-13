<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
    public function index(Request $request){
        $status = $request->input("status");

        $query = Person::with(["aliases", "image", "status"]);

        if (!empty($status)) {
            $query->where('status_id', $status);
        }

        $people = $query->get();
        return $people;
    }

    public function show($person_id){
        $person = Person::with(["aliases", "image", "status"])->findOrFail($person_id);
        
        return $person;
    }

}
