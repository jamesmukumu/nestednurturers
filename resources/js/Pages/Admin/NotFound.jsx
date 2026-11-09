import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';
import Button from '@/Components/Button';
import AdminLayout from '../../Layouts/AdminLayout';

function NotFound() {
    return (
        <>
            <Head title="Page not found" />
            <section className="admin-page">
                <header className="admin-page__header">
                    <h1>Page not found</h1>
                    <p>This dashboard page does not exist.</p>
                </header>
                <Card className="admin-page__card">
                    <Button href="/dashboard" variant="secondary" leftIcon={<i className="pi pi-arrow-left" aria-hidden="true" />}>
                        Back to dashboard
                    </Button>
                </Card>
            </section>
        </>
    );
}

NotFound.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default NotFound;
