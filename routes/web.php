<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\AdminDirectoryController;
use App\Http\Controllers\AdminProfileController;
use App\Http\Controllers\Auth\AdminEmailVerificationController;
use App\Http\Controllers\Auth\AdminEmailVerificationNotificationController;
use App\Http\Controllers\Auth\AdminEmailVerificationPromptController;
use App\Http\Controllers\BlogCategoryController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\EnquiryStatusController;
use App\Http\Controllers\PublicBlogController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health', fn () => response()->json(['status' => 'ok']))->name('health');
Route::get('/sitemap', [SitemapController::class, 'index']);
Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap.index');
Route::get('/sitemap-{page}.xml', [SitemapController::class, 'page'])
    ->whereNumber('page')->name('sitemap.page');
Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/contact', function () {
    return Inertia::render('Contacts');
});
Route::get('/faq', function () {
    return Inertia::render('Faq');
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

Route::prefix('admin/email')->name('admin.verification.')->group(function () {
    Route::get('/verify', AdminEmailVerificationPromptController::class)
        ->name('notice');
    Route::get('/verify/{id}/{hash}', AdminEmailVerificationController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verify');
    Route::post('/verification-notification', AdminEmailVerificationNotificationController::class)
        ->middleware('throttle:3,1')
        ->name('send');
});

Route::middleware(['auth:admin', 'admin.verified'])->group(function () {
    Route::get('/dashboard', AdminDashboardController::class)->name('dashboard');

    Route::get('/dashboard/profile', [AdminProfileController::class, 'show'])
        ->name('dashboard.profile');
    Route::get('/dashboard/profile/data', [AdminProfileController::class, 'data'])
        ->name('dashboard.profile.data');
    Route::patch('/dashboard/profile', [AdminProfileController::class, 'update'])
        ->name('dashboard.profile.update');

    Route::prefix('dashboard/blogs')->name('admin.blogs.')->controller(BlogController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/{blog}/edit', 'edit')->name('edit');
        Route::get('/{blog}', 'show')->name('show');
        Route::match(['put', 'patch'], '/{blog}', 'update')->name('update');
        Route::delete('/{blog}', 'destroy')->name('destroy');
    });
    Route::prefix('dashboard/services')->name('admin.services.')->controller(ServicesController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/{service}/edit', 'edit')->name('edit');
        Route::get('/{service}', 'show')->name('show');
        Route::match(['put', 'patch'], '/{service}', 'update')->name('update');
        Route::delete('/{service}', 'destroy')->name('destroy');
    });
    Route::get('/dashboard/blog-categories', [BlogCategoryController::class, 'manage'])->name('admin.categories.index');
    Route::patch('/dashboard/blog-categories/{category}', [BlogCategoryController::class, 'update'])->whereNumber('category')->name('admin.categories.update');
    Route::delete('/dashboard/blog-categories/{category}', [BlogCategoryController::class, 'destroy'])->whereNumber('category')->name('admin.categories.destroy');
    Route::get('/blog-categories', [BlogCategoryController::class, 'index'])->name('blog-categories.index');
    Route::post('/blog-categories', [BlogCategoryController::class, 'store'])->name('blog-categories.store');

    Route::middleware('verified')->group(function () {
        Route::resource('enquiries', EnquiryController::class)
            ->only(['index', 'show'])
            ->parameters(['enquiries' => 'consultation']);
        Route::patch('/enquiries/{consultation}/status', EnquiryStatusController::class)
            ->middleware('throttle:6,1')
            ->name('enquiries.status');
    });

    Route::get('/dashboard/settings', function () {
        return Inertia::render('Admin/Settings');
    })->name('dashboard.settings');

    Route::middleware('admin.directory')->group(function () {
        Route::get('/dashboard/admins/{admin}/edit', [AdminDirectoryController::class, 'edit'])->whereNumber('admin')->name('dashboard.admins.edit');
        Route::patch('/dashboard/admins/{admin}', [AdminDirectoryController::class, 'update'])->whereNumber('admin')->name('dashboard.admins.update');
        Route::delete('/dashboard/admins/{admin}', [AdminDirectoryController::class, 'destroy'])->whereNumber('admin')->name('dashboard.admins.destroy');
    });

    Route::get('/dashboard/admins', [AdminDirectoryController::class, 'index'])
        ->middleware('admin.directory')
        ->name('dashboard.admins.index');

    Route::get('/dashboard/{path?}', function () {
        return Inertia::render('Admin/NotFound')
            ->toResponse(request())
            ->setStatusCode(404);
    })->where('path', '.*')->name('dashboard.not-found');
});

require __DIR__.'/auth.php';
