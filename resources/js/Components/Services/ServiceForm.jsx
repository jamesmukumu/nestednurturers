import { useEffect, useRef, useState } from 'react';
import { Head, router, useForm } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import Checkbox from '@/Components/Checkbox';
import RichTextEditor from '@/Components/RichTextEditor';
import Button from '@/Components/Button';
import AdminLayout from '@/Layouts/AdminLayout';
import '@/Pages/Admin/Services/services.css';

const maximumImageSize = 2 * 1024 * 1024;
const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];

function imageError(file) {
    if (!file) return 'Please choose a service image.';
    const extension = file.name.split('.').pop()?.toLowerCase();
    return !allowedTypes.includes(file.type) || !allowedExtensions.includes(extension) || file.size > maximumImageSize
        ? 'Choose a JPG, PNG, or WEBP image up to 2MB.'
        : '';
}

function hasPlainText(value) {
    const container = document.createElement('div');
    container.innerHTML = value;
    return Boolean((container.textContent || container.innerText || '').replace(/\u00a0/g, ' ').trim());
}

export default function ServiceForm({ service = null }) {
    const isEdit = Boolean(service);
    const toast = useRef(null);
    const [saving, setSaving] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(service?.image_url || null);
    const { data, setData, errors, setError, clearErrors } = useForm({
        title: service?.title || '',
        meta_overview: service?.meta_overview || '',
        meta_description: service?.meta_description || '',
        image: null,
        published: service?.published || false,
    });

    useEffect(() => {
        if (!data.image) {
            setPreviewUrl(service?.image_url || null);
            return undefined;
        }
        const url = URL.createObjectURL(data.image);
        setPreviewUrl(url);
        return () => URL.revokeObjectURL(url);
    }, [data.image, service?.image_url]);

    const onImageSelected = (event) => {
        const file = event.files[0];
        const error = imageError(file);
        if (error) {
            setData('image', null);
            setError('image', error);
            return;
        }
        setData('image', file);
        clearErrors('image');
    };

    const submit = (event) => {
        event.preventDefault();
        const invalid = !data.title.trim() || !hasPlainText(data.meta_overview) || !hasPlainText(data.meta_description) || (!isEdit && !data.image);
        if (!data.title.trim()) setError('title', 'Please enter a title.');
        if (!hasPlainText(data.meta_overview)) setError('meta_overview', 'Please enter a meta overview.');
        if (!hasPlainText(data.meta_description)) setError('meta_description', 'Please enter a meta description.');
        if (!isEdit && !data.image) setError('image', 'Please choose a service image.');
        if (invalid) return;

        setSaving(true);
        router.post(isEdit ? `/dashboard/services/${service.id}` : '/dashboard/services', {
            ...data,
            ...(isEdit ? { _method: 'put' } : {}),
        }, {
            forceFormData: true,
            onError: (serverErrors) => {
                setError(serverErrors);
                toast.current?.show({ severity: 'error', summary: 'Unable to save service', detail: 'Review the highlighted fields and try again.' });
            },
            onHttpException: () => toast.current?.show({ severity: 'error', summary: 'Unable to save service', detail: 'The server could not save this service. Please try again.' }),
            onException: () => toast.current?.show({ severity: 'error', summary: 'Unable to save service', detail: 'A network error interrupted the request. Please try again.' }),
            onFinish: () => setSaving(false),
        });
    };

    const actions = <div className="service-form-page__actions"><Button href="/dashboard/services" variant="secondary">Cancel</Button><Button type="submit" form="service-form" loading={saving} loadingLabel={isEdit ? 'Saving changes…' : 'Creating service…'} leftIcon={<i className="pi pi-check" aria-hidden="true" />}>{isEdit ? 'Save changes' : 'Create Service'}</Button></div>;

    return <><Head title={isEdit ? 'Edit Service' : 'Create Service'} /><Toast ref={toast} position="top-right" /><section className="admin-page service-form-page"><header className="admin-page__header service-form-page__header"><div><h1>{isEdit ? 'Edit Service' : 'Create Service'}</h1><p>{isEdit ? 'Update your service content and image.' : 'Add a service and prepare it for publishing.'}</p></div>{isEdit && actions}</header><Card className={`admin-page__card service-form__card${isEdit ? '' : ' service-form__card--create'}`}><form id="service-form" onSubmit={submit} noValidate><div className="service-form__fields"><div className="service-form__field"><label htmlFor="service-title">Title <span aria-hidden="true">*</span></label><InputText id="service-title" value={data.title} maxLength={255} invalid={Boolean(errors.title)} aria-invalid={Boolean(errors.title)} onChange={(event) => { setData('title', event.target.value); clearErrors('title'); }} />{errors.title && <small className="p-error">{errors.title}</small>}</div><div className="service-form__field"><label htmlFor="service-meta-overview">Meta overview <span aria-hidden="true">*</span></label><div className={`service-form__editor${errors.meta_overview ? ' p-invalid' : ''}`}><RichTextEditor id="service-meta-overview" label="Meta overview" value={data.meta_overview} onChange={(value) => { setData('meta_overview', value); clearErrors('meta_overview'); }} placeholder="Summarize this service..." height={200} /></div>{errors.meta_overview && <small className="p-error">{errors.meta_overview}</small>}</div><div className="service-form__field"><label htmlFor="service-meta-description">Meta description <span aria-hidden="true">*</span></label><div className={`service-form__editor${errors.meta_description ? ' p-invalid' : ''}`}><RichTextEditor id="service-meta-description" label="Meta description" value={data.meta_description} onChange={(value) => { setData('meta_description', value); clearErrors('meta_description'); }} placeholder="Describe this service..." height={360} /></div>{errors.meta_description && <small className="p-error">{errors.meta_description}</small>}</div><div className="service-form__field"><label htmlFor="service-image-input">Service image {!isEdit && <span aria-hidden="true">*</span>}</label><FileUpload id="service-image" mode="basic" name="image" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" maxFileSize={maximumImageSize} customUpload auto={false} chooseLabel={data.image ? 'Replace image' : 'Choose image'} chooseOptions={{ icon: 'pi pi-upload', className: 'app-button app-button--secondary app-button--md' }} onSelect={onImageSelected} onValidationFail={() => setError('image', 'Choose a JPG, PNG, or WEBP image up to 2MB.')} pt={{ input: { id: 'service-image-input', 'aria-invalid': Boolean(errors.image) }, chooseButton: { 'aria-label': 'Choose service image' } }} /><small className="service-form__hint">JPG, PNG, or WEBP, up to 2MB.</small>{previewUrl && <div className="service-form__image-preview"><img src={previewUrl} alt="Service preview" />{data.image && <Button type="button" variant="ghost" leftIcon={<i className="pi pi-times" aria-hidden="true" />} onClick={() => { setData('image', null); clearErrors('image'); }}>{isEdit ? 'Use current image' : 'Remove image'}</Button>}</div>}{errors.image && <small className="p-error">{errors.image}</small>}</div><div className="service-form__publish"><Checkbox id="service-published" className="service-form__checkbox" checked={Boolean(data.published)} onChange={(event) => setData('published', event.target.checked)} /><label htmlFor="service-published">Publish this service</label></div></div>{!isEdit && actions}</form></Card></section></>;
}

ServiceForm.layout = (page) => <AdminLayout>{page}</AdminLayout>;
