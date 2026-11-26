import { useEffect, useState } from "react";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import Button from "@/Components/Button";

export default function BlogCategoryDialog({
    visible,
    onHide,
    onCreated,
    toast,
    category = null,
}) {
    const [data, setData] = useState({ title: "", description: "" });
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (visible) {
            setData({
                title: category?.title || "",
                description: category?.description || "",
            });
            setErrors({});
        }
    }, [visible, category]);

    const reset = () => {
        setData({ title: "", description: "" });
        setErrors({});
    };

    const close = () => {
        if (saving) return;
        reset();
        onHide();
    };

    const save = async (event) => {
        event.preventDefault();
        if (saving) return;
        setSaving(true);
        setErrors({});

        try {
            const response = category
                ? await axios.patch(
                      `/dashboard/blog-categories/${category.id}`,
                      data,
                  )
                : await axios.post("/blog-categories", data);
            onCreated(response.data.category);
            toast.current?.show({
                severity: "success",
                summary: category ? "Category updated" : "Category created",
                detail: category
                    ? "Your changes have been saved."
                    : "The new category is ready to use.",
            });
            reset();
            onHide();
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 422) {
                setErrors(error.response.data.errors || {});
            } else {
                toast.current?.show({
                    severity: "error",
                    summary: category
                        ? "Unable to update category"
                        : "Unable to create category",
                    detail: "Please try again.",
                });
            }
        } finally {
            setSaving(false);
        }
    };

    return (
        <Dialog
            header={category ? "Edit Category" : "Create Category"}
            visible={visible}
            onHide={close}
            modal
            draggable={false}
            closable={!saving}
            closeOnEscape={!saving}
            className="blog-category-dialog"
            footer={
                <div className="blog-category-dialog__footer">
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={close}
                        disabled={saving}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        form="blog-category-form"
                        loading={saving}
                        loadingLabel="Saving category…"
                    >
                        Save category
                    </Button>
                </div>
            }
        >
            <form
                id="blog-category-form"
                className="blog-form__fields"
                onSubmit={save}
                noValidate
            >
                <div className="blog-form__field">
                    <label htmlFor="blog-category-title">
                        Title <span aria-hidden="true">*</span>
                    </label>
                    <InputText
                        id="blog-category-title"
                        value={data.title}
                        maxLength={255}
                        autoFocus
                        disabled={saving}
                        invalid={Boolean(errors.title)}
                        aria-invalid={Boolean(errors.title)}
                        aria-describedby={
                            errors.title
                                ? "blog-category-title-error"
                                : undefined
                        }
                        onChange={(event) =>
                            setData((current) => ({
                                ...current,
                                title: event.target.value,
                            }))
                        }
                    />
                    {errors.title && (
                        <small
                            className="p-error"
                            id="blog-category-title-error"
                        >
                            {errors.title[0]}
                        </small>
                    )}
                </div>
                <div className="blog-form__field">
                    <label htmlFor="blog-category-description">
                        Description
                    </label>
                    <InputTextarea
                        id="blog-category-description"
                        value={data.description}
                        rows={4}
                        autoResize
                        disabled={saving}
                        invalid={Boolean(errors.description)}
                        aria-invalid={Boolean(errors.description)}
                        aria-describedby={
                            errors.description
                                ? "blog-category-description-error"
                                : undefined
                        }
                        onChange={(event) =>
                            setData((current) => ({
                                ...current,
                                description: event.target.value,
                            }))
                        }
                    />
                    {errors.description && (
                        <small
                            className="p-error"
                            id="blog-category-description-error"
                        >
                            {errors.description[0]}
                        </small>
                    )}
                </div>
            </form>
        </Dialog>
    );
}
