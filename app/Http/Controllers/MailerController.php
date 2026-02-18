<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\EnquiryMail;
use Log;
class MailerController extends Controller{


public function EmailAlert(Request $request){
$validatedRequest = $request->validate([
"email"=>"required",
"day"=>"required",
"phone"=>"required",
"name"=>"required",
"timezone"=>"required"
]);
try{
    $enquiry = new EnquiryMail($validatedRequest);
    Mail::to($validatedRequest["email"])->cc('info@nestednurturers.com')->send($enquiry);
    return response()->json([
    "message"=>"Enquiry Received"
    ]);
}catch(\Exception $err){
Log::error($err->getMessage());
return response()->json([
    "message"=>"Something Went Wrong"
    ]);
}


}

}