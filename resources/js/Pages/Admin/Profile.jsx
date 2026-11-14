import { useEffect, useRef, useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import './profile.css';

const PROFILE_API_URL = '/dashboard/profile/data';
const PROFILE_TIMEOUT_MS = 4000;
const PROFILE_FIELDS = Object.freeze({
    header: [
        {
            key: 'name',
            label: 'Name',
            icon: 'pi pi-user',
            formatter: (value) => ({ text: value }),
            visible: (profile) => Boolean(profile.name),
        },
        {
            key: 'isAdmin',
            label: 'Role',
            icon: 'pi pi-shield',
            formatter: (value) => ({ text: value ? 'Administrator' : 'Admin account' }),
            visible: (profile) => typeof profile.isAdmin === 'boolean',
        },
        {
            key: 'isEmailVerified',
            label: 'Email status',
            icon: 'pi pi-exclamation-triangle',
            formatter: (value) => ({
                text: value ? 'Verified' : 'Not verified',
                icon: value ? 'pi pi-check' : 'pi pi-exclamation-triangle',
            }),
            visible: (profile) => typeof profile.isEmailVerified === 'boolean',
        },
    ],
    contact: [
        {
            key: 'email',
            label: 'Email',
            icon: 'pi pi-envelope',
            formatter: (value) => ({
                text: value,
                href: `mailto:${encodeURIComponent(value).replace(/%40/gi, '@')}`,
            }),
            visible: (profile) => Boolean(profile.email),
        },
        {
            key: 'phonenumber',
            label: 'Phone',
            icon: 'pi pi-phone',
            formatter: (value) => {
                const phone = value.replace(/[^\d+]/g, '');
                return {
                    text: formatPhone(value),
                    href: phone ? `tel:${phone}` : undefined,
                };
            },
            visible: (profile) => Boolean(profile.phonenumber),
        },
    ],
    details: [
        {
            key: 'created_at',
            label: 'Member since',
            icon: 'pi pi-calendar',
            formatter: (value) => ({ text: formatDate(value) }),
            visible: (profile) => Boolean(profile.created_at),
        },
        {
            key: 'updated_at',
            label: 'Last updated',
            icon: 'pi pi-clock',
            formatter: (value) => ({ text: formatDate(value) }),
            visible: (profile) => Boolean(profile.updated_at),
        },
    ],
});

export class ProfileRequestError extends Error {
    constructor(code, message) {
        super(message);
        this.name = 'ProfileRequestError';
        this.code = code;
    }
}

function isRecord(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function normalizeProfile(value) {
    if (!isRecord(value)) {
        throw new ProfileRequestError('invalid-response', 'The profile response was invalid.');
    }

    const trimString = (field) =>
        typeof value[field] === 'string' ? value[field].trim() : '';

    return {
        id: typeof value.id === 'number' || typeof value.id === 'string' ? value.id : null,
        name: trimString('name'),
        email: trimString('email'),
        phonenumber: trimString('phonenumber'),
        isEmailVerified: typeof value.isEmailVerified === 'boolean' ? value.isEmailVerified : null,
        isAdmin: typeof value.isAdmin === 'boolean' ? value.isAdmin : null,
        created_at: trimString('created_at'),
        updated_at: trimString('updated_at'),
    };
}

export async function fetchProfile(signal) {
    const controller = new AbortController();
    let didTimeout = false;
    const timeoutId = window.setTimeout(() => {
        didTimeout = true;
        controller.abort();
    }, PROFILE_TIMEOUT_MS);
    const forwardAbort = () => controller.abort(signal.reason);

    if (signal?.aborted) {
        forwardAbort();
    } else {
        signal?.addEventListener('abort', forwardAbort, { once: true });
    }

    try {
        const response = await fetch(PROFILE_API_URL, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            signal: controller.signal,
        });

        let payload;
        try {
            payload = await response.json();
        } catch (parseError) {
            if (didTimeout) {
                throw new ProfileRequestError('timeout', 'The request took too long. Check your connection, then try again.');
            }
            if (controller.signal.aborted) {
                throw parseError;
            }
            if (response.ok) {
                throw new ProfileRequestError('invalid-response', 'The profile response was invalid.');
            }
        }

        if (!response.ok) {
            if (response.status === 401) {
                throw new ProfileRequestError('unauthorized', 'Your session has expired or cannot access this profile.');
            }
            if (response.status === 403) {
                throw new ProfileRequestError('forbidden', 'You don’t have permission to view this profile.');
            }
            if (response.status === 404) {
                throw new ProfileRequestError('not-found', 'This profile could not be found.');
            }
            if (response.status >= 500) {
                throw new ProfileRequestError('server', 'The profile service is temporarily unavailable.');
            }
            throw new ProfileRequestError('http', 'We could not load this profile.');
        }

        if (!isRecord(payload) || !isRecord(payload.profile)) {
            throw new ProfileRequestError('invalid-response', 'The profile response was invalid.');
        }

        return normalizeProfile(payload.profile);
    } catch (error) {
        if (error instanceof ProfileRequestError) throw error;
        if (didTimeout) {
            throw new ProfileRequestError('timeout', 'The request took too long. Check your connection, then try again.');
        }
        if (signal?.aborted) throw error;
        throw new ProfileRequestError('network', 'We couldn’t load your profile. Check your connection, then try again.');
    } finally {
        window.clearTimeout(timeoutId);
        signal?.removeEventListener('abort', forwardAbort);
    }
}

function formatPhone(value) {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 11 && digits.startsWith('1')) {
        return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    }
    if (digits.length === 10) {
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    return value;
}

function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';

    return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(date);
}

