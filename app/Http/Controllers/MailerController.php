<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\EnquiryMail;
use Log;
use App\Models\consultations;
use Illuminate\Support\Str;
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
     $consultation = new consultations();
     $consultation->name = $validatedRequest['name'];
     $consultation->email = $validatedRequest['email'];
     $consultation->consultationDate = $validatedRequest['day'];
     $consultation->timezone = $validatedRequest['timezone'] ?? "America/Los_Angeles";
     $consultation->phonenumber = $validatedRequest['phone'];
     $consultation->consultationID = Str::orderedUuid()->toString();
    $consultation->save();
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