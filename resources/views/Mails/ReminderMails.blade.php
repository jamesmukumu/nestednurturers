<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="x-apple-disable-message-reformatting">
	<title>Pending enquiries</title>
</head>
<body style="margin:0; padding:24px 12px; background-color:#f2f5f8; color:#27313a; font-family:Arial, Helvetica, sans-serif;">
	<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse;">
		<tr>
			<td align="center" style="padding:0;">
				<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; max-width:680px; margin:0 auto; border-collapse:collapse;">
					<tr>
						<td style="padding:0;">
							@include('components.header')
						</td>
					</tr>
					<tr>
						<td style="padding:32px 30px 12px; background-color:#ffffff;">
							<p style="margin:0 0 8px; color:#607b98; font-size:12px; font-weight:bold; letter-spacing:1.4px; text-transform:uppercase;">Enquiry follow-up</p>
							<h1 style="margin:0 0 12px; color:#253547; font-size:26px; line-height:1.25; font-weight:700;">Pending enquiries</h1>
							<p style="margin:0; color:#5c6873; font-size:15px; line-height:1.6;">The following enquiries still need a response. Please review and follow up with each person.</p>
						</td>
					</tr>
					<tr>
						<td style="padding:18px 30px 32px; background-color:#ffffff;">
							<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; border-collapse:collapse; font-size:14px;">
								<thead>
									<tr>
										<th align="left" style="padding:13px 14px; border-bottom:2px solid #dbe3eb; background-color:#f5f8fb; color:#445568; font-size:12px; font-weight:700; letter-spacing:0.7px; text-transform:uppercase;">Name</th>
										<th align="left" style="padding:13px 14px; border-bottom:2px solid #dbe3eb; background-color:#f5f8fb; color:#445568; font-size:12px; font-weight:700; letter-spacing:0.7px; text-transform:uppercase;">Email</th>
										<th align="left" style="padding:13px 14px; border-bottom:2px solid #dbe3eb; background-color:#f5f8fb; color:#445568; font-size:12px; font-weight:700; letter-spacing:0.7px; text-transform:uppercase;">Status</th>
									</tr>
								</thead>
								<tbody>
									@forelse ($consulatations as $consultation)
										<tr>
											<td style="padding:15px 14px; border-bottom:1px solid #e8edf2; color:#27313a; font-weight:600; line-height:1.5;">{{ $consultation->name ?? '' }}</td>
											<td style="padding:15px 14px; border-bottom:1px solid #e8edf2; color:#506579; line-height:1.5; word-break:break-word;">{{ $consultation->email ?? '' }}</td>
											<td style="padding:15px 14px; border-bottom:1px solid #e8edf2;">
												<span style="display:inline-block; padding:5px 9px; border:1px solid #f2c5c5; border-radius:3px; background-color:#fff0f0; color:#b42318; font-size:11px; font-weight:700; line-height:1.2; white-space:nowrap;">PENDING</span>
											</td>
										</tr>
									@empty
										<tr>
											<td colspan="3" align="center" style="padding:24px 14px; border-bottom:1px solid #e8edf2; color:#697783; line-height:1.5;">There are no pending enquiries.</td>
										</tr>
									@endforelse
								</tbody>
							</table>
						</td>
					</tr>
					<tr>
						<td style="padding:0;">
							@php($yr = date('Y'))
							@include('components.footer')
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
