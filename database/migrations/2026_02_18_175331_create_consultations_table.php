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
            $table->string("consultationID")->nullable(false)->unique(true)->index();
            $table->string('location')->nullable(false);
            $table->dateTime('expected_due_time')->nullable(false);
            $table->dateTime('preferred_douala_services_start')->nullable(false);
            $table->tinyText('services_seeked')->nullable(true);
            $table->string('duration_of_support')->nullable(false);
            $table->string('no_nights_per_week')->nullable(false);
            $table->string('howHeard')->nullable(true);
            $table->boolean('is_acknowledged')->nullable(false)->default(true);

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