function formatProfileField(field, profile) {
    return field.formatter(profile[field.key], profile);
}

function getProfileFields(fields, profile) {
    return fields
        .filter((field) => field.visible(profile))
        .map((field) => ({
            ...field,
            formatted: formatProfileField(field, profile),
        }))
        .filter((field) => field.formatted?.text);
}

function getInitials(name) {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0].toLocaleUpperCase())
        .join('') || '?';
}

function ProfileFieldList({ fields, profile, emptyMessage }) {
    const rows = getProfileFields(fields, profile);

    if (rows.length === 0) {
        return <p className="profile-page__empty">{emptyMessage}</p>;
    }

    return (
        <dl className="profile-fields">
            {rows.map((field) => (
                <div className="profile-fields__row" key={field.key}>
                    <dt>
                        <i className={field.icon} aria-hidden="true" />
                        <span>{field.label}</span>
                    </dt>
                    <dd>
                        {field.formatted.href ? (
                            <a
                                href={field.formatted.href}
                                target={field.formatted.external ? '_blank' : undefined}
                                rel={field.formatted.external ? 'noopener noreferrer' : undefined}
                            >
                                {field.formatted.text}
                            </a>
                        ) : field.formatted.text}
                        {field.key === 'email' && (
                            <span className={`profile-status profile-status--email ${profile.isEmailVerified ? 'is-verified' : 'is-unverified'}`}>
                                <i
                                    className={profile.isEmailVerified ? 'pi pi-check' : 'pi pi-exclamation-triangle'}
                                    aria-hidden="true"
                                />
                                {profile.isEmailVerified ? 'Verified' : 'Not verified'}
                            </span>
                        )}
                    </dd>
                </div>
            ))}
        </dl>
    );
}

function ProfileSkeleton() {
    return (
        <div className="profile-skeleton" aria-hidden="true">
            <div className="profile-skeleton__header">
                <span className="profile-skeleton__avatar" />
                <div>
                    <span className="profile-skeleton__line profile-skeleton__line--name" />
                    <span className="profile-skeleton__line" />
                    <span className="profile-skeleton__line profile-skeleton__line--short" />
                </div>
            </div>
            <div className="profile-skeleton__grid">
                <span className="profile-skeleton__panel" />
                <span className="profile-skeleton__panel" />
            </div>
        </div>
    );
}

function errorMessage(error) {
    switch (error.code) {
        case 'unauthorized':
            return 'Your session may have expired. Sign in again, then return to your profile.';
        case 'forbidden':
            return 'You don’t have permission to view this profile.';
        case 'not-found':
            return 'We couldn’t find this profile.';
        case 'server':
            return 'The profile service is temporarily unavailable. Please try again.';
        case 'timeout':
            return 'The request took too long. Check your connection, then try again.';
        default:
            return 'We couldn’t load your profile. Check your connection, then try again.';
    }
}

