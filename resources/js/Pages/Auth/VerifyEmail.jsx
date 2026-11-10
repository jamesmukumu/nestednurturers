import { Head, Link, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import AuthSubmitButton from '@/Components/AuthSubmitButton';
import GuestLayout from '../../Layouts/GuestLayout';

export default function VerifyEmail({ status, error, email: initialEmail, expirationMinutes = 5 }) {
    const { data, setData, post, processing, errors } = useForm({
        email: initialEmail || '',
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('admin.verification.send'));
    };

    return (
        <GuestLayout
            title="Verify your email"
            subtitle="Use the link we emailed you to activate your admin account."
            footer={<>Ready to log in? <Link href={route('login')}>Log in</Link></>}
        >
            <Head title="Verify your email" />
            <div className="auth-card-content">
                {status && <p className="auth-form__status" role="status">{status}</p>}
                {error && <p className="auth-form__error" role="alert">{error}</p>}
                <p className="auth-card-content__header">
                    The verification link expires after {expirationMinutes} minute{expirationMinutes === 1 ? '' : 's'}.
                    If it has expired, request a new one below.
                </p>
                <form className="auth-form" onSubmit={submit}>
                    <div className="auth-form__field">
                        <label htmlFor="verification-email">Email</label>
                        <InputText
                            id="verification-email"
                            className="auth-form__input"
                            type="email"
                            value={data.email}
                            autoComplete="email"
                            required
                            readOnly={Boolean(initialEmail)}
                            invalid={Boolean(errors.email)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? 'verification-email-error' : undefined}
                            onChange={(event) => setData('email', event.target.value)}
                        />
                        <small className="auth-form__error" id="verification-email-error">
                            {errors.email || '\u00a0'}
                        </small>
                    </div>
                    <AuthSubmitButton
                        processing={processing}
                        label="Resend verification email"
                        processingLabel="Sending..."
                    />
                </form>
            </div>
        </GuestLayout>
    );
}
