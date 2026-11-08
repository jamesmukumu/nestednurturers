import { Head, Link } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import AdminLayout from '../../../Layouts/AdminLayout';
import './blogs.css';

function ShowBlog({ blog }) {
    return (
        <>
            <Head title={blog.title} />
            <section className="admin-page blogs-show">
                <header className="admin-page__header blogs-show__header">
                    <div>
                        <h1>{blog.title}</h1>
                        <p>{blog.category?.title || 'Uncategorized'} · {blog.reading_time} min read</p>
                    </div>
                    <div className="blogs-show__actions">
                        <Tag value={blog.is_published ? 'Published' : 'Draft'} severity={blog.is_published ? 'success' : 'warning'} />
                        <Link href={`/blogs/${blog.id}/edit`} className="p-button p-component">
                            <span className="p-button-icon p-button-icon-left pi pi-pencil" aria-hidden="true" />
                            <span className="p-button-label">Edit blog</span>
                        </Link>
                    </div>
                </header>
                {blog.image_url && (
                    <img className="blogs-show__image" src={blog.image_url} alt="" />
                )}
                <Card className="admin-page__card blogs-show__card">
                    <h2>Overview</h2>
                    <div dangerouslySetInnerHTML={{ __html: blog.overview }} />
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                </Card>
            </section>
        </>
    );
}

ShowBlog.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default ShowBlog;
