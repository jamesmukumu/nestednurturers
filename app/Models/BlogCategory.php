<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    /** @use HasFactory<\Database\Factories\BlogCategoryFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'admins_id',
        'slug',
    ];

    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admins_id');
    }

    public function blogs(): HasMany
    {
        return $this->hasMany(Blog::class, 'blog_categories_id');
    }
}
