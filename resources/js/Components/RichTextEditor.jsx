import { useEffect, useMemo, useState } from 'react';
import 'jodit/es2021/jodit.min.css';

export default function RichTextEditor({
    value,
    onChange,
    placeholder = 'Write something...',
    height = 360,
    readOnly = false,
}) {
    const [Editor, setEditor] = useState(null);
    const config = useMemo(
        () => ({
            height,
            minHeight: 240,
            width: '100%',
            readonly: readOnly,
            placeholder,
            toolbarAdaptive: true,
            toolbarSticky: false,
            toolbarButtonSize: 'middle',
            buttonsMD: [
                'bold',
                'italic',
                'underline',
                '|',
                'ul',
                'ol',
                '|',
                'font',
                'fontsize',
                '|',
                'align',
                'link',
                'image',
                '|',
                'undo',
                'redo',
            ],
            buttonsSM: ['bold', 'italic', '|', 'ul', 'ol', '|', 'link', 'undo', 'redo'],
            buttonsXS: ['bold', 'italic', '|', 'ul', 'ol', '|', 'undo', 'redo'],
        }),
        [height, placeholder, readOnly],
    );

    useEffect(() => {
        let active = true;

        import('jodit-react')
            .then(({ default: JoditEditor }) => {
                if (active) setEditor(() => JoditEditor);
            })
            .catch((error) => {
                console.error('Unable to load the rich text editor.', error);
            });

        return () => {
            active = false;
        };
    }, []);

    if (!Editor) {
        return (
            <div className="admin-editor__loading" aria-live="polite">
                Loading editor...
            </div>
        );
    }

    return (
        <div className="admin-editor">
            <Editor
                config={config}
                value={value}
                onBlur={(content) => onChange(content)}
            />
        </div>
    );
}
