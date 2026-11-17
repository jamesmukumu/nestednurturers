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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("title")->nullable(false)->unique(true);
            $table->string("slug")->nullable(false)->unique(true)->index();
            $table->foreignId("admins_id")->nullable(false)->constrained("admins")->cascadeOnDelete();
            $table->text("meta_overview")->nullable(false);
            $table->text("meta_description")->nullable(false);
            $table->text("image_path")->nullable(false);
            $table->boolean("published")->nullable(false)->default(false);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
