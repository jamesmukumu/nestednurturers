import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';
import AdminLayout from '../../Layouts/AdminLayout';

function Settings() {
    return (
        <>
            <Head title="Settings" />
            <section className="admin-page">
                <header className="admin-page__header">
                    <h1>Settings</h1>
                    <p>Workspace settings will be added here.</p>
                </header>
                <Card className="admin-page__card">
                    <p>This page is ready for future settings features.</p>
                </Card>
            </section>
        </>
    );
}

Settings.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Settings;
