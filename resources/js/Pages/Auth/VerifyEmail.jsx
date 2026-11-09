import { Head, useForm } from '@inertiajs/react';
import AuthSubmitButton from '@/Components/AuthSubmitButton';
import Button from '@/Components/Button';
import GuestLayout from '@/Layouts/GuestLayout';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (event) => {
        event.preventDefault();
        post(route('verification.send'));
    };

    return (
        <GuestLayout
            title="Verify your email"
            subtitle="Check your inbox for the verification link. If you did not receive it, request another below."
            footer={
                <Button href={route('logout')} method="post" as="button" variant="ghost" size="sm" className="auth-page__logout">
                    Log out
                </Button>
            }
        >
            <Head title="Email Verification" />
            {status === 'verification-link-sent' && (
                <p className="auth-form__status" role="status">
                    A new verification link has been sent to the email address you provided during registration.
                </p>
            )}
            <form className="auth-form" onSubmit={submit}>
                <AuthSubmitButton
                    processing={processing}
                    label="Resend Verification Email"
                    processingLabel="Sending…"
                />
            </form>
        </GuestLayout>
    );
}
