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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("title")->nullable(false)->unique(true);
            $table->text("description")->nullable(false);
            $table->text("overview")->nullable(false);
            $table->tinyText("image_path")->nullable(false);
            $table->boolean("is_published")->nullable(false)->default(false);
            $table->string("slug")->nullable(true)->unique(true)->index(true);
            $table->foreignId("blog_categories_id")->nullable(false)->constrained("blog_categories")->onDelete("cascade");
            $table->mediumInteger("reading_time")->nullable(false);
            $table->foreignId("admins_id")->nullable(false)->constrained("admins")->onDelete("cascade");
            $table->integer("views")->nullable(false)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
