<?php

use App\Http\Controllers\SitemapController;
use App\Http\Controllers\BlogCategoryController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PublicBlogController;
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

Route::get('/blogs', [PublicBlogController::class, 'index'])->name('public.blogs.index');
Route::get('/blog/{slug}', [PublicBlogController::class, 'show'])->name('public.blogs.show');
Route::redirect('/dashboard/editor', '/dashboard/blogs');

Route::middleware('auth:admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    Route::prefix('dashboard/blogs')->name('admin.blogs.')->controller(BlogController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/{blog}/edit', 'edit')->name('edit');
        Route::get('/{blog}', 'show')->name('show');
        Route::match(['put', 'patch'], '/{blog}', 'update')->name('update');
        Route::delete('/{blog}', 'destroy')->name('destroy');
    });
    Route::get('/blog-categories', [BlogCategoryController::class, 'index'])->name('blog-categories.index');
    Route::post('/blog-categories', [BlogCategoryController::class, 'store'])->name('blog-categories.store');

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
