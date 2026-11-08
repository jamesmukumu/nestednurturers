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
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("name")->nullable(false)->unique(true);
            $table->string("email")->nullable(false)->unique(true);
            $table->string("password")->nullable(false);
            $table->string("phonenumber")->nullable(false)->unique(true);
            $table->boolean("isEmailVerified")->nullable(false)->default(false);
            $table->boolean("isAdmin")->nullable(false)->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
