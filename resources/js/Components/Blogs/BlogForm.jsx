import { useEffect, useRef, useState } from 'react';
import { Head, router, useForm } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import BlogCategoryDialog from './BlogCategoryDialog';
import Checkbox from '@/Components/Checkbox';
import RichTextEditor from '../RichTextEditor';
import Button from '@/Components/Button';
import AdminLayout from '../../Layouts/AdminLayout';
import './BlogForm.css';

const maximumImageSize = 2 * 1024 * 1024;
const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];

function imageError(file) {
    if (!file) return 'Please choose a cover image.';
    const extension = file.name.split('.').pop()?.toLowerCase();
    if (!allowedTypes.includes(file.type) || !allowedExtensions.includes(extension) || file.size > maximumImageSize) {
        return 'Choose a JPG, PNG, or WEBP image up to 2MB.';
    }
    return '';
}

function hasPlainText(value) {
    const container = document.createElement('div');
    container.innerHTML = value;
    return Boolean((container.textContent || container.innerText || '').replace(/\u00a0/g, ' ').trim());
}

function validateImageLoads(file) {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(file);
        const image = new Image();
        image.onload = () => {
            URL.revokeObjectURL(url);
            resolve(true);
        };
        image.onerror = () => {
            URL.revokeObjectURL(url);
            resolve(false);
        };
        image.src = url;
    });
}

