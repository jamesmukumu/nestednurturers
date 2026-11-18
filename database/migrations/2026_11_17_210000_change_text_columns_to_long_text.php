?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->longText('description')->nullable(false)->change();
            $table->longText('overview')->nullable(false)->change();
        });

        Schema::table('services', function (Blueprint $table) {
            $table->longText('meta_overview')->nullable(false)->change();
            $table->longText('meta_description')->nullable(false)->change();
            $table->longText('image_path')->nullable(false)->change();
        });
    }

    public function down(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->text('description')->nullable(false)->change();
            $table->text('overview')->nullable(false)->change();
        });

        Schema::table('services', function (Blueprint $table) {
            $table->text('meta_overview')->nullable(false)->change();
            $table->text('meta_description')->nullable(false)->change();
            $table->text('image_path')->nullable(false)->change();
        });
    }
};
