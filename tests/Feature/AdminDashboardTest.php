<?php

use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('public homepage remains available', function () {
    $this->get('/')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Home'));
});

test('dashboard routes require authentication', function () {
    $this->get('/dashboard')->assertRedirect(route('login'));
    $this->get('/dashboard/editor')->assertRedirect(route('login'));
    $this->get('/dashboard/settings')->assertRedirect(route('login'));
});

test('authenticated users can open dashboard pages', function () {
    $this->actingAs(User::factory()->create());

    $this->get('/dashboard')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Dashboard'));

    $this->get('/dashboard/editor')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Editor'));

    $this->get('/dashboard/settings')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Settings'));
});

test('unknown dashboard pages return an inertia 404 page', function () {
    $this->actingAs(User::factory()->create())
        ->get('/dashboard/unknown')
        ->assertNotFound()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/NotFound'));
});
