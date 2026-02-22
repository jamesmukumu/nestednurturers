<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class consultations extends Model
{
    /** @use HasFactory<\Database\Factories\ConsultationsFactory> */
    use HasFactory;
    protected $fillable = ["name","email","phonenumber","consultationDate","timezone","consultationID"];
}
