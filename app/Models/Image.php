<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Person;

class Image extends Model
{
    public function person(){
        return $this->hasOne(Person::class);
    }
}
