<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Services extends Model
{
    /** @use HasFactory<\Database\Factories\ServicesFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'admins_id',
        'meta_overview',
        'meta_description',
        'image_path',
        'published',
    ];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'published' => 'boolean',
        ];
    }

    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admins_id');
    }
}
