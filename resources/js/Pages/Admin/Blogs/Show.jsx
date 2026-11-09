import { Head } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import AdminLayout from '../../../Layouts/AdminLayout';
import Button from '@/Components/Button';
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
                        <Button href={`/dashboard/blogs/${blog.id}/edit`} leftIcon={<i className="pi pi-pencil" aria-hidden="true" />}>
                            Edit blog
                        </Button>
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
