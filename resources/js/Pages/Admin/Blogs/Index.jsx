import { useEffect, useRef, useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { format, parseISO } from 'date-fns';
import AdminLayout from '../../../Layouts/AdminLayout';
import './blogs.css';

function BlogsList({ blogs, filters }) {
    const toast = useRef(null);
    const { props } = usePage();
    const [search, setSearch] = useState(filters.search || '');

    useEffect(() => {
        setSearch(filters.search || '');
    }, [filters.search]);

    useEffect(() => {
        if (props.flash?.success) {
            toast.current?.show({ severity: 'success', summary: 'Success', detail: props.flash.success });
        }
    }, [props.flash?.success]);

    useEffect(() => {
        if (search === (filters.search || '')) return undefined;
        const timer = window.setTimeout(() => {
            router.get('/blogs', { search: search || undefined }, {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            });
        }, 300);
        return () => window.clearTimeout(timer);
    }, [search, filters.search]);

    const changePage = (event) => {
        router.get('/blogs', {
            search: search || undefined,
            page: event.page + 1,
        }, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const deleteBlog = (blog) => {
        confirmDialog({
            header: 'Delete blog?',
            message: `“${blog.title}” will be permanently deleted.`,
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Delete',
            rejectLabel: 'Cancel',
            acceptClassName: 'p-button-danger',
            accept: () => router.delete(`/blogs/${blog.id}`, {
                onError: () => toast.current?.show({
                    severity: 'error',
                    summary: 'Unable to delete blog',
                    detail: 'Please try again.',
                }),
                onHttpException: () => toast.current?.show({
                    severity: 'error',
                    summary: 'Unable to delete blog',
                    detail: 'The server could not delete the blog. Please try again.',
                }),
                onException: () => toast.current?.show({
                    severity: 'error',
                    summary: 'Unable to delete blog',
                    detail: 'A network error interrupted the request. Please try again.',
                }),
            }),
        });
    };

    const imageBody = (blog) => (
        blog.image_url
            ? <img className="blogs-list__image" src={blog.image_url} alt="" />
            : <span className="blogs-list__image-placeholder" aria-label="No image"><i className="pi pi-image" aria-hidden="true" /></span>
    );

    const publishBody = (blog) => (
        <Tag value={blog.is_published ? 'Published' : 'Draft'} severity={blog.is_published ? 'success' : 'warning'} />
    );

    const dateBody = (blog) => blog.created_at
        ? format(parseISO(blog.created_at), 'MMM d, yyyy')
        : '—';

    const actionsBody = (blog) => (
        <div className="blogs-list__actions">
            <Link
                href={`/blogs/${blog.id}`}
                className="p-button p-component p-button-text p-button-rounded p-button-icon-only"
                aria-label={`View ${blog.title}`}
            >
                <i className="pi pi-eye" aria-hidden="true" />
            </Link>
            <Link
                href={`/blogs/${blog.id}/edit`}
                className="p-button p-component p-button-text p-button-rounded p-button-icon-only"
                aria-label={`Edit ${blog.title}`}
            >
                <i className="pi pi-pencil" aria-hidden="true" />
            </Link>
            <Button
                type="button"
                text
                rounded
                severity="danger"
                icon="pi pi-trash"
                aria-label={`Delete ${blog.title}`}
                onClick={() => deleteBlog(blog)}
            />
        </div>
    );

    return (
        <>
            <Head title="Blogs" />
            <Toast ref={toast} position="top-right" />
            <ConfirmDialog />
            <section className="admin-page blogs-list">
                <header className="admin-page__header blogs-list__header">
                    <div>
                        <h1>Blogs</h1>
                        <p>Create, edit, and manage your blogs.</p>
                    </div>
                    <Link href="/blogs/create" className="p-button p-component">
                        <i className="p-button-icon p-button-icon-left pi pi-plus" aria-hidden="true" />
                        <span className="p-button-label">Create Article</span>
                    </Link>
                </header>
                <div className="blogs-list__toolbar">
                    <label className="blogs-list__search">
                        <i className="pi pi-search" aria-hidden="true" />
                        <InputText
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search blogs"
                            aria-label="Search blogs"
                        />
                    </label>
                </div>
                <DataTable
                    value={blogs.data}
                    dataKey="id"
                    lazy
                    paginator={blogs.total > blogs.per_page}
                    first={(blogs.current_page - 1) * blogs.per_page}
                    rows={blogs.per_page}
                    totalRecords={blogs.total}
                    onPage={changePage}
                    responsiveLayout="scroll"
                    emptyMessage="No blogs found."
                    className="blogs-list__table"
                >
                    <Column header="Cover" body={imageBody} style={{ width: '7rem' }} />
                    <Column field="title" header="Title" />
                    <Column header="Category" body={(blog) => blog.category?.title || '—'} />
                    <Column header="Status" body={publishBody} style={{ width: '8rem' }} />
                    <Column header="Date" body={dateBody} style={{ width: '10rem' }} />
                    <Column header="Actions" body={actionsBody} style={{ width: '11rem' }} />
                </DataTable>
            </section>
        </>
    );
}

BlogsList.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default BlogsList;
