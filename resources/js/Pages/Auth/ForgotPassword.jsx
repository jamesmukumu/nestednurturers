import { Head, Link, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import AuthSubmitButton from '@/Components/AuthSubmitButton';
import GuestLayout from '@/Layouts/GuestLayout';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('password.email'));
    };

    return (
        <GuestLayout
            title="Forgot your password?"
            subtitle="Enter your email address and we’ll send you a password reset link."
            footer={<>Remember your password? <Link href={route('login')}>Back to login</Link></>}
        >
            <Head title="Forgot Password" />
            {status && <p className="auth-form__status" role="status">{status}</p>}
            <form className="auth-form" onSubmit={submit}>
                <div className="auth-form__field">
                    <label htmlFor="forgot-email">Email</label>
                    <InputText
                        id="forgot-email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="email"
                        autoFocus
                        invalid={Boolean(errors.email)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'forgot-email-error' : undefined}
                        onChange={(event) => setData('email', event.target.value)}
                    />
                    {errors.email && <small className="p-error" id="forgot-email-error">{errors.email}</small>}
                </div>
                <AuthSubmitButton
                    processing={processing}
                    label="Email Password Reset Link"
                    processingLabel="Sending link…"
                />
            </form>
        </GuestLayout>
    );
}
