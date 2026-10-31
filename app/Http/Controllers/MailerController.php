<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\EnquiryMail;
use Log;
use App\Models\consultations;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
class MailerController extends Controller
{
    public function EmailAlert(Request $request)
    {
        try {
            $validatedRequest = $request->validate([
                'email' => ['required', 'string', 'email', 'max:255'],
                'consultationDate' => ['required', 'date', 'after_or_equal:now'],
                'phonenumber' => ['required', 'string', 'min:10', 'max:30'],
                'name' => ['required', 'string', 'min:2', 'max:255'],
                'timezone' => ['required', 'string', 'timezone'],
                'location' => ['required', 'string', 'min:2', 'max:255'],
                'expected_due_time' => ['required', 'date', 'before_or_equal:today'],
                'preferred_doula_services_start' => ['required', 'date', 'before_or_equal:today'],
                'services_seeked' => ['nullable', 'string', 'max:2000'],
                'duration_of_support' => ['required', 'string', 'max:100'],
                'no_nights_per_week' => ['required', 'string', 'max:2000'],
                'howHeard' => ['nullable', 'string', 'max:2000'],
            ]);

            $validatedRequest['email'] = (string) $validatedRequest['email'];
            $validatedRequest['consultationDate'] = Carbon::parse($validatedRequest['consultationDate'])->format('Y-m-d H:i:s');
            $validatedRequest['phonenumber'] = (string) $validatedRequest['phonenumber'];
            $validatedRequest['name'] = (string) $validatedRequest['name'];
            $validatedRequest['timezone'] = (string) $validatedRequest['timezone'];
            $validatedRequest['location'] = (string) $validatedRequest['location'];
            $validatedRequest['expected_due_time'] = Carbon::parse($validatedRequest['expected_due_time'])->format('Y-m-d');
            $validatedRequest['preferred_doula_services_start'] = Carbon::parse($validatedRequest['preferred_doula_services_start'])->format('Y-m-d');
            $validatedRequest['services_seeked'] = (string) ($validatedRequest['services_seeked'] ?? '');
            $validatedRequest['duration_of_support'] = (string) $validatedRequest['duration_of_support'];
            $validatedRequest['no_nights_per_week'] = (string) $validatedRequest['no_nights_per_week'];
            $validatedRequest['howHeard'] = isset($validatedRequest['howHeard'])
                ? (string) $validatedRequest['howHeard']
                : null;

            Mail::to($validatedRequest['email'])->send(new EnquiryMail($validatedRequest));

            $consultation = new consultations();
            $consultation->name = $validatedRequest['name'];
            $consultation->email = $validatedRequest['email'];
            $consultation->consultationDate = $validatedRequest['consultationDate'];
            $consultation->timezone = $validatedRequest['timezone'];
            $consultation->phonenumber = $validatedRequest['phonenumber'];
            $consultation->consultationID = Str::orderedUuid()->toString();
            $consultation->location = $validatedRequest['location'];
            $consultation->expected_due_time = Carbon::parse($validatedRequest['expected_due_time']);
            $consultation->preferred_douala_services_start = Carbon::parse($validatedRequest['preferred_doula_services_start']);
            $consultation->services_seeked = $validatedRequest['services_seeked'];
            $consultation->duration_of_support = $validatedRequest['duration_of_support'];
            $consultation->no_nights_per_week = $validatedRequest['no_nights_per_week'];
            $consultation->howHeard = $validatedRequest['howHeard'];
            $consultation->save();

            return response()->json([
                'message' => 'Enquiry Received',
                'success' => true,
            ]);
        } catch (ValidationException $err) {
            return response()->json([
                'message' => 'The submitted enquiry is invalid.',
                'success' => false,
                'errors' => $err->errors(),
            ], 422);
        } catch (\Throwable $err) {
            Log::error($err->getMessage());

            return response()->json([
                'message' => 'Something Went Wrong',
                'success' => false,
            ], 500);
        }
    }
}
