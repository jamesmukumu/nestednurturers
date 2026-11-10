import { useEffect, useRef, useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    EnquiryStatusBadge,
    EnquiryStatusButton,
    formatDate,
    formatServices,
} from './components';
import { updateEnquiryStatus } from './status';
import './enquiries.css';

function EnquirySkeleton() {
    return (
        <div className="enquiries-skeleton" aria-label="Loading enquiries">
            {[0, 1, 2, 3].map((item) => (
                <span key={item} />
            ))}
        </div>
    );
}

function cleanPageLabel(label) {
    return String(label).replace(/&laquo;|&raquo;/g, '').trim();
}

function buildQuery(filters, page = 1) {
    const query = {
        status: filters.status,
        q: filters.q || undefined,
        sort: filters.sort,
        per_page: filters.per_page,
        page,
    };

    return Object.fromEntries(Object.entries(query).filter(([, value]) => value !== undefined));
}

export default function EnquiriesIndex({ enquiries, pagination, filters }) {
    const [search, setSearch] = useState(filters.q || '');
    const [refreshing, setRefreshing] = useState(false);
    const [loadError, setLoadError] = useState('');
    const [statusOverrides, setStatusOverrides] = useState({});
    const [busyIds, setBusyIds] = useState([]);
    const [statusError, setStatusError] = useState('');
    const [toast, setToast] = useState(null);
    const toastTimer = useRef(null);

    useEffect(() => {
        setSearch(filters.q || '');
    }, [filters.q]);

    useEffect(() => () => window.clearTimeout(toastTimer.current), []);

    useEffect(() => {
        const removeExceptionListener = router.on('exception', () => {
            setLoadError('We couldn’t load enquiries. Check your connection, then try again.');
            return false;
        });

        return removeExceptionListener;
    }, []);

    const visit = (nextFilters, page = 1, replace = false) => {
        setRefreshing(true);
        setLoadError('');
        router.get('/enquiries', buildQuery(nextFilters, page), {
            preserveState: true,
            preserveScroll: true,
            replace,
            onFinish: () => setRefreshing(false),
        });
    };

    useEffect(() => {
        if (search === (filters.q || '')) return undefined;

        const timer = window.setTimeout(() => {
            visit({ ...filters, q: search }, 1, true);
        }, 350);

        return () => window.clearTimeout(timer);
    }, [search, filters.status, filters.q, filters.sort, filters.per_page]);

    const showToast = (message, undoEnquiry = null) => {
        window.clearTimeout(toastTimer.current);
        setToast({ message, undoEnquiry });
        toastTimer.current = window.setTimeout(() => setToast(null), 6000);
    };

    const changeStatus = async (enquiry, status, canUndo = true) => {
        const previousStatus = Boolean(statusOverrides[enquiry.id] ?? enquiry.isAddressed);
        const nextIsAddressed = status === 'addressed';
        setStatusError('');
        setStatusOverrides((current) => ({ ...current, [enquiry.id]: nextIsAddressed }));
        setBusyIds((current) => [...new Set([...current, enquiry.id])]);

        try {
            await updateEnquiryStatus(enquiry.id, status);
            showToast(
                nextIsAddressed ? 'Marked as addressed.' : 'Enquiry reopened.',
                canUndo && nextIsAddressed ? enquiry : null,
            );
            router.reload({
                only: ['enquiries', 'pagination', 'filters', 'pendingEnquiriesCount'],
                preserveScroll: true,
                onSuccess: () => setStatusOverrides({}),
            });
        } catch (requestError) {
            setStatusOverrides((current) => ({ ...current, [enquiry.id]: previousStatus }));
            setStatusError(requestError.message || 'We couldn’t update this enquiry. Please try again.');
        } finally {
            setBusyIds((current) => current.filter((id) => id !== enquiry.id));
        }
    };

    const rows = Array.isArray(enquiries)
        ? enquiries
            .filter((enquiry) => !(filters.status === 'pending' && statusOverrides[enquiry.id] === true))
            .map((enquiry) => ({
                ...enquiry,
                isAddressed: statusOverrides[enquiry.id] ?? enquiry.isAddressed,
            }))
        : [];
    const hasFilters = filters.status !== 'all' || Boolean(filters.q);
    const emptyMessage = hasFilters
        ? 'No enquiries match your filters.'
        : 'No enquiries yet. New website submissions will appear here.';
    const listQuery = new URLSearchParams(buildQuery(filters, pagination.currentPage)).toString();
    const detailHref = (id) => `/enquiries/${id}?${listQuery}`;

    const retry = () => router.reload({
        only: ['enquiries', 'pagination', 'filters', 'pendingEnquiriesCount'],
        preserveScroll: true,
        onStart: () => {
            setLoadError('');
            setRefreshing(true);
        },
        onFinish: () => setRefreshing(false),
    });

    const openEnquiry = (event) => {
        if (event.originalEvent.target.closest('a, button')) return;
        router.visit(detailHref(event.data.id));
    };

    const contactBody = (enquiry) => (
        <div className="enquiries-table__contact">
            <a href={`mailto:${encodeURIComponent(enquiry.email).replace(/%40/gi, '@')}`}>
                <i className="pi pi-envelope" aria-hidden="true" />
                {enquiry.email}
            </a>
            <a href={`tel:${enquiry.phonenumber.replace(/[^\d+]/g, '')}`}>
                <i className="pi pi-phone" aria-hidden="true" />
                {enquiry.phonenumber}
            </a>
        </div>
    );

    const nameBody = (enquiry) => (
        <Link className="enquiries-table__name" href={detailHref(enquiry.id)}>
            <span>{enquiry.name}</span>
            <small>Consultation #{enquiry.consultationID}</small>
        </Link>
    );

    const actionBody = (enquiry) => (
        <EnquiryStatusButton
            isAddressed={enquiry.isAddressed}
            disabled={busyIds.includes(enquiry.id)}
            onClick={() => changeStatus(enquiry, enquiry.isAddressed ? 'pending' : 'addressed')}
        />
    );

    return (
        <AdminLayout>
            <Head title="Website consultations" />
            <section className="enquiries-page" aria-labelledby="enquiries-heading" aria-busy={refreshing}>
                <header className="enquiries-page__header">
                    <div>
                        <h1 id="enquiries-heading">Website consultations</h1>
                        <p>Review consultation requests and track follow-up.</p>
                    </div>
                </header>

                <section className="enquiries-panel" aria-label="Website enquiry list">
                    <div className="enquiries-toolbar">
                        <div className="enquiries-filters" role="group" aria-label="Filter enquiries by status">
                            {['all', 'pending', 'addressed'].map((status) => (
                                <button
                                    key={status}
                                    type="button"
                                    className={`enquiries-filter${filters.status === status ? ' is-selected' : ''}`}
                                    aria-pressed={filters.status === status}
                                    onClick={() => visit({ ...filters, status, q: search }, 1)}
                                >
                                    {status[0].toUpperCase() + status.slice(1)}
                                </button>
                            ))}
                        </div>
                        <label className="enquiries-search">
                            <i className="pi pi-search" aria-hidden="true" />
                            <span className="sr-only">Search enquiries</span>
                            <input
                                type="search"
                                value={search}
                                maxLength={100}
                                placeholder="Search name, email or request"
                                onChange={(event) => setSearch(event.target.value)}
                            />
                        </label>
                        <label className="enquiries-select">
                            <span>Sort by</span>
                            <select
                                value={filters.sort}
                                onChange={(event) => visit({ ...filters, sort: event.target.value, q: search }, 1)}
                            >
                                <option value="-created_at">Newest first</option>
                                <option value="created_at">Oldest first</option>
                            </select>
                        </label>
                    </div>

                    {loadError && (
                        <div className="enquiries-error" role="alert">
                            <p>{loadError}</p>
                            <button type="button" className="enquiries-button enquiries-button--secondary" onClick={retry}>
                                Try again
                            </button>
                        </div>
                    )}
                    {statusError && <p className="enquiries-inline-error" role="alert">{statusError}</p>}

                    {refreshing && rows.length > 0 && (
                        <p className="enquiries-refreshing" role="status">Updating enquiries…</p>
                    )}

                    {!Array.isArray(enquiries) && <EnquirySkeleton />}

                    {Array.isArray(enquiries) && rows.length === 0 && !refreshing && (
                        <div className="enquiries-empty">
                            <i className="pi pi-inbox" aria-hidden="true" />
                            <p>{emptyMessage}</p>
                            {hasFilters && (
                                <button
                                    type="button"
                                    className="enquiries-button enquiries-button--secondary"
                                    onClick={() => {
                                        setSearch('');
                                        visit({ ...filters, status: 'all', q: '' }, 1);
                                    }}
                                >
                                    Clear filters
                                </button>
                            )}
                        </div>
                    )}

                    {rows.length > 0 && (
                        <>
                            <DataTable
                                value={rows}
                                dataKey="id"
                                lazy
                                rowHover
                                stripedRows
                                responsiveLayout="stack"
                                breakpoint="640px"
                                onRowClick={openEnquiry}
                                sortField="created_at"
                                sortOrder={filters.sort === 'created_at' ? 1 : -1}
                                onSort={(event) => visit({
                                    ...filters,
                                    sort: event.sortOrder === 1 ? 'created_at' : '-created_at',
                                    q: search,
                                }, 1)}
                                emptyMessage={emptyMessage}
                                className={`enquiries-datatable${refreshing ? ' is-refreshing' : ''}`}
                            >
                                <Column header="Name" body={nameBody} />
                                <Column header="Contact" body={contactBody} />
                                <Column
                                    field="servicesSeeked"
                                    header="Services requested"
                                    body={(enquiry) => formatServices(enquiry.servicesSeeked) || 'Consultation request'}
                                />
                                <Column
                                    field="location"
                                    header="Location"
                                    body={(enquiry) => enquiry.location || '—'}
                                />
                                <Column
                                    field="created_at"
                                    sortField="created_at"
                                    sortable
                                    header="Received"
                                    body={(enquiry) => formatDate(enquiry.createdAt)}
                                />
                                <Column
                                    header="Status"
                                    body={(enquiry) => <EnquiryStatusBadge isAddressed={enquiry.isAddressed} />}
                                />
                                <Column header="Action" body={actionBody} />
                            </DataTable>

                            <div className="enquiries-pagination">
                                <p>
                                    Showing {pagination.from ?? 0}-{pagination.to ?? 0} of {pagination.total}
                                </p>
                                <label className="enquiries-select">
                                    <span>Per page</span>
                                    <select
                                        value={filters.per_page}
                                        onChange={(event) => visit({ ...filters, per_page: Number(event.target.value), q: search }, 1)}
                                    >
                                        {[10, 25, 50].map((count) => (
                                            <option key={count} value={count}>{count}</option>
                                        ))}
                                    </select>
                                </label>
                                <nav aria-label="Pagination">
                                    {pagination.links.map((link, index) => {
                                        const label = cleanPageLabel(link.label);
                                        const isEllipsis = label === '...';

                                        if (isEllipsis) {
                                            return <span className="enquiries-pagination__ellipsis" key={`${label}-${index}`} aria-hidden="true">…</span>;
                                        }

                                        return (
                                            <button
                                                key={`${label}-${index}`}
                                                type="button"
                                                className={`enquiries-pagination__button${label === String(pagination.currentPage) ? ' is-current' : ''}`}
                                                aria-label={/^\d+$/.test(label) ? `Page ${label}` : label}
                                                aria-current={label === String(pagination.currentPage) ? 'page' : undefined}
                                                disabled={!link.url}
                                                onClick={() => link.url && router.visit(link.url, { preserveState: true, preserveScroll: true })}
                                            >
                                                {label}
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>
                        </>
                    )}
                </section>

                {toast && (
                    <div className="enquiries-toast" role="status" aria-live="polite">
                        <span>{toast.message}</span>
                        {toast.undoEnquiry && (
                            <button
                                type="button"
                                onClick={() => {
                                    window.clearTimeout(toastTimer.current);
                                    setToast(null);
                                    changeStatus(toast.undoEnquiry, 'pending', false);
                                }}
                            >
                                Undo
                            </button>
                        )}
                    </div>
                )}
            </section>
        </AdminLayout>
    );
}
