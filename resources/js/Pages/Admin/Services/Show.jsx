import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import AdminLayout from '@/Layouts/AdminLayout';
import Button from '@/Components/Button';
import './services.css';

function ShowService({ service }) {
    return <><Head title={service.title} /><section className="admin-page services-show"><header className="admin-page__header services-show__header"><div><h1>{service.title}</h1><p>{service.slug}</p></div><div className="services-show__actions"><Tag value={service.published ? 'Published' : 'Draft'} severity={service.published ? 'success' : 'warning'} /><Button href={`/dashboard/services/${service.id}/edit`} leftIcon={<i className="pi pi-pencil" aria-hidden="true" />}>Edit service</Button></div></header>{service.image_url && <img className="services-show__image" src={service.image_url} alt="" />}<Card className="admin-page__card services-show__card"><h2 className="admin-section-title">Meta overview</h2><div dangerouslySetInnerHTML={{ __html: service.meta_overview }} /><hr /><h2 className="admin-section-title">Meta description</h2><div dangerouslySetInnerHTML={{ __html: service.meta_description }} /></Card></section></>;
}

ShowService.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default ShowService;
