import { useEffect, useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import './profile.css';

const PROFILE_API_URL = '/dashboard/profile/data';
const PROFILE_TIMEOUT_MS = 4000;

export class ProfileRequestError extends Error {
    constructor(code, message) { super(message); this.name = 'ProfileRequestError'; this.code = code; }
}

function isRecord(value) { return value !== null && typeof value === 'object' && !Array.isArray(value); }

function normalizeProfile(value) {
    if (!isRecord(value)) throw new ProfileRequestError('invalid-response', 'The profile response was invalid.');
    const string = (field) => typeof value[field] === 'string' ? value[field].trim() : '';
    return { id: value.id ?? null, name: string('name'), email: string('email'), phonenumber: string('phonenumber'), isEmailVerified: typeof value.isEmailVerified === 'boolean' ? value.isEmailVerified : null, isAdmin: typeof value.isAdmin === 'boolean' ? value.isAdmin : null, created_at: string('created_at'), updated_at: string('updated_at') };
}

export async function fetchProfile(signal) {
    const controller = new AbortController();
    let didTimeout = false;
    const timeoutId = window.setTimeout(() => { didTimeout = true; controller.abort(); }, PROFILE_TIMEOUT_MS);
    const forwardAbort = () => controller.abort(signal.reason);
    if (signal?.aborted) controller.abort(signal.reason); else signal?.addEventListener('abort', forwardAbort, { once: true });
    try {
        const response = await fetch(PROFILE_API_URL, { method: 'GET', credentials: 'same-origin', headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, signal: controller.signal });
        const payload = await response.json().catch(() => null);
        if (!response.ok) throw new ProfileRequestError(response.status === 401 ? 'unauthorized' : response.status === 403 ? 'forbidden' : response.status === 404 ? 'not-found' : response.status >= 500 ? 'server' : 'http', 'We could not load this profile.');
        if (!isRecord(payload) || !isRecord(payload.profile)) throw new ProfileRequestError('invalid-response', 'The profile response was invalid.');
        return normalizeProfile(payload.profile);
    } catch (error) {
        if (error instanceof ProfileRequestError) throw error;
        if (didTimeout) throw new ProfileRequestError('timeout', 'The request took too long.');
        if (signal?.aborted) throw error;
        throw new ProfileRequestError('network', 'We could not load this profile.');
    } finally { window.clearTimeout(timeoutId); signal?.removeEventListener('abort', forwardAbort); }
}

const initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0].toLocaleUpperCase()).join('') || '?';
const formatDate = (value) => { const date = new Date(value); return Number.isNaN(date.getTime()) ? '—' : new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(date); };

function ProfileSkeleton() {
    return <div className="profile-skeleton" aria-hidden="true"><div className="profile-skeleton__header"><span className="profile-skeleton__avatar" /><div><span className="profile-skeleton__line profile-skeleton__line--name" /><span className="profile-skeleton__line" /></div></div><div className="profile-skeleton__grid"><span className="profile-skeleton__panel" /><span className="profile-skeleton__panel" /></div></div>;
}

