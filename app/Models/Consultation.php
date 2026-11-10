<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Consultation extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phonenumber',
        'consultationDate',
        'timezone',
        'consultationID',
        'location',
        'howHeard',
        'expected_due_time',
        'preferred_douala_services_start',
        'services_seeked',
        'duration_of_support',
        'no_nights_per_week',
        'is_acknowledged',
        'addressed_at',
        'addressed_by',
    ];

    protected function casts(): array
    {
        return [
            'addressed_at' => 'datetime',
            'is_acknowledged' => 'boolean',
        ];
    }

    public function addressedBy(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'addressed_by');
    }

    public function scopePending(Builder $query): Builder
    {
        return $query->whereNull('addressed_at');
    }

    public function scopeAddressed(Builder $query): Builder
    {
        return $query->whereNotNull('addressed_at');
    }

    public function scopeSearch(Builder $query, ?string $term): Builder
    {
        $term = trim((string) $term);

        if ($term === '') {
            return $query;
        }

        return $query->where(function (Builder $search) use ($term) {
            foreach ([
                'name',
                'email',
                'phonenumber',
                'consultationID',
                'location',
                'services_seeked',
                'duration_of_support',
                'no_nights_per_week',
                'howHeard',
            ] as $column) {
                $search->orWhere($column, 'like', '%'.$term.'%');
            }
        });
    }

    protected function isAddressed(): Attribute
    {
        return Attribute::get(fn (): bool => $this->addressed_at !== null);
    }
}
