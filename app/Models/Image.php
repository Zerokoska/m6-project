<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function Person(){
        return $this->hasOne(Image::class);
    }
}
