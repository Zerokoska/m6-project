<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Person;

class Mission extends Model
{
    public function persons(){
        return $this->belongsToMany(Person::class);
    }
}
