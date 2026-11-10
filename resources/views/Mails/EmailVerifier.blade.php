@extends('emails.layouts.base')

@section('content')
<div class="dear-section">
  <p>Dear {{ $name }},</p>
  <p style="margin-top:16px;">Please verify your email address to activate your Nested Nurturers admin account.</p>
  <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px auto;">
    <tr>
      <td align="center" bgcolor="#ff76dc" style="border-radius:6px;">
        <a href="{{ $verificationUrl }}" style="display:inline-block;padding:14px 24px;color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;text-decoration:none;">
          Verify Email Address
        </a>
      </td>
    </tr>
  </table>
  <p>This link expires in {{ config('auth.verification.expire', 5) }} minutes.</p>
  <p style="margin-top:16px;">If you did not create this account, you can ignore this email.</p>
  <p style="margin-top:20px;">If the button does not work, copy and paste this URL into your browser:</p>
  <p style="margin-top:8px;overflow-wrap:anywhere;word-break:break-all;">
    <a href="{{ $verificationUrl }}" style="color:#496882;">{{ $verificationUrl }}</a>
  </p>
</div>
@endsection
