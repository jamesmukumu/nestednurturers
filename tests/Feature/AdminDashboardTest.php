<?php

use App\Models\Admin;
use Inertia\Testing\AssertableInertia as Assert;

test('public homepage remains available', function () {
    $this->get('/')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Home'));
});

test('dashboard routes require authentication', function () {
    $this->get('/dashboard')->assertRedirect(route('login'));
    $this->get('/dashboard/editor')->assertRedirect('/dashboard/blogs');
    $this->get('/dashboard/settings')->assertRedirect(route('login'));
});

test('authenticated users can open dashboard pages', function () {
    $this->actingAs(Admin::factory()->create(), 'admin');

    $this->get('/dashboard')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Dashboard'));

    $this->get('/dashboard/editor')->assertRedirect('/dashboard/blogs');

    $this->get('/dashboard/settings')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Settings'));
});

test('unknown dashboard pages return an inertia 404 page', function () {
    $this->actingAs(Admin::factory()->create(), 'admin')
        ->get('/dashboard/unknown')
        ->assertNotFound()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/NotFound'));
});
