import { Head, Link, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import Checkbox from '@/Components/Checkbox';
import AuthSubmitButton from '@/Components/AuthSubmitButton';
import AuthPasswordInput from '@/Components/AuthPasswordInput';
import GuestLayout from '../../Layouts/GuestLayout';

export default function Login({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };
    const needsVerification = errors.email === 'Please verify your email address before logging in.';

    return (
        <GuestLayout
            title="Welcome back"
            subtitle="Log in to continue to your workspace."
            footer={<>Don’t have an account? <Link href={route('register')}>Register</Link></>}
        >
            <Head title="Log in" />
            <div className="auth-card-content">
                {status && <p className="auth-form__status" role="status">{status}</p>}
                <form className="auth-form" onSubmit={submit} noValidate>
                    <div className="auth-form__field">
                        <label htmlFor="login-email">Email</label>
                        <InputText
                            id="login-email"
                            className="auth-form__input"
                            type="email"
                            value={data.email}
                            autoComplete="email"
                            autoFocus
                            invalid={Boolean(errors.email)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? 'login-email-error' : undefined}
                            onChange={(event) => setData('email', event.target.value)}
                        />
                        <small className="auth-form__error" id="login-email-error">
                            {errors.email || '\u00a0'}
                        </small>
                        {needsVerification && (
                            <Link href={route('admin.verification.notice')}>Resend verification email</Link>
                        )}
                    </div>
                    <div className="auth-form__field">
                        <label htmlFor="login-password">Password</label>
                        <AuthPasswordInput
                            inputId="login-password"
                            value={data.password}
                            autoComplete="current-password"
                            feedback={false}
                            invalid={Boolean(errors.password)}
                            aria-invalid={Boolean(errors.password)}
                            aria-describedby={errors.password ? 'login-password-error' : undefined}
                            onChange={(event) => setData('password', event.target.value)}
                        />
                        <small className="auth-form__error" id="login-password-error">
                            {errors.password || '\u00a0'}
                        </small>
                    </div>
                    <div className="auth-form__remember">
                        <Checkbox
                            id="login-remember"
                            checked={data.remember}
                            onChange={(event) => setData('remember', event.target.checked)}
                        />
                        <label htmlFor="login-remember">Remember me</label>
                    </div>
                    <AuthSubmitButton processing={processing} label="Log in" processingLabel="Logging in…" />
                </form>
            </div>
        </GuestLayout>
    );
}
