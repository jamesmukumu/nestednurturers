<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->dropForeign(['blog_categories_id']);
        });
        Schema::table('blogs', function (Blueprint $table) {
            $table->foreign('blog_categories_id')->references('id')->on('blog_categories')->restrictOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->dropForeign(['blog_categories_id']);
        });
        Schema::table('blogs', function (Blueprint $table) {
            $table->foreign('blog_categories_id')->references('id')->on('blog_categories')->cascadeOnDelete();
        });
    }
};
