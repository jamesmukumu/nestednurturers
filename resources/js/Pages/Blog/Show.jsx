import { Link } from '@inertiajs/react';
import { Tag } from 'primereact/tag';
import Button from '@/Components/Button';
import { Footer } from '@/comps/Foot';
import { Header } from '@/comps/Header';
import { Seo } from '@/comps/SEO';
import '../Blogs/blogs.css';

function formattedDate(value) {
    if (!value) return '';

    return new Date(value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default function BlogShow({ blog }) {
    const pageUrl = `https://nestednurturers.com/blog/${blog.slug}`;

    return (
        <>
            <Seo
                title={blog.title}
                description={blog.overview.replace(/<[^>]*>/g, '').slice(0, 160)}
                url={`/blog/${blog.slug}`}
                ogType="article"
                image={blog.image_url || undefined}
                schema={{
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    headline: blog.title,
                    description: blog.overview.replace(/<[^>]*>/g, '').slice(0, 160),
                    image: blog.image_url ? [blog.image_url] : undefined,
                    datePublished: blog.created_at,
                    mainEntityOfPage: pageUrl,
                }}
            />
            <Header />
            <main className="public-blog-article">
                <div className="public-blog-article__back">
                    <Button href="/blogs" variant="secondary" leftIcon={<i className="pi pi-arrow-left" aria-hidden="true" />}>
                        All articles
                    </Button>
                </div>
                <article>
                    <header className="public-blog-article__header">
                        {blog.category && (
                            <Tag value={blog.category.title} className="public-blog-article__category" />
                        )}
                        <h1>{blog.title}</h1>
                        <div className="public-blog-article__meta">
                            {blog.created_at && <time dateTime={blog.created_at}>{formattedDate(blog.created_at)}</time>}
                            <span>{blog.reading_time} min read</span>
                        </div>
                        <div
                            className="public-blog-article__overview"
                            dangerouslySetInnerHTML={{ __html: blog.overview }}
                        />
                    </header>
                    {blog.image_url && (
                        <img src={blog.image_url} alt="" className="public-blog-article__image" />
                    )}
                    <div
                        className="public-blog-article__body"
                        dangerouslySetInnerHTML={{ __html: blog.description }}
                    />
                </article>
                <p className="mt-10">
                    <Link href="/blogs" className="public-blogs__read-more">Explore more articles</Link>
                </p>
            </main>
            <Footer />
        </>
    );
}
