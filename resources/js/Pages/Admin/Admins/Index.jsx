import { useEffect, useRef, useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Button from "@/Components/Button";
import useInertiaMutationFeedback from "@/Components/useInertiaMutationFeedback";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import "../management.css";

function formattedDate(value) {
    return value
        ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
              new Date(value),
          )
        : "—";
}

function AdminsIndex({ admins }) {
    const { props } = usePage();
    const toast = useRef(null);
    const [deleting, setDeleting] = useState(null);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const { startMutation, finishMutation } =
        useInertiaMutationFeedback(setError);
    useEffect(() => {
        if (props.flash?.success)
            toast.current?.show({
                severity: "success",
                summary: "Success",
                detail: props.flash.success,
            });
    }, [props.flash?.success]);
    const remove = () => {
        if (busy) return;
        setBusy(true);
        setError("");
        startMutation();
        router.delete(`/dashboard/admins/${deleting.id}`, {
            preserveScroll: true,
            onSuccess: () => setDeleteVisible(false),
            onError: (errors) =>
                setError(
                    Object.values(errors)[0] ||
                        "Unable to delete this admin. Please try again.",
                ),
            onFinish: () => {
                finishMutation();
                setBusy(false);
            },
        });
    };
    return (
        <>
            <Head title="Admins" />
            <Toast
                ref={toast}
                position="top-right"
                className="management-toast"
            />
            <Dialog
                header="Delete admin?"
                visible={deleteVisible}
                onHide={() => {
                    if (!busy) setDeleteVisible(false);
                }}
                closable={!busy}
                closeOnEscape={!busy}
                modal
                draggable={false}
                className="management-dialog"
                footer={
                    <div className="management-actions">
                        <Button
                            variant="secondary"
                            disabled={busy}
                            onClick={() => setDeleteVisible(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="danger"
                            onClick={remove}
                            loading={busy}
                            loadingLabel="Deleting…"
                        >
                            Delete admin
                        </Button>
                    </div>
                }
            >
                <p>
                    “{deleting?.name}” ({deleting?.email}) will permanently lose
                    access. Their articles, categories, and services will be
                    transferred to you.
                </p>
                {error && (
                    <p className="p-error" role="alert">
                        {error}
                    </p>
                )}
            </Dialog>
            <section className="admin-page">
                <header className="admin-page__header">
                    <span className="admin-eyebrow">ADMINISTRATION</span>
                    <h1>Admins</h1>
                    <p>
                        Current administrator accounts with access to the
                        workspace.
                    </p>
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
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((admin) => (
                                <tr key={admin.id}>
                                    <td>{admin.name}</td>
                                    <td>{admin.email}</td>
                                    <td>
                                        {admin.isAdmin
                                            ? "Administrator"
                                            : "Admin account"}
                                    </td>
                                    <td>
                                        {admin.emailVerified
                                            ? "Verified"
                                            : "Unverified"}
                                    </td>
                                    <td>{formattedDate(admin.createdAt)}</td>
                                    <td>
                                        {String(admin.id) ===
                                        String(props.auth.user.id) ? (
                                            <Button
                                                href="/dashboard/profile"
                                                variant="ghost"
                                                size="sm"
                                            >
                                                Your profile
                                            </Button>
                                        ) : (
                                            <div className="management-actions">
                                                <Button
                                                    href={`/dashboard/admins/${admin.id}/edit`}
                                                    variant="ghost"
                                                    size="sm"
                                                    iconOnly
                                                    aria-label={`Edit ${admin.name}`}
                                                >
                                                    <i
                                                        className="pi pi-pencil"
                                                        aria-hidden="true"
                                                    />
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    iconOnly
                                                    aria-label={`Delete ${admin.name}`}
                                                    onClick={() => {
                                                        setDeleting(admin);
                                                        setDeleteVisible(true);
                                                        setError("");
                                                    }}
                                                >
                                                    <i
                                                        className="pi pi-trash"
                                                        aria-hidden="true"
                                                    />
                                                </Button>
                                            </div>
                                        )}
                                    </td>
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
