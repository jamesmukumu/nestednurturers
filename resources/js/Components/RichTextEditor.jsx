import { useEffect, useMemo, useState } from 'react';
import 'jodit/es2021/jodit.min.css';

export default function RichTextEditor({
    id,
    value,
    onChange,
    onBlur,
    placeholder = 'Write something...',
    height = 360,
    readOnly = false,
}) {
    const [Editor, setEditor] = useState(null);
    const [loadError, setLoadError] = useState(false);
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
            .catch(() => {
                if (active) setLoadError(true);
            });

        return () => {
            active = false;
        };
    }, []);

    if (loadError) {
        return (
            <div className="rich-text-editor__loading p-error" role="alert">
                The rich-text editor could not be loaded. Refresh the page to try again.
            </div>
        );
    }

    if (!Editor) {
        return (
            <div className="rich-text-editor__loading" aria-live="polite">
                Loading editor...
            </div>
        );
    }

    return (
        <div className="rich-text-editor">
            <Editor
                id={id}
                config={config}
                value={value}
                onChange={(content) => onChange(content)}
                onBlur={(content) => {
                    if (typeof content === 'string') onChange(content);
                    onBlur?.();
                }}
            />
        </div>
    );
}
