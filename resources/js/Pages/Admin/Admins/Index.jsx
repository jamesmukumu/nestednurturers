import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function formattedDate(value) {
    return value
        ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(value))
        : "—";
}

function AdminsIndex({ admins }) {
    return (
        <>
            <Head title="Admins" />
            <section className="admin-page">
                <header className="admin-page__header">
                    <span className="admin-eyebrow">ADMINISTRATION</span>
                    <h1>See admins</h1>
                    <p>Current administrator accounts with access to the workspace.</p>
                </header>
                <div className="admins-directory">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Email status</th>
                                <th scope="col">Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((admin) => (
                                <tr key={admin.id}>
                                    <td>{admin.name}</td>
                                    <td>{admin.email}</td>
                                    <td>{admin.isAdmin ? "Administrator" : "Admin account"}</td>
                                    <td>{admin.emailVerified ? "Verified" : "Unverified"}</td>
                                    <td>{formattedDate(admin.createdAt)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

AdminsIndex.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default AdminsIndex;
