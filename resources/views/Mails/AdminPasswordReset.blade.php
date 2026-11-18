<x-mail::message>
# Reset your password

Hello {{ $name }},

We received a request to reset your Nested Nurturers administrator password. Use the button below to choose a new password. This link expires in 5 minutes and can only be used once.

<x-mail::button :url="$resetUrl">
Reset password
</x-mail::button>

If you did not request this reset, you can safely ignore this email.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
