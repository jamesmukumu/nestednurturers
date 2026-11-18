<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AdminPasswordResetRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'admin_id',
        'reference',
        'expires_at',
        'consumed_at',
        'superseded_at',
    ];

    protected function casts(): array
    {
        return [
            'expires_at' => 'datetime',
            'consumed_at' => 'datetime',
            'superseded_at' => 'datetime',
        ];
    }

    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class);
    }

    public function scopeActive(Builder $query): void
    {
        $query->whereNull('consumed_at')
            ->whereNull('superseded_at')
            ->where('expires_at', '>', now());
    }
}
