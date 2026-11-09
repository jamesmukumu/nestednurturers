import { Head, Link, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import AuthPasswordInput from '@/Components/AuthPasswordInput';
import AuthSubmitButton from '@/Components/AuthSubmitButton';
import GuestLayout from '@/Layouts/GuestLayout';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token,
        email,
        password: '',
        password_confirmation: '',
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout
            title="Reset your password"
            subtitle="Choose a new password for your account."
            footer={<>Remember your password? <Link href={route('login')}>Back to login</Link></>}
        >
            <Head title="Reset Password" />
            <form className="auth-form" onSubmit={submit}>
                <input type="hidden" name="token" value={data.token} />
                <div className="auth-form__field">
                    <label htmlFor="reset-email">Email</label>
                    <InputText
                        id="reset-email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="email"
                        invalid={Boolean(errors.email)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'reset-email-error' : undefined}
                        onChange={(event) => setData('email', event.target.value)}
                    />
                    {errors.email && <small className="p-error" id="reset-email-error">{errors.email}</small>}
                </div>
                <div className="auth-form__field">
                    <label htmlFor="reset-password">New password</label>
                    <AuthPasswordInput
                        inputId="reset-password"
                        value={data.password}
                        autoComplete="new-password"
                        autoFocus
                        feedback={false}
                        invalid={Boolean(errors.password)}
                        aria-invalid={Boolean(errors.password)}
                        aria-describedby={errors.password ? 'reset-password-error' : undefined}
                        onChange={(event) => setData('password', event.target.value)}
                    />
                    {errors.password && <small className="p-error" id="reset-password-error">{errors.password}</small>}
                </div>
                <div className="auth-form__field">
                    <label htmlFor="reset-password-confirmation">Confirm password</label>
                    <AuthPasswordInput
                        inputId="reset-password-confirmation"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        feedback={false}
                        invalid={Boolean(errors.password_confirmation)}
                        aria-invalid={Boolean(errors.password_confirmation)}
                        aria-describedby={errors.password_confirmation ? 'reset-password-confirmation-error' : undefined}
                        onChange={(event) => setData('password_confirmation', event.target.value)}
                    />
                    {errors.password_confirmation && (
                        <small className="p-error" id="reset-password-confirmation-error">
                            {errors.password_confirmation}
                        </small>
                    )}
                </div>
                <AuthSubmitButton
                    processing={processing}
                    label="Reset Password"
                    processingLabel="Resetting password…"
                />
            </form>
        </GuestLayout>
    );
}
