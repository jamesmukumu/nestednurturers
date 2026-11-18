<?php

use App\Models\Admin;
use Inertia\Testing\AssertableInertia as Assert;

test('only elevated admins can view the admin directory', function () {
    $this->get('/dashboard/admins')->assertRedirect('/login');

    $this->actingAs(Admin::factory()->create(['isAdmin' => false]), 'admin')
        ->get('/dashboard/admins')
        ->assertForbidden();

    $elevatedAdmin = Admin::factory()->create(['isAdmin' => true]);
    $listedAdmin = Admin::factory()->create(['isAdmin' => false]);

    $this->actingAs($elevatedAdmin, 'admin')
        ->get('/dashboard/admins')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Admin/Admins/Index')
            ->has('admins', 3)
            ->missing('admins.0.phonenumber')
            ->missing('admins.1.phonenumber')
            ->missing('admins.2.phonenumber'))
        ->assertSee($listedAdmin->email);
});
