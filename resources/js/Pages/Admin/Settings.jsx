import { Head } from "@inertiajs/react";
import Button from "@/Components/Button";
import AdminLayout from "../../Layouts/AdminLayout";

function Settings() {
    return (
        <>
            <Head title="Settings" />
            <section className="admin-page">
                <header className="admin-page__header">
                    <span className="admin-eyebrow">YOUR WORKSPACE</span>
                    <h1>Settings</h1>
                    <p>A little space to make things your own.</p>
                </header>
                <div className="admin-state-card">
                    <i className="pi pi-sliders-h" aria-hidden="true" />
                    <h2>Room for what comes next.</h2>
                    <p>
                        Workspace settings will appear here as they become
                        available. In the meantime, you can find your account
                        details in your profile.
                    </p>
                    <Button
                        href="/dashboard/profile"
                        variant="secondary"
                        rightIcon={
                            <i
                                className="pi pi-arrow-up-right"
                                aria-hidden="true"
                            />
                        }
                    >
                        View your profile
                    </Button>
                </div>
            </section>
        </>
    );
}

Settings.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Settings;
