<?php

use Inertia\Testing\AssertableInertia as Assert;

test('city files are valid and available to the contact form', function () {
    $this->artisan('cities:check')->assertSuccessful();

    $cities = json_decode(
        file_get_contents(config('cities.path').'/us_cities_states.json'),
        true,
        512,
        JSON_THROW_ON_ERROR,
    );

    $this->get('/')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('uscities.0', $cities[0]['city'].' ('.$cities[0]['state'].')'));
});

test('city check fails explicitly when files are missing', function () {
    config(['cities.path' => base_path('missing-city-data')]);

    $this->artisan('cities:check')
        ->expectsOutputToContain('City data file is missing')
        ->assertFailed();
});