function Profile() {
    const { props } = usePage();
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    const [attempt, setAttempt] = useState(0);
    const [sendingVerification, setSendingVerification] = useState(false);
    const [verificationMessage, setVerificationMessage] = useState('');
    const form = useForm({ name: '', email: '', phonenumber: '' });

    useEffect(() => {
        const controller = new AbortController();
        setProfile(null); setError(null);
        fetchProfile(controller.signal).then((nextProfile) => {
            setProfile(nextProfile);
            form.setData({ name: nextProfile.name, email: nextProfile.email, phonenumber: nextProfile.phonenumber });
            form.clearErrors();
        }).catch((requestError) => { if (!controller.signal.aborted) setError(requestError); });
        return () => controller.abort();
    }, [attempt]);

    useEffect(() => { if (props.flash?.status === 'verification-link-sent') setVerificationMessage('Verification email sent. Check your inbox.'); }, [props.flash?.status]);

    const submit = (event) => { event.preventDefault(); form.patch('/dashboard/profile', { preserveScroll: true, onSuccess: () => setAttempt((current) => current + 1) }); };
    const sendVerificationEmail = async () => {
        setSendingVerification(true); setVerificationMessage('');
        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            const response = await fetch('/admin/email/verification-notification', { method: 'POST', credentials: 'same-origin', headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest', 'X-CSRF-TOKEN': csrfToken || '' } });
            if (!response.ok) throw new Error();
            setVerificationMessage('Verification email sent. Check your inbox.');
        } catch { setVerificationMessage('We couldn’t send the verification email. Please try again.'); } finally { setSendingVerification(false); }
    };

    const loading = !profile && !error;
    const displayName = profile?.name || 'Admin account';
    return <><Head title="Profile" /><section className="profile-page" aria-labelledby="profile-page-heading" aria-busy={loading}>
        <header className="profile-page__page-heading"><div><h1 id="profile-page-heading">Profile</h1><p>Manage your admin account details.</p></div></header>
        <section className="profile-page__data" aria-label="Profile details" aria-live="polite" aria-busy={loading}>
            {loading && <ProfileSkeleton />}
            {error && <div className="profile-message profile-message--error" role="alert"><h2>Profile unavailable</h2><p>We couldn’t load your profile. Check your connection, then try again.</p><button className="profile-button profile-button--primary" type="button" onClick={() => setAttempt((current) => current + 1)}>Try again</button></div>}
            {profile && <>
                {!profile.isEmailVerified && <div className="profile-verification-alert" role="alert"><i className="pi pi-exclamation-triangle" aria-hidden="true" /><div className="profile-verification-alert__content"><p>Your email isn't verified. Verify it to receive notifications and recover your account.</p><button className="profile-button profile-button--primary" type="button" disabled={sendingVerification} onClick={sendVerificationEmail}>{sendingVerification ? 'Sending…' : 'Send verification email'}</button>{verificationMessage && <p className="profile-verification-alert__feedback" aria-live="polite">{verificationMessage}</p>}</div></div>}
                <section className="profile-card profile-card--header" aria-labelledby="profile-name"><div className="profile-avatar" role="img" aria-label={`${displayName} initials`}>{initials(displayName)}</div><div className="profile-card__identity"><h2 id="profile-name">{displayName}</h2><p>{profile.isAdmin ? 'Administrator' : 'Admin account'}</p><span className={`profile-status ${profile.isEmailVerified ? 'is-verified' : 'is-unverified'}`}><i className={profile.isEmailVerified ? 'pi pi-check' : 'pi pi-exclamation-triangle'} aria-hidden="true" />{profile.isEmailVerified ? 'Email verified' : 'Email not verified'}</span></div></section>
                <div className="profile-layout"><form className="profile-card profile-edit-card" onSubmit={submit} noValidate><header className="profile-card__heading"><div><h2>Personal details</h2><p>Keep your contact information up to date.</p></div></header><div className="profile-form__grid"><label className="profile-form__field" htmlFor="admin-profile-name"><span>Name</span><input id="admin-profile-name" type="text" autoComplete="name" value={form.data.name} onChange={(event) => form.setData('name', event.target.value)} aria-invalid={Boolean(form.errors.name)} required />{form.errors.name && <small>{form.errors.name}</small>}</label><label className="profile-form__field" htmlFor="admin-profile-email"><span>Email address</span><input id="admin-profile-email" type="email" autoComplete="email" value={form.data.email} onChange={(event) => form.setData('email', event.target.value)} aria-invalid={Boolean(form.errors.email)} required />{form.errors.email && <small>{form.errors.email}</small>}<em>Changing your email requires verification again.</em></label><label className="profile-form__field" htmlFor="admin-profile-phone"><span>Phone number</span><input id="admin-profile-phone" type="tel" autoComplete="tel" value={form.data.phonenumber} onChange={(event) => form.setData('phonenumber', event.target.value)} aria-invalid={Boolean(form.errors.phonenumber)} required />{form.errors.phonenumber && <small>{form.errors.phonenumber}</small>}</label></div><div className="profile-form__actions"><button className="profile-button profile-button--primary" type="submit" disabled={form.processing}>{form.processing ? 'Saving…' : 'Save changes'}</button>{form.recentlySuccessful && <p role="status">Saved.</p>}</div></form>
                    <aside className="profile-side-stack"><section className="profile-card"><h2>Account</h2><dl className="profile-fields"><div className="profile-fields__row"><dt><i className="pi pi-envelope" aria-hidden="true" />Email</dt><dd>{profile.email}</dd></div><div className="profile-fields__row"><dt><i className="pi pi-calendar" aria-hidden="true" />Member since</dt><dd>{formatDate(profile.created_at)}</dd></div><div className="profile-fields__row"><dt><i className="pi pi-clock" aria-hidden="true" />Last updated</dt><dd>{formatDate(profile.updated_at)}</dd></div></dl></section><section className="profile-card profile-security-note"><i className="pi pi-lock" aria-hidden="true" /><div><h2>Password</h2><p>Password changes are managed separately for account security.</p></div></section></aside></div>
            </>}
        </section>
    </section></>;
}

Profile.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Profile;
