import { Head, Link, useForm } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import AuthSubmitButton from '@/Components/AuthSubmitButton';
import AuthPasswordInput from '@/Components/AuthPasswordInput';
import GuestLayout from '../../Layouts/GuestLayout';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phonenumber: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout
            title="Create your admin account"
            subtitle="Register to manage your blog content."
            footer={<>Already have an account? <Link href={route('login')}>Login</Link></>}
        >
            <Head title="Register" />
            <form className="auth-form" onSubmit={submit} noValidate>
                    <div className="auth-form__field">
                        <label htmlFor="register-name">Name</label>
                        <InputText
                            id="register-name"
                            className="auth-form__input"
                            value={data.name}
                            autoComplete="name"
                            autoFocus
                            invalid={Boolean(errors.name)}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? 'register-name-error' : undefined}
                            onChange={(event) => setData('name', event.target.value)}
                        />
                        <small className="auth-form__error" id="register-name-error">
                            {errors.name || '\u00a0'}
                        </small>
                    </div>
                    <div className="auth-form__field">
                        <label htmlFor="register-email">Email</label>
                        <InputText
                            id="register-email"
                            className="auth-form__input"
                            type="email"
                            value={data.email}
                            autoComplete="email"
                            invalid={Boolean(errors.email)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? 'register-email-error' : undefined}
                            onChange={(event) => setData('email', event.target.value)}
                        />
                        <small className="auth-form__error" id="register-email-error">
                            {errors.email || '\u00a0'}
                        </small>
                    </div>
                    <div className="auth-form__field">
                        <label htmlFor="register-phone">Phone number</label>
                        <InputText
                            id="register-phone"
                            className="auth-form__input"
                            value={data.phonenumber}
                            autoComplete="tel"
                            invalid={Boolean(errors.phonenumber)}
                            aria-invalid={Boolean(errors.phonenumber)}
                            aria-describedby={errors.phonenumber ? 'register-phone-error' : undefined}
                            onChange={(event) => setData('phonenumber', event.target.value)}
                        />
                        <small className="auth-form__error" id="register-phone-error">
                            {errors.phonenumber || '\u00a0'}
                        </small>
                    </div>
                    <div className="auth-form__field">
                        <label htmlFor="register-password">Password</label>
                        <AuthPasswordInput
                            inputId="register-password"
                            value={data.password}
                            autoComplete="new-password"
                            feedback
                            invalid={Boolean(errors.password)}
                            aria-invalid={Boolean(errors.password)}
                            aria-describedby={errors.password ? 'register-password-error' : undefined}
                            onChange={(event) => setData('password', event.target.value)}
                        />
                        <small className="auth-form__error" id="register-password-error">
                            {errors.password || '\u00a0'}
                        </small>
                    </div>
                    <div className="auth-form__field">
                        <label htmlFor="register-password-confirmation">Confirm password</label>
                        <AuthPasswordInput
                            inputId="register-password-confirmation"
                            value={data.password_confirmation}
                            autoComplete="new-password"
                            feedback={false}
                            invalid={Boolean(errors.password_confirmation)}
                            aria-invalid={Boolean(errors.password_confirmation)}
                            aria-describedby={errors.password_confirmation ? 'register-password-confirmation-error' : undefined}
                            onChange={(event) => setData('password_confirmation', event.target.value)}
                        />
                        <small className="auth-form__error" id="register-password-confirmation-error">
                            {errors.password_confirmation || '\u00a0'}
                        </small>
                    </div>
                <AuthSubmitButton processing={processing} />
            </form>
        </GuestLayout>
    );
}
