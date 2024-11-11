<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Person;

class Alias extends Model
{
    public function person()
    {
        return $this->belongsTo(Person::class);
    }
}
