import { useEffect, useRef, useState } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { format, parseISO } from 'date-fns';
import AdminLayout from '../../../Layouts/AdminLayout';
import Button from '@/Components/Button';
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
            router.get('/dashboard/blogs', { search: search || undefined }, {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            });
        }, 300);
        return () => window.clearTimeout(timer);
    }, [search, filters.search]);

    const changePage = (event) => {
        router.get('/dashboard/blogs', {
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
            acceptClassName: 'app-button app-button--danger app-button--md',
            rejectClassName: 'app-button app-button--secondary app-button--md',
            accept: () => router.delete(`/dashboard/blogs/${blog.id}`, {
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
            <Button
                href={`/dashboard/blogs/${blog.id}`}
                variant="ghost"
                size="sm"
                iconOnly
                aria-label={`View ${blog.title}`}
            >
                <i className="pi pi-eye" aria-hidden="true" />
            </Button>
            <Button
                href={`/dashboard/blogs/${blog.id}/edit`}
                variant="ghost"
                size="sm"
                iconOnly
                aria-label={`Edit ${blog.title}`}
            >
                <i className="pi pi-pencil" aria-hidden="true" />
            </Button>
            <Button
                type="button"
                variant="danger"
                size="sm"
                iconOnly
                aria-label={`Delete ${blog.title}`}
                onClick={() => deleteBlog(blog)}
            >
                <i className="pi pi-trash" aria-hidden="true" />
            </Button>
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
                    <Button href="/dashboard/blogs/create" leftIcon={<i className="pi pi-plus" aria-hidden="true" />}>
                        Create Article
                    </Button>
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
