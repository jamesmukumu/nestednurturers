<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class consultations extends Model
{
    /** @use HasFactory<\Database\Factories\ConsultationsFactory> */
    use HasFactory;    protected $fillable = ["name","email","phonenumber","consultationDate","timezone","consultationID",'location','howHeard','expected_due_time','preferred_douala_services_start','services_seeked','duration_of_support','no_nights_per_week','is_acknowledged'];


}
