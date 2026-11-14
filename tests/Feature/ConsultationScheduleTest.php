<?php

use Cron\CronExpression;
use Illuminate\Console\Scheduling\Schedule;

test('consultation follow-up runs at eight in Nairobi from Monday to Saturday', function () {
    $events = collect(app(Schedule::class)->events())
        ->filter(fn ($event) => str_contains($event->command ?? '', 'app:consultations-follow-up'));

    expect($events)->toHaveCount(1);
    $event = $events->first();
    expect($event->expression)->toBe('0 8 * * 1,2,3,4,5,6')
        ->and($event->timezone)->toBe('Africa/Nairobi')
        ->and($event->withoutOverlapping)->toBeTrue()
        ->and($event->runInBackground)->toBeTrue();

    $cron = new CronExpression($event->expression);
    $nairobi = new DateTimeZone($event->timezone);
    foreach (range(9, 14) as $day) {
        $time = new DateTimeImmutable(sprintf('2026-11-%02d 08:00:00', $day), $nairobi);
        expect($cron->isDue($time, $event->timezone))->toBeTrue();
    }
    expect($cron->isDue(new DateTimeImmutable('2026-11-15 08:00:00', $nairobi), $event->timezone))->toBeFalse()
        ->and($cron->isDue(new DateTimeImmutable('2026-11-09 07:59:00', $nairobi), $event->timezone))->toBeFalse()
        ->and($cron->isDue(new DateTimeImmutable('2026-11-09 08:01:00', $nairobi), $event->timezone))->toBeFalse();
});
