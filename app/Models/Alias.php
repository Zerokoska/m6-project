<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alias extends Model
{
    public function Person()
    {
        $this->belongsTo(Alias::class);
    }
}
