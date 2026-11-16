import { Head } from "@inertiajs/react";
import Button from "@/Components/Button";
import AdminLayout from "../../Layouts/AdminLayout";

function NotFound() {
    return (
        <>
            <Head title="Page not found" />
            <section className="admin-page">
                <header className="admin-page__header">
                    <span className="admin-eyebrow">A SMALL DETOUR</span>
                    <h1>Page not found</h1>
                    <p>Let’s get you back to familiar ground.</p>
                </header>
                <div className="admin-state-card">
                    <i className="pi pi-compass" aria-hidden="true" />
                    <h2>A fresh start is one click away.</h2>
                    <p>
                        This page may have moved, or the address may be
                        incomplete. Your workspace is right where you left it.
                    </p>
                    <Button
                        href="/dashboard"
                        variant="secondary"
                        leftIcon={
                            <i
                                className="pi pi-arrow-left"
                                aria-hidden="true"
                            />
                        }
                    >
                        Back to dashboard
                    </Button>
                </div>
            </section>
        </>
    );
}

NotFound.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default NotFound;
