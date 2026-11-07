import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';
import AdminLayout from '../../Layouts/AdminLayout';

function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <section className="admin-page">
                <header className="admin-page__header">
                    <h1>Dashboard</h1>
                    <p>Your admin workspace is ready.</p>
                </header>
                <Card className="admin-page__card">
                    <p>Dashboard overview and tools will appear here.</p>
                </Card>
            </section>
        </>
    );
}

Dashboard.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;
