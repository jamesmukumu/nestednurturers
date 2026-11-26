import { useEffect, useRef, useState } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import AdminLayout from "@/Layouts/AdminLayout";
import Button from "@/Components/Button";
import useInertiaMutationFeedback from "@/Components/useInertiaMutationFeedback";
import BlogCategoryDialog from "@/Components/Blogs/BlogCategoryDialog";
import "../Blogs/blogs.css";
import "@/Components/Blogs/BlogForm.css";
import "../management.css";

function CategoriesIndex({ categories, filters }) {
    const toast = useRef(null);
    const { props } = usePage();
    const [search, setSearch] = useState(filters.search || "");
    const [editing, setEditing] = useState(null);
    const [formVisible, setFormVisible] = useState(false);
    const [deleting, setDeleting] = useState(null);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const { startMutation, finishMutation } =
        useInertiaMutationFeedback(setError);

    useEffect(() => setSearch(filters.search || ""), [filters.search]);
    useEffect(() => {
        if (props.flash?.success)
            toast.current?.show({
                severity: "success",
                summary: "Success",
                detail: props.flash.success,
            });
    }, [props.flash?.success]);
    useEffect(() => {
        if (search === (filters.search || "")) return undefined;
        const timer = window.setTimeout(
            () =>
                router.get(
                    "/dashboard/blog-categories",
                    { search: search || undefined },
                    {
                        preserveState: true,
                        preserveScroll: true,
                        replace: true,
                    },
                ),
            300,
        );
        return () => window.clearTimeout(timer);
    }, [search, filters.search]);

    const remove = () => {
        if (busy) return;
        setBusy(true);
        setError("");
        startMutation();
        router.delete(`/dashboard/blog-categories/${deleting.id}`, {
            preserveScroll: true,
            onSuccess: () => setDeleteVisible(false),
            onError: (errors) =>
                setError(
                    errors.category ||
                        "Unable to delete this category. Please try again.",
                ),
            onFinish: () => {
                finishMutation();
                setBusy(false);
            },
        });
    };

    const actions = (category) => (
        <div className="management-actions">
            <Button
                variant="ghost"
                size="sm"
                iconOnly
                aria-label={`Edit ${category.title}`}
                onClick={() => {
                    setEditing(category);
                    setFormVisible(true);
                }}
            >
                <i className="pi pi-pencil" aria-hidden="true" />
            </Button>
            <Button
                variant="danger"
                size="sm"
                iconOnly
                aria-label={`Delete ${category.title}`}
                onClick={() => {
                    setDeleting(category);
                    setDeleteVisible(true);
                    setError("");
                }}
            >
                <i className="pi pi-trash" aria-hidden="true" />
            </Button>
        </div>
    );

    return (
        <>
            <Head title="Article categories" />
            <Toast
                ref={toast}
                position="top-right"
                className="management-toast"
            />
            <section className="admin-page blogs-list">
                <header className="admin-page__header blogs-list__header">
                    <div>
                        <h1>Article categories</h1>
                        <p>
                            Create, edit, and manage categories for your
                            articles.
                        </p>
                    </div>
                    <Button
                        onClick={() => {
                            setEditing(null);
                            setFormVisible(true);
                        }}
                        leftIcon={
                            <i className="pi pi-plus" aria-hidden="true" />
                        }
                    >
                        Create category
                    </Button>
                </header>
                <div className="blogs-list__toolbar">
                    <label className="blogs-list__search">
                        <i className="pi pi-search" aria-hidden="true" />
                        <InputText
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search categories"
                            aria-label="Search categories"
                        />
                    </label>
                </div>
                <DataTable
                    value={categories.data}
                    dataKey="id"
                    lazy
                    paginator={categories.total > categories.per_page}
                    first={(categories.current_page - 1) * categories.per_page}
                    rows={categories.per_page}
                    totalRecords={categories.total}
                    onPage={(event) =>
                        router.get(
                            "/dashboard/blog-categories",
                            {
                                search: search || undefined,
                                page: event.page + 1,
                            },
                            { preserveState: true, preserveScroll: true },
                        )
                    }
                    emptyMessage="No categories found."
                    className="blogs-list__table"
                    tableStyle={{ minWidth: "36rem" }}
                >
                    <Column field="title" header="Title" />
                    <Column
                        header="Description"
                        body={(category) => (
                            <span className="management-description">
                                {category.description || "—"}
                            </span>
                        )}
                    />
                    <Column field="blogs_count" header="Articles" />
                    <Column header="Actions" body={actions} />
                </DataTable>
            </section>
            <BlogCategoryDialog
                visible={formVisible}
                category={editing}
                onHide={() => setFormVisible(false)}
                toast={toast}
                onCreated={() => router.reload({ only: ["categories"] })}
            />
            <Dialog
                header={
                    deleting?.blogs_count
                        ? "Category is in use"
                        : "Delete category?"
                }
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
                            onClick={() => setDeleteVisible(false)}
                            disabled={busy}
                        >
                            {deleting?.blogs_count ? "Close" : "Cancel"}
                        </Button>
                        {!deleting?.blogs_count && (
                            <Button
                                variant="danger"
                                onClick={remove}
                                loading={busy}
                                loadingLabel="Deleting…"
                            >
                                Delete category
                            </Button>
                        )}
                    </div>
                }
            >
                <p>
                    {deleting?.blogs_count
                        ? `“${deleting.title}” contains ${deleting.blogs_count} article(s). Move or delete all articles in this category before deleting it.`
                        : `“${deleting?.title}” will be permanently deleted.`}
                </p>
                {error && (
                    <p className="p-error" role="alert">
                        {error}
                    </p>
                )}
            </Dialog>
        </>
    );
}
CategoriesIndex.layout = (page) => <AdminLayout>{page}</AdminLayout>;
export default CategoriesIndex;
