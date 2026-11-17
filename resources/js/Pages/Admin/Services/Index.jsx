import { useEffect, useRef, useState } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { format, parseISO } from 'date-fns';
import AdminLayout from '@/Layouts/AdminLayout';
import Button from '@/Components/Button';
import './services.css';

function ServicesList({ services, filters }) {
    const toast = useRef(null);
    const { props } = usePage();
    const [search, setSearch] = useState(filters.search || '');

    useEffect(() => { setSearch(filters.search || ''); }, [filters.search]);
    useEffect(() => { if (props.flash?.success) toast.current?.show({ severity: 'success', summary: 'Success', detail: props.flash.success }); }, [props.flash?.success]);
    useEffect(() => {
        if (search === (filters.search || '')) return undefined;
        const timer = window.setTimeout(() => router.get('/dashboard/services', { search: search || undefined }, { preserveState: true, preserveScroll: true, replace: true }), 300);
        return () => window.clearTimeout(timer);
    }, [search, filters.search]);

    const changePage = (event) => router.get('/dashboard/services', { search: search || undefined, page: event.page + 1 }, { preserveState: true, preserveScroll: true });
    const deleteService = (service) => confirmDialog({
        header: 'Delete service?', message: `“${service.title}” will be permanently deleted.`, icon: 'pi pi-exclamation-triangle', acceptLabel: 'Delete', rejectLabel: 'Cancel', acceptClassName: 'app-button app-button--danger app-button--md', rejectClassName: 'app-button app-button--secondary app-button--md',
        accept: () => router.delete(`/dashboard/services/${service.id}`, {
            onError: () => toast.current?.show({ severity: 'error', summary: 'Unable to delete service', detail: 'Please try again.' }),
            onHttpException: () => toast.current?.show({ severity: 'error', summary: 'Unable to delete service', detail: 'The server could not delete this service. Please try again.' }),
            onException: () => toast.current?.show({ severity: 'error', summary: 'Unable to delete service', detail: 'A network error interrupted the request. Please try again.' }),
        }),
    });

    const imageBody = (service) => service.image_url ? <img className="services-list__image" src={service.image_url} alt="" /> : <span className="services-list__image-placeholder" aria-label="No image"><i className="pi pi-image" aria-hidden="true" /></span>;
    const statusBody = (service) => <Tag value={service.published ? 'Published' : 'Draft'} severity={service.published ? 'success' : 'warning'} />;
    const dateBody = (service) => service.created_at ? format(parseISO(service.created_at), 'MMM d, yyyy') : '—';
    const actionsBody = (service) => <div className="services-list__actions"><Button href={`/dashboard/services/${service.id}`} variant="ghost" size="sm" iconOnly aria-label={`View ${service.title}`}><i className="pi pi-eye" aria-hidden="true" /></Button><Button href={`/dashboard/services/${service.id}/edit`} variant="ghost" size="sm" iconOnly aria-label={`Edit ${service.title}`}><i className="pi pi-pencil" aria-hidden="true" /></Button><Button type="button" variant="danger" size="sm" iconOnly aria-label={`Delete ${service.title}`} onClick={() => deleteService(service)}><i className="pi pi-trash" aria-hidden="true" /></Button></div>;

    return <><Head title="Services" /><Toast ref={toast} position="top-right" /><ConfirmDialog /><section className="admin-page services-list"><header className="admin-page__header services-list__header"><div><h1>Services</h1><p>Create, edit, and manage your services.</p></div><Button href="/dashboard/services/create" leftIcon={<i className="pi pi-plus" aria-hidden="true" />}>Create Service</Button></header><div className="services-list__toolbar"><label className="services-list__search"><i className="pi pi-search" aria-hidden="true" /><InputText value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search services" aria-label="Search services" /></label></div><DataTable value={services.data} dataKey="id" lazy paginator={services.total > services.per_page} first={(services.current_page - 1) * services.per_page} rows={services.per_page} totalRecords={services.total} onPage={changePage} responsiveLayout="scroll" emptyMessage="No services found." className="services-list__table"><Column header="Image" body={imageBody} style={{ width: '7rem' }} /><Column field="title" header="Title" /><Column header="Status" body={statusBody} style={{ width: '8rem' }} /><Column header="Date" body={dateBody} style={{ width: '10rem' }} /><Column header="Actions" body={actionsBody} style={{ width: '11rem' }} /></DataTable></section></>;
}

ServicesList.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default ServicesList;
