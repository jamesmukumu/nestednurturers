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
        Schema::create('blog_categories', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("title")->unique(true)->nullable(false);
            $table->mediumText("description")->nullable(true);
            $table->foreignId("admins_id")->nullable(false)->constrained("admins")->onDelete("cascade");
            $table->string("slug")->nullable(true)->unique(true)->index(true);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_categories');
    }
};
