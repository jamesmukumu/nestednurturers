<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Cache;

class Blog extends Model
{
    use HasFactory;

    protected static function booted(): void
    {
        static::saved(function (): void {
            Cache::forget('sitemap:version');
        });
        static::deleted(function (): void {
            Cache::forget('sitemap:version');
        });
    }

    protected $table = 'blogs';

    protected $fillable = [
        'title',
        'description',
        'overview',
        'image_path',
        'is_published',
        'slug',
        'blog_categories_id',
        'reading_time',
        'admins_id',
        'views',
    ];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
            'views' => 'integer',
            'reading_time' => 'integer',
        ];
    }

    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admins_id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(BlogCategory::class, 'blog_categories_id');
    }
}
