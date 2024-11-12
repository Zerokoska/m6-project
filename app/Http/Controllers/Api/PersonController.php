<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->input('status');

        $query = Person::with(['aliases', 'image', 'status']);

        if (!empty($status)) {
            $query->where('status_id', $status);
        }

        $result = $query->limit(200)->get();
        return $result;
    }

    public function show($personId)
    {
        $human = Person::with(['aliases', 'image', 'status'])->where('id', $personId)->get();
        return $human;
    }
}
