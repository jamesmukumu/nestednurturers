<?php

use App\Http\Controllers\InterviewController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailerController;
Route::post("/submit/enquiry", [MailerController::class, "EmailAlert"]);

Route::get('/get/orders', [InterviewController::class, 'getOrders']);
Route::get('/update/orders', [InterviewController::class, 'calculateTotalAmount']);
Route::get('/orders', [InterviewController::class, 'filterOrders']);
Route::get('/orders/{id}', [InterviewController::class, 'getOrder']);
