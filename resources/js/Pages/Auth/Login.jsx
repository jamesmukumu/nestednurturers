import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
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
                            type="email"
                            value={data.email}
                            autoComplete="email"
                            autoFocus
                            invalid={Boolean(errors.email)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? 'login-email-error' : undefined}
                            onChange={(event) => setData('email', event.target.value)}
                        />
                        {errors.email && <small className="p-error" id="login-email-error">{errors.email}</small>}
                    </div>
                    <div className="auth-form__field">
                        <label htmlFor="login-password">Password</label>
                        <Password
                            inputId="login-password"
                            value={data.password}
                            autoComplete="current-password"
                            toggleMask
                            feedback={false}
                            invalid={Boolean(errors.password)}
                            aria-invalid={Boolean(errors.password)}
                            aria-describedby={errors.password ? 'login-password-error' : undefined}
                            onChange={(event) => setData('password', event.target.value)}
                        />
                        {errors.password && <small className="p-error" id="login-password-error">{errors.password}</small>}
                    </div>
                    <div className="auth-form__remember">
                        <Checkbox
                            inputId="login-remember"
                            checked={data.remember}
                            onChange={(event) => setData('remember', event.checked)}
                        />
                        <label htmlFor="login-remember">Remember me</label>
                    </div>
                    <Button
                        className="auth-form__submit"
                        type="submit"
                        label="Log in"
                        loading={processing}
                        disabled={processing}
                    />
                </form>
            </div>
        </GuestLayout>
    );
}
