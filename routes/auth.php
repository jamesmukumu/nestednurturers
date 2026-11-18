<?php

use App\Http\Controllers\Auth\AdminPasswordResetController;
use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest:admin')->group(function () {
    Route::get('register', [AuthController::class, 'showRegister'])
        ->name('register');

    Route::post('register', [AuthController::class, 'register']);

    Route::get('login', [AuthController::class, 'showLogin'])
        ->name('login');

    Route::post('login', [AuthController::class, 'login']);

    Route::get('forgot-password', [AdminPasswordResetController::class, 'createRequest'])
        ->name('password.request');
    Route::post('forgot-password', [AdminPasswordResetController::class, 'storeRequest'])
        ->middleware('throttle:3,1')
        ->name('password.email');

    Route::get('reset-password/{reference}', [AdminPasswordResetController::class, 'createReset'])
        ->middleware('signed')
        ->whereNumber('reference')
        ->name('password.reset');
    Route::post('reset-password/{reference}', [AdminPasswordResetController::class, 'storeReset'])
        ->middleware('signed')
        ->whereNumber('reference')
        ->name('password.store');
});

Route::middleware('auth:admin')->group(function () {
    Route::post('logout', [AuthController::class, 'logout'])
        ->name('logout');
});
