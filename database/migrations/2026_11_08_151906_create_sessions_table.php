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
        Schema::create('sessions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("session_id")->nullable(false)->unique(true);
            $table->dateTime("expires_at")->nullable(false);
            $table->foreignId("admins_id")->nullable(false)->constrained("admins")->onDelete("cascade");
            $table->mediumText('session_token')->nullable(false);
            $table->string("ip_address")->nullable(false);
            $table->mediumText("session_refresh_token")->nullable(false);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sessions');
    }
};
