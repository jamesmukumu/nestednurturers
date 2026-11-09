import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';
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
                <Link href={route('logout')} method="post" as="button" className="auth-page__logout">
                    Log out
                </Link>
            }
        >
            <Head title="Email Verification" />
            {status === 'verification-link-sent' && (
                <p className="auth-form__status" role="status">
                    A new verification link has been sent to the email address you provided during registration.
                </p>
            )}
            <form className="auth-form" onSubmit={submit}>
                <Button
                    className="auth-form__submit"
                    type="submit"
                    label="Resend Verification Email"
                    loading={processing}
                    disabled={processing}
                />
            </form>
        </GuestLayout>
    );
}
