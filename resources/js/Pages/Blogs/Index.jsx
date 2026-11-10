import { Link, router } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { Paginator } from 'primereact/paginator';
import { Tag } from 'primereact/tag';
import { Footer } from '@/comps/Foot';
import { Header } from '@/comps/Header';
import { Seo } from '@/comps/SEO';
import './blogs.css';

const heroImage = 'images/services/mother-playing-with-baby-helping-her-crawl-on-bed-indoor-e1634117890229-1024x682.jpg';

function formattedDate(value) {
    if (!value) return '';

    return new Date(value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default function BlogsIndex({ blogs, categories, filters }) {
    const activeCategoryId = filters.categoryId ? String(filters.categoryId) : '';
    const articles = blogs.data.map((blog, index) => ({
        '@type': 'ListItem',
        position: (blogs.current_page - 1) * blogs.per_page + index + 1,
        item: {
            '@type': 'Article',
            headline: blog.title,
            url: `/blog/${blog.slug}`,
        },
    }));

    const changePage = ({ page }) => {
        router.get('/blogs', {
            ...(activeCategoryId ? { articlesCategories_id: activeCategoryId } : {}),
            page: page + 1,
        }, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const categoryHref = (categoryId) => (
        categoryId ? `/blogs?articlesCategories_id=${encodeURIComponent(categoryId)}` : '/blogs'
    );

    return (
        <>
            <Seo
                title="Blog News"
                description="Read practical guidance and the latest insights from the Nested Nurturers team on pregnancy, birth, postpartum care, and family support."
                url="/blogs"
                schema={{
                    '@context': 'https://schema.org',
                    '@type': 'CollectionPage',
                    name: 'Blog News',
                    url: 'https://nestednurturers.com/blogs',
                    mainEntity: {
                        '@type': 'ItemList',
                        itemListElement: articles,
                    },
                }}
                image={heroImage}
            />
            <Header />
            <main className="public-blogs">
                <section className="public-blogs__hero">
                    <img src={heroImage} alt="" className="public-blogs__hero-image" />
                    <div className="public-blogs__hero-overlay" />
                    <div className="public-blogs__hero-content">
                        <div>
                            <span className="public-blogs__eyebrow">Knowledge Hub</span>
                            <h1>
                                Love, Care &amp;
                                <span> Support Doulas</span>
                            </h1>
                            <p>Helpful knowledge and compassionate guidance for every step of your growing family.</p>
                        </div>
                    </div>
                </section>

                <section className="public-blogs__filters" aria-label="Filter articles by category">
                    <Link
                        href="/blogs"
                        className={`public-blogs__filter${activeCategoryId ? '' : ' is-active'}`}
                        aria-current={activeCategoryId ? undefined : 'page'}
                    >
                        All
                    </Link>
                    {categories.map((category) => {
                        const selected = activeCategoryId === String(category.id);

                        return (
                            <Link
                                key={category.id}
                                href={categoryHref(category.id)}
                                className={`public-blogs__filter${selected ? ' is-active' : ''}`}
                                aria-current={selected ? 'page' : undefined}
                            >
                                {category.title}
                            </Link>
                        );
                    })}
                </section>

                <section className="public-blogs__listing" aria-label="Published articles">
                    {blogs.data.length > 0 ? (
                        <div className="public-blogs__grid">
                            {blogs.data.map((blog) => (
                                <Card className="public-blogs__card" key={blog.slug}>
                                    <Link
                                        href={`/blog/${blog.slug}`}
                                        className="public-blogs__card-link"
                                        aria-label={`Read ${blog.title}`}
                                    >
                                        {blog.image_url ? (
                                            <img
                                                src={blog.image_url}
                                                alt=""
                                                className="public-blogs__card-image"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="public-blogs__card-placeholder" aria-hidden="true">
                                                <i className="pi pi-image" />
                                            </div>
                                        )}
                                        <div className="public-blogs__card-content">
                                            <div className="public-blogs__card-meta">
                                                {blog.category && <Tag value={blog.category.title} />}
                                                <span>{formattedDate(blog.created_at)}</span>
                                            </div>
                                            <h2>{blog.title}</h2>
                                            <p>{blog.overview}</p>
                                            <div className="public-blogs__card-footer">
                                                <span>{blog.reading_time} min read</span>
                                                <span className="public-blogs__read-more">
                                                    Read article <i className="pi pi-arrow-right" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="public-blogs__empty">
                            <i className="pi pi-book" aria-hidden="true" />
                            <h2>No published articles yet</h2>
                            <p>Check back soon for helpful articles from our team.</p>
                        </div>
                    )}
                    {blogs.total > blogs.per_page && (
                        <Paginator
                            first={(blogs.current_page - 1) * blogs.per_page}
                            rows={blogs.per_page}
                            totalRecords={blogs.total}
                            onPageChange={changePage}
                            className="public-blogs__paginator"
                        />
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}
