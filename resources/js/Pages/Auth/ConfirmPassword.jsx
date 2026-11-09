import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import GuestLayout from '@/Layouts/GuestLayout';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout
            title="Confirm your password"
            subtitle="This is a secure area. Please confirm your password before continuing."
            footer={<>Need to sign in again? <Link href={route('login')}>Back to login</Link></>}
        >
            <Head title="Confirm Password" />
            <form className="auth-form" onSubmit={submit}>
                <div className="auth-form__field">
                    <label htmlFor="confirm-password">Password</label>
                    <Password
                        inputId="confirm-password"
                        value={data.password}
                        autoComplete="current-password"
                        autoFocus
                        toggleMask
                        feedback={false}
                        invalid={Boolean(errors.password)}
                        aria-invalid={Boolean(errors.password)}
                        aria-describedby={errors.password ? 'confirm-password-error' : undefined}
                        onChange={(event) => setData('password', event.target.value)}
                    />
                    {errors.password && <small className="p-error" id="confirm-password-error">{errors.password}</small>}
                </div>
                <Button
                    className="auth-form__submit"
                    type="submit"
                    label="Confirm"
                    loading={processing}
                    disabled={processing}
                />
            </form>
        </GuestLayout>
    );
}
