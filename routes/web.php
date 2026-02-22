<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SitemapController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get("/sitemap",[SitemapController::class,'SiteMapGenerator']);
Route::get('/', function () {
return Inertia::render('Home');
});
Route::get('/contact', function () {
return Inertia::render('Contacts');
});
Route::get("/faq",function(){
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

require __DIR__.'/auth.php';
