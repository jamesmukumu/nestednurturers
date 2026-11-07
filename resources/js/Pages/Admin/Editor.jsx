import { Head } from '@inertiajs/react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'primereact/card';
import RichTextEditor from '../../Components/RichTextEditor';
import AdminLayout from '../../Layouts/AdminLayout';
import { setContent } from '../../store/editorSlice';

function EditorPage() {
    const dispatch = useDispatch();
    const content = useSelector((state) => state.editor.content);

    return (
        <>
            <Head title="Editor" />
            <section className="admin-page">
                <header className="admin-page__header">
                    <h1>Rich text editor</h1>
                    <p>Draft content and preview the result.</p>
                </header>
                <Card className="admin-page__card">
                    <RichTextEditor
                        value={content}
                        onChange={(value) => dispatch(setContent(value))}
                        placeholder="Write your content..."
                        height={360}
                    />
                </Card>
                <section className="admin-page" aria-labelledby="editor-preview-title">
                    <header className="admin-page__header">
                        <h2 id="editor-preview-title">Live preview</h2>
                    </header>
                    <Card className="admin-page__card">
                        <iframe
                            className="admin-editor__preview"
                            title="Rich text content preview"
                            sandbox=""
                            srcDoc={`<!doctype html><html><body>${content}</body></html>`}
                        />
                    </Card>
                </section>
            </section>
        </>
    );
}

EditorPage.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default EditorPage;