export default function BlogForm({ blog = null, categories: initialCategories = [] }) {
    const isEdit = Boolean(blog);
    const toast = useRef(null);
    const [categories, setCategories] = useState(initialCategories);
    const [categoryDialogVisible, setCategoryDialogVisible] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(blog?.image_url || null);
    const [saving, setSaving] = useState(false);
    const {
        data,
        setData,
        errors,
        setError,
        clearErrors,
    } = useForm({
        title: blog?.title || '',
        description: blog?.description || '',
        overview: blog?.overview || '',
        blog_categories_id: blog?.blog_categories_id || null,
        reading_time: blog?.reading_time || 1,
        image: null,
        is_published: blog?.is_published || false,
    });

    useEffect(() => {
        if (!data.image) {
            setPreviewUrl(blog?.image_url || null);
            return undefined;
        }
        const url = URL.createObjectURL(data.image);
        setPreviewUrl(url);
        return () => URL.revokeObjectURL(url);
    }, [data.image, blog?.image_url]);

    const onCategoryCreated = (category) => {
        setCategories((current) => [...current, category].sort((a, b) => a.title.localeCompare(b.title)));
        setData('blog_categories_id', category.id);
        clearErrors('blog_categories_id');
    };

    const onImageSelected = async (event) => {
        const file = event.files[0];
        if (!file) return;
        const error = imageError(file);
        if (error) {
            setData('image', null);
            setError('image', error);
            return;
        }
        if (!(await validateImageLoads(file))) {
            setData('image', null);
            setError('image', 'This image could not be opened. Please choose a valid image.');
            return;
        }
        setData('image', file);
        clearErrors('image');
    };

    const submit = (event) => {
        event.preventDefault();
        if (!data.title.trim()) setError('title', 'Please enter a title.');
        if (!hasPlainText(data.description)) setError('description', 'Please enter the blog content.');
        if (!hasPlainText(data.overview)) setError('overview', 'Please enter an overview.');
        if (!data.blog_categories_id) setError('blog_categories_id', 'Please select a category.');
        if (!isEdit && !data.image) setError('image', 'Please choose a cover image.');
        if (
            !data.title.trim()
            || !hasPlainText(data.description)
            || !hasPlainText(data.overview)
            || !data.blog_categories_id
            || (!isEdit && !data.image)
        ) return;

        const url = isEdit ? `/dashboard/blogs/${blog.id}` : '/dashboard/blogs';
        setSaving(true);
        router.post(url, {
            ...data,
            ...(isEdit ? { _method: 'put' } : {}),
        }, {
            forceFormData: true,
            onError: (serverErrors) => {
                setError(serverErrors);
                toast.current?.show({
                    severity: 'error',
                    summary: 'Unable to save blog',
                    detail: 'Review the highlighted fields and try again.',
                });
            },
            onHttpException: () => toast.current?.show({
                severity: 'error',
                summary: 'Unable to save blog',
                detail: 'The server could not save your blog. Please try again.',
            }),
            onException: () => toast.current?.show({
                severity: 'error',
                summary: 'Unable to save blog',
                detail: 'A network error interrupted the request. Please try again.',
            }),
            onFinish: () => setSaving(false),
        });
    };

    const actions = (
        <div className="blog-form-page__actions">
            <Button href="/dashboard/blogs" variant="secondary">
                Cancel
            </Button>
            <Button
                type="submit"
                form="blog-form"
                loading={saving}
                loadingLabel={isEdit ? 'Saving changes…' : 'Creating article…'}
                leftIcon={<i className="pi pi-check" aria-hidden="true" />}
            >
                {isEdit ? 'Save changes' : 'Create Article'}
            </Button>
        </div>
    );

    return (
        <>
            <Head title={isEdit ? 'Edit Article' : 'Create Article'} />
            <Toast ref={toast} position="top-right" />
            <BlogCategoryDialog
                visible={categoryDialogVisible}
                onHide={() => setCategoryDialogVisible(false)}
                onCreated={onCategoryCreated}
                toast={toast}
            />
            <section className="admin-page blog-form-page">
                <header className="admin-page__header blog-form-page__header">
                    <div>
                        <h1>{isEdit ? 'Edit Article' : 'Create Article'}</h1>
                        <p>{isEdit ? 'Update your blog details and cover image.' : 'Add details and prepare your article for publishing.'}</p>
                    </div>
                    {isEdit && actions}
                </header>
                <Card className={`admin-page__card blog-form__card${isEdit ? '' : ' blog-form__card--create'}`}>
                    <form id="blog-form" onSubmit={submit} noValidate>
                        <div className="blog-form__fields">
                            <div className="blog-form__field">
                                <label htmlFor="blog-title">Title <span aria-hidden="true">*</span></label>
                                <InputText
                                    id="blog-title"
                                    value={data.title}
                                    maxLength={255}
                                    invalid={Boolean(errors.title)}
                                    aria-invalid={Boolean(errors.title)}
                                    aria-describedby={errors.title ? 'blog-title-error' : undefined}
                                    onChange={(event) => {
                                        setData('title', event.target.value);
                                        clearErrors('title');
                                    }}
                                />
                                {errors.title && <small className="p-error" id="blog-title-error">{errors.title}</small>}
                            </div>

                            <div className="blog-form__field blog-form__reading-time">
                                <label htmlFor="blog-reading-time">Reading time (minutes) <span aria-hidden="true">*</span></label>
                                <InputText
                                    id="blog-reading-time"
                                    type="number"
                                    inputMode="numeric"
                                    min="1"
                                    max="300"
                                    step="1"
                                    value={data.reading_time}
                                    invalid={Boolean(errors.reading_time)}
                                    aria-invalid={Boolean(errors.reading_time)}
                                    aria-describedby={errors.reading_time ? 'blog-reading-time-error' : 'blog-reading-time-hint'}
                                    onChange={(event) => {
                                        setData('reading_time', event.target.value);
                                        clearErrors('reading_time');
                                    }}
                                />
                                <small className="blog-form__hint" id="blog-reading-time-hint">
                                    Enter a number from 1 to 300 minutes.
                                </small>
                                {errors.reading_time && (
                                    <small className="p-error" id="blog-reading-time-error">{errors.reading_time}</small>
                                )}
                            </div>

                            <div className="blog-form__field">
                                <label htmlFor="blog-overview">Overview <span aria-hidden="true">*</span></label>
                                <div className={`blog-form__editor${errors.overview ? ' p-invalid' : ''}`}>
                                    <RichTextEditor
                                        id="blog-overview"
                                        label="Overview"
                                        value={data.overview}
                                        onChange={(value) => {
                                            setData('overview', value);
                                            clearErrors('overview');
                                        }}
                                        placeholder="Summarize the blog..."
                                        height={200}
                                    />
                                </div>
                                {errors.overview && <small className="p-error">{errors.overview}</small>}
                            </div>

                            <div className="blog-form__field">
                                <label htmlFor="blog-description">Content <span aria-hidden="true">*</span></label>
                                <div className={`blog-form__editor${errors.description ? ' p-invalid' : ''}`}>
                                    <RichTextEditor
                                        id="blog-description"
                                        label="Content"
                                        value={data.description}
                                        onChange={(value) => {
                                            setData('description', value);
                                            clearErrors('description');
                                        }}
                                        placeholder="Write the blog content..."
                                        height={360}
                                    />
                                </div>
                                {errors.description && <small className="p-error">{errors.description}</small>}
                            </div>

                            <div className="blog-form__field">
                                <label htmlFor="blog-category">Category <span aria-hidden="true">*</span></label>
                                <div className="blog-form__category-row">
                                    <Dropdown
                                        inputId="blog-category"
                                        value={data.blog_categories_id}
                                        options={categories}
                                        optionLabel="title"
                                        optionValue="id"
                                        placeholder="Select a category"
                                        emptyMessage="No categories found"
                                        emptyFilterMessage="No categories found"
                                        filter
                                        showClear
                                        className={errors.blog_categories_id ? 'p-invalid' : ''}
                                        aria-invalid={Boolean(errors.blog_categories_id)}
                                        aria-describedby={errors.blog_categories_id ? 'blog-category-error' : undefined}
                                        onChange={(event) => {
                                            setData('blog_categories_id', event.value);
                                            clearErrors('blog_categories_id');
                                        }}
                                    />
                                    <Button
                                        type="button"
                                        leftIcon={<i className="pi pi-plus" aria-hidden="true" />}
                                        onClick={() => setCategoryDialogVisible(true)}
                                    >
                                        Create Category
                                    </Button>
                                </div>
                                {errors.blog_categories_id && (
                                    <small className="p-error" id="blog-category-error">{errors.blog_categories_id}</small>
                                )}
                            </div>

                            <div className="blog-form__field">
                                <label htmlFor="blog-image-input">
                                    Cover image {!isEdit && <span aria-hidden="true">*</span>}
                                </label>
                                <FileUpload
                                    id="blog-image"
                                    mode="basic"
                                    name="image"
                                    accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
                                    maxFileSize={maximumImageSize}
                                    customUpload
                                    auto={false}
                                    chooseLabel={data.image ? 'Replace image' : 'Choose image'}
                                    chooseOptions={{
                                        icon: 'pi pi-upload',
                                        className: 'app-button app-button--secondary app-button--md',
                                    }}
                                    onSelect={onImageSelected}
                                    onValidationFail={() => setError('image', 'Choose a JPG, PNG, or WEBP image up to 2MB.')}
                                    pt={{
                                        input: {
                                            id: 'blog-image-input',
                                            'aria-invalid': Boolean(errors.image),
                                            'aria-describedby': errors.image ? 'blog-image-hint blog-image-error' : 'blog-image-hint',
                                        },
                                        chooseButton: { 'aria-label': 'Choose blog cover image' },
                                    }}
                                />
                                <small className="blog-form__hint" id="blog-image-hint">
                                    JPG, PNG, or WEBP, up to 2MB.
                                </small>
                                {previewUrl && (
                                    <div className="blog-form__image-preview">
                                        <img src={previewUrl} alt="Blog cover preview" />
                                        {data.image && (
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                leftIcon={<i className="pi pi-times" aria-hidden="true" />}
                                                onClick={() => {
                                                    setData('image', null);
                                                    clearErrors('image');
                                                }}
                                            >
                                                {isEdit ? 'Use current image' : 'Remove image'}
                                            </Button>
                                        )}
                                    </div>
                                )}
                                {errors.image && <small className="p-error" id="blog-image-error">{errors.image}</small>}
                            </div>

                            <div className="blog-form__publish">
                                <Checkbox
                                    id="blog-is-published"
                                    className="blog-form__checkbox"
                                    checked={Boolean(data.is_published)}
                                    onChange={(event) => setData('is_published', event.target.checked)}
                                />
                                <label htmlFor="blog-is-published">Publish this blog</label>
                            </div>
                        </div>
                        {!isEdit && actions}
                    </form>
                </Card>
            </section>
        </>
    );
}

BlogForm.layout = (page) => <AdminLayout>{page}</AdminLayout>;
