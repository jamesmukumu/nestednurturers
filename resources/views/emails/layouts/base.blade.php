<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>{{ $subject ?? config('app.name') }}</title>
  <link href="https://fonts.googleapis.com/css?family=Oswald:300,700&display=swap" rel="stylesheet">
  <style type="text/css">
    body {width:100%;height:100%;margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
    h1, p {margin:0;padding:0;}
    .email-body {text-align:left;padding:20px;font-family:'Open Sans',Arial,sans-serif;line-height:1.6;font-size:16px;color:#262626;max-width:600px;margin:0 auto;}
    .dear-section {padding:20px 0;line-height:1.8;font-size:16px;}
    .contact-section {margin-top:40px;padding:20px;border-radius:8px;}
    .contact-item {margin-bottom:10px;font-size:16px;line-height:1.4;}
    .contact-label {font-weight:bold;color:#303233;}
    @media only screen and (max-width:600px) {
      .email-body {padding:10px;}
      h1 {font-size:24px!important;}
      p {font-size:16px!important;}
    }
  </style>
</head>
<body style="background-color:#F5F5F5;margin:0;padding:0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F5F5;width:100%;">
    <tr>
      <td align="center" style="padding:10px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background-color:#ffffff;">
          <tr>
            <td>@include('components.header')</td>
          </tr>
          <tr>
            <td>
              <div class="email-body">
                @yield('content')
              </div>
            </td>
          </tr>
          <tr>
            <td>@include('components.footer')</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
