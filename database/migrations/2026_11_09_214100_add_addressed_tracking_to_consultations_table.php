<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('consultations', function (Blueprint $table) {
            $table->timestamp('addressed_at')->nullable();
            $table->foreignId('addressed_by')->nullable()->constrained('admins')->nullOnDelete();
            $table->index(['addressed_at', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::table('consultations', function (Blueprint $table) {
            $table->dropIndex(['addressed_at', 'created_at']);
            $table->dropConstrainedForeignId('addressed_by');
            $table->dropColumn('addressed_at');
        });
    }
};