function Profile() {
    const { props } = usePage();
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    const [attempt, setAttempt] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');
    const [sendingVerification, setSendingVerification] = useState(false);
    const [verificationError, setVerificationError] = useState('');
    const [verificationToast, setVerificationToast] = useState('');
    const [resendCountdown, setResendCountdown] = useState(0);
    const tabRefs = useRef([]);

    useEffect(() => {
        const controller = new AbortController();
        setProfile(null);
        setError(null);
        fetchProfile(controller.signal)
            .then(setProfile)
            .catch((requestError) => {
                if (!controller.signal.aborted) setError(requestError);
            });

        return () => controller.abort();
    }, [attempt]);

    useEffect(() => {
        if (resendCountdown <= 0) return undefined;

        const timer = window.setTimeout(
            () => setResendCountdown((seconds) => Math.max(0, seconds - 1)),
            1000,
        );

        return () => window.clearTimeout(timer);
    }, [resendCountdown]);

    useEffect(() => {
        if (props.flash?.status === 'verification-link-sent') {
            setVerificationToast('Verification email sent. Check your inbox.');
            setResendCountdown(60);
        }
    }, [props.flash?.status]);

    const sendVerificationEmail = async () => {
        setSendingVerification(true);
        setVerificationError('');
        setVerificationToast('');

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            const response = await fetch('/email/verification-notification', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    Accept: 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
            });

            let result = null;
            try {
                result = await response.json();
            } catch (parseError) {
                if (response.ok) {
                    throw new Error('The server returned an invalid response. Please try again.');
                }
            }

            if (response.status === 429) {
                throw new Error('A verification email was sent recently. Please wait a minute before trying again.');
            }
            if (response.status === 419) {
                throw new Error('Your session expired. Refresh the page, then try again.');
            }
            if (!response.ok) {
                throw new Error('We couldn’t send the verification email. Please try again.');
            }
            if (result?.status === 'already-verified') {
                setVerificationToast('Your email is already verified.');
                setAttempt((current) => current + 1);
                return;
            }
            if (result?.status !== 'verification-link-sent') {
                throw new Error('The server could not confirm the verification email. Please try again.');
            }

            setVerificationToast('Verification email sent. Check your inbox.');
            setResendCountdown(60);
        } catch (requestError) {
            setVerificationError(requestError.message || 'We couldn’t send the verification email. Please try again.');
        } finally {
            setSendingVerification(false);
        }
    };

    const loading = !profile && !error;
    const headerFields = profile ? getProfileFields(PROFILE_FIELDS.header, profile) : [];
    const headerName = headerFields.find((field) => field.key === 'name')?.formatted.text;
    const headerRole = headerFields.find((field) => field.key === 'isAdmin')?.formatted.text;
    const emailStatus = headerFields.find((field) => field.key === 'isEmailVerified')?.formatted;
    const displayName = headerName || 'Admin account';

    const selectTab = (nextIndex) => {
        const nextTab = nextIndex === 0 ? 'overview' : 'activity';
        setActiveTab(nextTab);
        tabRefs.current[nextIndex]?.focus();
    };

    const handleTabKeyDown = (event, index) => {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            selectTab((index + 1) % 2);
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            selectTab((index + 1) % 2);
        } else if (event.key === 'Home') {
            event.preventDefault();
            selectTab(0);
        } else if (event.key === 'End') {
            event.preventDefault();
            selectTab(1);
        }
    };

    return (
        <>
            <Head title="Profile" />
            <section className="profile-page" aria-labelledby="profile-page-heading" aria-busy={loading}>
                <header className="profile-page__page-heading">
                    <div>
                        <h1 id="profile-page-heading">Profile</h1>
                        <p>Your admin account details.</p>
                    </div>
                </header>

                <section className="profile-page__data" aria-label="Profile details" aria-live="polite" aria-busy={loading}>
                    {loading && <ProfileSkeleton />}

                    {error && (
                        <div className="profile-message profile-message--error" role="alert">
                            <h2>Profile unavailable</h2>
                            <p>{errorMessage(error)}</p>
                            {error.code === 'unauthorized' && (
                                <a className="profile-button profile-button--secondary" href="/login">Sign in</a>
                            )}
                            <button
                                className="profile-button profile-button--primary"
                                type="button"
                                onClick={() => setAttempt((current) => current + 1)}
                            >
                                Try again
                            </button>
                        </div>
                    )}

                    {profile && (
                        <>
                            {!profile.isEmailVerified && (
                                <div className="profile-verification-alert" role="alert">
                                    <i className="pi pi-exclamation-triangle" aria-hidden="true" />
                                    <div className="profile-verification-alert__content">
                                        <p>Your email isn't verified. Verify it to receive notifications and recover your account.</p>
                                        <button
                                            className="profile-button profile-button--primary"
                                            type="button"
                                            disabled={sendingVerification || resendCountdown > 0}
                                            onClick={sendVerificationEmail}
                                        >
                                            {sendingVerification
                                                ? 'Sending…'
                                                : resendCountdown > 0
                                                    ? `Resend in ${resendCountdown}s`
                                                    : 'Send verification email'}
                                        </button>
                                        <p className="profile-verification-alert__feedback" aria-live="polite">
                                            {verificationToast}
                                        </p>
                                        {verificationError && (
                                            <p className="profile-verification-alert__error" role="alert">
                                                {verificationError}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}
                            <section className="profile-card profile-card--header" aria-labelledby="profile-name">
                                <div
                                    className="profile-avatar"
                                    role="img"
                                    aria-label={`${displayName} initials`}
                                >
                                    {getInitials(displayName)}
                                </div>
                                <div className="profile-card__identity">
                                    <h2 id="profile-name">{displayName}</h2>
                                    {headerRole && <p>{headerRole}</p>}
                                    {emailStatus && (
                                        <div className="profile-status-list">
                                            <span className={`profile-status ${profile.isEmailVerified ? 'is-verified' : 'is-unverified'}`}>
                                                <i className={emailStatus.icon} aria-hidden="true" />
                                                {emailStatus.text}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </section>

                            <div className="profile-tabs">
                                <div className="profile-tabs__list" role="tablist" aria-label="Profile sections">
                                    {[
                                        { id: 'overview', label: 'Overview' },
                                        { id: 'activity', label: 'Activity' },
                                    ].map((tab, index) => {
                                        const selected = activeTab === tab.id;
                                        return (
                                            <button
                                                key={tab.id}
                                                ref={(element) => { tabRefs.current[index] = element; }}
                                                className="profile-tabs__tab"
                                                id={`profile-tab-${tab.id}`}
                                                type="button"
                                                role="tab"
                                                aria-selected={selected}
                                                aria-controls={`profile-panel-${tab.id}`}
                                                tabIndex={selected ? 0 : -1}
                                                onClick={() => setActiveTab(tab.id)}
                                                onKeyDown={(event) => handleTabKeyDown(event, index)}
                                            >
                                                {tab.label}
                                            </button>
                                        );
                                    })}
                                </div>

                                <section
                                    className="profile-tab-panel"
                                    id="profile-panel-overview"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab-overview"
                                    tabIndex={0}
                                    hidden={activeTab !== 'overview'}
                                >
                                    <div className="profile-grid">
                                        <section className="profile-card" aria-labelledby="profile-about-heading">
                                            <h2 id="profile-about-heading">About</h2>
                                            <p className="profile-page__empty">
                                                About information isn’t included for this admin account.
                                            </p>
                                        </section>

                                        <section className="profile-card" aria-labelledby="profile-contact-heading">
                                            <h2 id="profile-contact-heading">Contact</h2>
                                            <ProfileFieldList
                                                fields={PROFILE_FIELDS.contact}
                                                profile={profile}
                                                emptyMessage="No contact information is available."
                                            />
                                        </section>

                                        <section className="profile-card" aria-labelledby="profile-details-heading">
                                            <h2 id="profile-details-heading">Details</h2>
                                            <ProfileFieldList
                                                fields={PROFILE_FIELDS.details}
                                                profile={profile}
                                                emptyMessage="No additional details are available."
                                            />
                                        </section>
                                    </div>
                                </section>
                                <section
                                    className="profile-tab-panel"
                                    id="profile-panel-activity"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab-activity"
                                    tabIndex={0}
                                    hidden={activeTab !== 'activity'}
                                >
                                    <section className="profile-card profile-empty-activity" aria-labelledby="profile-activity-heading">
                                        <h2 id="profile-activity-heading">Activity</h2>
                                        <p>No activity yet. Published work will appear here.</p>
                                    </section>
                                </section>
                            </div>
                        </>
                    )}
                </section>
            </section>
        </>
    );
}

Profile.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Profile;
