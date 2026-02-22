<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('consultations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("name")->nullable(false);
            $table->string("email")->nullable(false);
            $table->string("phonenumber")->nullable(false);
            $table->string("consultationDate")->nullable(false);
            $table->string("timezone")->nullable(true);
            $table->string("consultationID")->nullable(false);
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consultations');
    }
};
