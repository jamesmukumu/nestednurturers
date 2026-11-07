<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/sitemap", [SitemapController::class, 'SiteMapGenerator']);
Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/contact', function () {
    return Inertia::render('Contacts');
});
Route::get("/faq", function () {
    return Inertia::render("Faq");
});
Route::get('/pricing', function () {
    return Inertia::render('Pricing');
});
Route::get('/services', function () {

    return Inertia::render('Services');
});
Route::get('/about', function () {
    return Inertia::render('About');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    Route::get('/dashboard/editor', function () {
        return Inertia::render('Admin/Editor');
    })->name('dashboard.editor');

    Route::get('/dashboard/settings', function () {
        return Inertia::render('Admin/Settings');
    })->name('dashboard.settings');

    Route::get('/dashboard/{path?}', function () {
        return Inertia::render('Admin/NotFound')
            ->toResponse(request())
            ->setStatusCode(404);
    })->where('path', '.*')->name('dashboard.not-found');
});

require __DIR__ . '/auth.php';
