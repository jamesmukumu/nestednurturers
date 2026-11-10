@extends('emails.layouts.base')

@section('content')
<div class="dear-section">
  <p>Dear {{ $clients['name'] }},</p>
  <p>Thank you for reaching out to NestedNurturers! We’re honored to support you through this special journey into parenthood.</p>
  <p>We’ve received your request, and one of our dedicated doulas will review it with care. You can expect a personalized response within 8 hours, thoughtfully prepared to include:</p>
  <ul>
    <li>A customized plan for prenatal, birth, and postpartum support tailored to your needs and preferences</li>
    <li>Expert guidance on comfort techniques, birth options, and newborn care</li>
    <li>Transparent pricing and clear details about our services, so you can focus on your growing family with peace of mind</li>
  </ul>

  <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;border-collapse:collapse;margin-top:20px;">
    <tr>
      <td colspan="2" style="background-color:#ff76dc;color:white;font-weight:bold;padding:12px;font-size:16px;border:1px solid #E5D2B8;">Enquiry Summary</td>
    </tr>
    <tr>
      <td style="width:30%;padding:10px;border:1px solid #E5D2B8;font-weight:bold;color:#4A2E19;">Name</td>
      <td style="width:70%;padding:10px;border:1px solid #E5D2B8;">{{ $clients['name'] }}</td>
    </tr>
    <tr>
      <td style="width:30%;padding:10px;border:1px solid #E5D2B8;font-weight:bold;color:#4A2E19;">Email</td>
      <td style="width:70%;padding:10px;border:1px solid #E5D2B8;">{{ $clients['email'] }}</td>
    </tr>
    <tr>
      <td style="width:30%;padding:10px;border:1px solid #E5D2B8;font-weight:bold;color:#4A2E19;">Phone</td>
      <td style="width:70%;padding:10px;border:1px solid #E5D2B8;">{{ $clients['phonenumber'] }}</td>
    </tr>
    <tr>
      <td style="width:30%;padding:10px;border:1px solid #E5D2B8;font-weight:bold;color:#4A2E19;">Location</td>
      <td style="width:70%;padding:10px;border:1px solid #E5D2B8;">{{ $clients['location'] }}</td>
    </tr>
    <tr>
      <td style="width:30%;padding:10px;border:1px solid #E5D2B8;font-weight:bold;color:#4A2E19;">Expected Due Date</td>
      <td style="width:70%;padding:10px;border:1px solid #E5D2B8;">{{ $clients['expected_due_time'] }}</td>
    </tr>
    <tr>
      <td style="width:30%;padding:10px;border:1px solid #E5D2B8;font-weight:bold;color:#4A2E19;">Preferred Doula Service Date</td>
      <td style="width:70%;padding:10px;border:1px solid #E5D2B8;">{{ $clients['preferred_doula_services_start'] }}</td>
    </tr>
    <tr>
      <td style="width:30%;padding:10px;border:1px solid #E5D2B8;font-weight:bold;color:#4A2E19;">Duration of Support</td>
      <td style="width:70%;padding:10px;border:1px solid #E5D2B8;">{{ $clients['duration_of_support'] }}</td>
    </tr>
    <tr>
      <td style="width:30%;padding:10px;border:1px solid #E5D2B8;font-weight:bold;color:#4A2E19;">No. Nights Per Week</td>
      <td style="width:70%;padding:10px;border:1px solid #E5D2B8;">{{ $clients['no_nights_per_week'] }}</td>
    </tr>
    @if (!empty($clients['services_seeked']))
      <tr>
        <td style="width:30%;padding:10px;border:1px solid #E5D2B8;font-weight:bold;color:#4A2E19;">Services Seeked</td>
        <td style="width:70%;padding:10px;border:1px solid #E5D2B8;">{{ $clients['services_seeked'] }}</td>
      </tr>
    @endif
    @if (!empty($clients['howHeard']))
      <tr>
        <td style="width:30%;padding:10px;border:1px solid #E5D2B8;font-weight:bold;color:#4A2E19;">Mode of Knowing</td>
        <td style="width:70%;padding:10px;border:1px solid #E5D2B8;">{{ $clients['howHeard'] }}</td>
      </tr>
    @endif
  </table>

  <p style="margin-top:20px;">We look forward to supporting you.</p>
  <p style="margin-top:20px;">
    Warm Regards,<br>
    NestedNurturers<br>
    <span class="contact-label">Phone:</span> +1 (925) 316-8311<br>
    <span class="contact-label">Email:</span> info@nestednurturers.com
  </p>
</div>
@endsection
