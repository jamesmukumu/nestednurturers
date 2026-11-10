<?php

namespace App\Models;

use Illuminate\Auth\MustVerifyEmail as MustVerifyEmailTrait;
use Illuminate\Contracts\Auth\MustVerifyEmail as MustVerifyEmailContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable implements MustVerifyEmailContract
{
    /** @use HasFactory<\Database\Factories\AdminFactory> */
    use HasFactory, MustVerifyEmailTrait, Notifiable;

    protected $table = 'admins';

    protected $fillable = [
        'name',
        'email',
        'password',
        'phonenumber',
        'isEmailVerified',
        'isAdmin',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
            'email_verified_at' => 'datetime',
            'isEmailVerified' => 'boolean',
            'isAdmin' => 'boolean',
        ];
    }

    public function hasVerifiedEmail(): bool
    {
        return $this->email_verified_at !== null || $this->isEmailVerified;
    }

    public function markEmailAsVerified(): bool
    {
        return $this->forceFill([
            'email_verified_at' => $this->freshTimestamp(),
            'isEmailVerified' => true,
        ])->save();
    }

    public function blogs(): HasMany
    {
        return $this->hasMany(Blog::class, 'admins_id');
    }

    public function blogCategories(): HasMany
    {
        return $this->hasMany(BlogCategory::class, 'admins_id');
    }
}
