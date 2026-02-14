<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailerController;
Route::post("/submit/enquiry",[MailerController::class,"EmailAlert"]);

