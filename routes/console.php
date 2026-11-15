<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Schedule::command('app:consultations-follow-up')
    ->dailyAt('08:00')
    ->days([1, 2, 3, 4, 5, 6])
    ->timezone('Africa/Nairobi')
    ->withoutOverlapping()
    ->runInBackground();
