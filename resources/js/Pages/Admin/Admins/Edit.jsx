import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import AdminLayout from "@/Layouts/AdminLayout";
import Button from "@/Components/Button";
import useInertiaMutationFeedback from "@/Components/useInertiaMutationFeedback";
import "../management.css";

function EditAdmin({ admin }) {
    const { data, setData, patch, processing, errors, clearErrors } = useForm({
        name: admin.name,
        email: admin.email,
        phonenumber: admin.phonenumber,
    });
    const [failure, setFailure] = useState("");
    const { startMutation, finishMutation } =
        useInertiaMutationFeedback(setFailure);
    const submit = (event) => {
        event.preventDefault();
        if (processing) return;
        setFailure("");
        startMutation();
        patch(`/dashboard/admins/${admin.id}`, {
            onFinish: finishMutation,
        });
    };
    return (
        <>
            <Head title="Edit admin" />
            <section className="admin-page">
                <header className="admin-page__header">
                    <h1>Edit admin</h1>
                    <p>Update contact details for {admin.name}.</p>
                </header>
                <Card className="admin-page__card">
                    <form
                        className="management-form"
                        onSubmit={submit}
                        noValidate
                    >
                        {Object.entries({
                            name: "Name",
                            email: "Email",
                            phonenumber: "Phone number",
                        }).map(([key, label]) => (
                            <div className="management-field" key={key}>
                                <label htmlFor={`admin-${key}`}>
                                    {label} <span aria-hidden="true">*</span>
                                </label>
                                <InputText
                                    id={`admin-${key}`}
                                    type={
                                        key === "email"
                                            ? "email"
                                            : key === "phonenumber"
                                              ? "tel"
                                              : "text"
                                    }
                                    autoComplete="off"
                                    value={data[key] || ""}
                                    maxLength={255}
                                    disabled={processing}
                                    invalid={Boolean(errors[key])}
                                    aria-invalid={Boolean(errors[key])}
                                    aria-describedby={
                                        errors[key]
                                            ? `admin-${key}-error`
                                            : undefined
                                    }
                                    onChange={(event) => {
                                        setData(key, event.target.value);
                                        clearErrors(key);
                                    }}
                                />
                                {errors[key] && (
                                    <small
                                        className="p-error"
                                        id={`admin-${key}-error`}
                                    >
                                        {errors[key]}
                                    </small>
                                )}
                            </div>
                        ))}
                        <p className="management-notice">
                            Changing the email address requires the admin to
                            verify their new email before accessing the
                            dashboard.
                        </p>
                        {failure && (
                            <p
                                className="p-error management-form-error"
                                role="alert"
                            >
                                {failure}
                            </p>
                        )}
                        <div className="management-actions">
                            <Button
                                type="submit"
                                loading={processing}
                                loadingLabel="Saving…"
                            >
                                Save changes
                            </Button>
                            <Button
                                href="/dashboard/admins"
                                variant="secondary"
                                disabled={processing}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Card>
            </section>
        </>
    );
}
EditAdmin.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default EditAdmin;
