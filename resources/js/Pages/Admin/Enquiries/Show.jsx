import { useEffect, useRef, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { EnquiryStatusBadge, EnquiryStatusButton, formatDate, formatServices } from './components';
import { updateEnquiryStatus } from './status';
import './enquiries.css';

function Detail({ label, children }) {
    if (children === null || children === undefined || children === '') return null;

    return (
        <div className="enquiry-detail__row">
            <dt>{label}</dt>
            <dd>{children}</dd>
        </div>
    );
}

export default function EnquiryShow({ enquiry, backUrl }) {
    const [current, setCurrent] = useState(enquiry);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState('');
    const [toast, setToast] = useState(null);
    const toastTimer = useRef(null);

    useEffect(() => () => window.clearTimeout(toastTimer.current), []);

    const changeStatus = async (status, canUndo = true) => {
        const previous = current;
        const isAddressed = status === 'addressed';
        setBusy(true);
        setError('');
        setCurrent((value) => ({ ...value, isAddressed }));

        try {
            const updated = await updateEnquiryStatus(current.id, status);
            setCurrent((value) => ({ ...value, ...updated }));
            window.clearTimeout(toastTimer.current);
            setToast({
                message: isAddressed ? 'Marked as addressed.' : 'Enquiry reopened.',
                canUndo: canUndo && isAddressed,
            });
            toastTimer.current = window.setTimeout(() => setToast(null), 6000);
        } catch (requestError) {
            setCurrent(previous);
            setError(requestError.message || 'We couldn’t update this enquiry. Please try again.');
        } finally {
            setBusy(false);
        }
    };

    const services = formatServices(current.servicesSeeked);

    return (
        <AdminLayout>
            <Head title={`Enquiry from ${current.name}`} />
            <section className="enquiries-page enquiry-detail" aria-labelledby="enquiry-heading">
                <Link className="enquiries-back-link" href={backUrl}>
                    <i className="pi pi-arrow-left" aria-hidden="true" />
                    Back to website enquiries
                </Link>

                <header className="enquiries-page__header">
                    <div>
                        <h1 id="enquiry-heading">{current.name}</h1>
                        <p>Consultation request {current.consultationID ? `· ${current.consultationID}` : ''}</p>
                    </div>
                    <div className="enquiry-detail__actions">
                        <EnquiryStatusBadge isAddressed={current.isAddressed} />
                        <EnquiryStatusButton
                            isAddressed={current.isAddressed}
                            disabled={busy}
                            onClick={() => changeStatus(current.isAddressed ? 'pending' : 'addressed')}
                        />
                    </div>
                </header>

                {error && <p className="enquiries-inline-error" role="alert">{error}</p>}

                <section className="enquiry-detail__card" aria-labelledby="contact-heading">
                    <h2 id="contact-heading">Contact</h2>
                    <dl className="enquiry-detail__list">
                        <Detail label="Email">
                            <a href={`mailto:${encodeURIComponent(current.email).replace(/%40/gi, '@')}`}>{current.email}</a>
                        </Detail>
                        <Detail label="Phone">
                            <a href={`tel:${current.phonenumber.replace(/[^\d+]/g, '')}`}>{current.phonenumber}</a>
                        </Detail>
                        <Detail label="Received">{formatDate(current.createdAt, true)}</Detail>
                    </dl>
                </section>

                <section className="enquiry-detail__card" aria-labelledby="request-heading">
                    <h2 id="request-heading">Consultation details</h2>
                    <dl className="enquiry-detail__list">
                        <Detail label="Services requested">{services}</Detail>
                        <Detail label="Location">{current.location}</Detail>
                        <Detail label="Requested consultation">{current.consultationDate}{current.timezone ? ` (${current.timezone})` : ''}</Detail>
                        <Detail label="Expected due date">{formatDate(current.expectedDueTime)}</Detail>
                        <Detail label="Preferred support start">{formatDate(current.preferredServicesStart)}</Detail>
                        <Detail label="Duration of support">{current.durationOfSupport}</Detail>
                        <Detail label="Nights per week">{current.noNightsPerWeek}</Detail>
                        <Detail label="How they heard about us">{current.howHeard}</Detail>
                    </dl>
                </section>

                {current.isAddressed && (
                    <section className="enquiry-detail__card" aria-labelledby="addressed-heading">
                        <h2 id="addressed-heading">Addressed</h2>
                        <dl className="enquiry-detail__list">
                            <Detail label="Addressed by">{current.addressedBy || 'Admin account'}</Detail>
                            <Detail label="Addressed at">{formatDate(current.addressedAt, true)}</Detail>
                        </dl>
                    </section>
                )}

                {toast && (
                    <div className="enquiries-toast" role="status" aria-live="polite">
                        <span>{toast.message}</span>
                        {toast.canUndo && (
                            <button type="button" onClick={() => {
                                window.clearTimeout(toastTimer.current);
                                setToast(null);
                                changeStatus('pending', false);
                            }}>
                                Undo
                            </button>
                        )}
                    </div>
                )}
            </section>
        </AdminLayout>
    );
}
