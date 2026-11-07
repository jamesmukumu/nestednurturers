import { Head, Link } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
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
                    <Link href="/dashboard">
                        <Button label="Back to dashboard" icon="pi pi-arrow-left" />
                    </Link>
                </Card>
            </section>
        </>
    );
}

NotFound.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default NotFound;
