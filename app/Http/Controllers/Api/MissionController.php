<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mission;

class MissionController extends Controller
{
    public function index(){
        $missions = Mission::all();

        return $missions;
    }

    public function show($mission_id){
        $mission = Mission::find($mission_id);
        return $mission;
    }

    public function store(Request $request){
        dd($request->all());
        $edit = Mission::insert($request->all());
        return $edit;
    }
        
}
