<?php

use Illuminate\Support\Facades\Http;
use Inertia\Ssr\Gateway;

test('admin pages are not dispatched to the inertia ssr server', function () {
    Http::fake();

    $response = app(Gateway::class)->dispatch([
        'component' => 'Admin/Dashboard',
    ]);

    expect($response)->toBeNull();
    Http::assertNothingSent();
});

test('public website pages are dispatched to the inertia ssr server', function () {
    config([
        'inertia.ssr.enabled' => true,
        'inertia.ssr.ensure_bundle_exists' => false,
        'inertia.ssr.url' => 'http://ssr.test',
    ]);

    Http::fake([
        'http://ssr.test/render' => Http::response([
            'head' => ['<title>Nested Nurturers</title>'],
            'body' => '<main>Welcome</main>',
        ]),
    ]);

    $response = app(Gateway::class)->dispatch([
        'component' => 'Home',
    ]);

    expect($response?->body)->toBe('<main>Welcome</main>');
    Http::assertSent(fn ($request) => $request->url() === 'http://ssr.test/render');
});
