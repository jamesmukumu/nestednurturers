import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import joditStyles from 'jodit/es2021/jodit.min.css?inline';

function IsolatedEditor({ Jodit, id, label, config, value, onChange, onBlur }) {
    const textareaRef = useRef(null);
    const editorRef = useRef(null);
    const callbacksRef = useRef({ onChange, onBlur });
    const valueRef = useRef(value);
    const emittedValuesRef = useRef([]);
    callbacksRef.current = { onChange, onBlur };
    valueRef.current = value;

    useEffect(() => {
        const editor = Jodit.make(textareaRef.current, config);
        editorRef.current = editor;
        editor.events
            .on('change', (content) => {
                emittedValuesRef.current.push(content);
                if (emittedValuesRef.current.length > 20) emittedValuesRef.current.shift();
                callbacksRef.current.onChange(content);
            })
            .on('blur', () => callbacksRef.current.onBlur?.(editor.value));

        const labelEditor = () => {
            if (editorRef.current === editor) {
                editor.editor.setAttribute('aria-label', label);
                editor.editor.setAttribute('role', 'textbox');
                editor.editor.setAttribute('aria-multiline', 'true');
            }
        };
        if (editor.isReady) {
            labelEditor();
        } else {
            editor.waitForReady()
                .then(labelEditor)
                .catch((error) => console.error('Unable to initialize the rich-text editor.', error));
        }

        return () => {
            editorRef.current = null;
            if (editor.isReady) {
                editor.destruct();
            } else {
                editor.waitForReady()
                    .then((readyEditor) => readyEditor.destruct())
                    .catch((error) => console.error('Unable to dispose of the rich-text editor.', error));
            }
        };
    }, [Jodit, config, label]);

    useEffect(() => {
        const editor = editorRef.current;
        if (!editor) return;

        const updateValue = () => {
            if (editorRef.current !== editor) return;
            const echoIndex = emittedValuesRef.current.indexOf(valueRef.current);
            if (echoIndex !== -1) {
                emittedValuesRef.current.splice(0, echoIndex + 1);
            } else if (editor.value !== valueRef.current) {
                emittedValuesRef.current = [];
                editor.value = valueRef.current;
            }
        };

        if (editor.isReady) {
            updateValue();
        } else {
            editor.waitForReady()
                .then(updateValue)
                .catch((error) => console.error('Unable to initialize the rich-text editor value.', error));
        }
    }, [value, Jodit, config]);

    return <textarea id={id} ref={textareaRef} defaultValue={value} />;
}

export default function RichTextEditor({
    id,
    label,
    value,
    onChange,
    onBlur,
    placeholder = 'Write something...',
    height = 360,
    readOnly = false,
}) {
    const [Jodit, setJodit] = useState(null);
    const [loadError, setLoadError] = useState(false);
    const [shadowRoot, setShadowRoot] = useState(null);
    const hostRef = useRef(null);
    const isDark = useSelector((state) => state.theme.resolved === 'dark');
    const config = useMemo(
        () => ({
            height,
            minHeight: 240,
            width: '100%',
            readonly: readOnly,
            theme: isDark ? 'dark' : 'default',
            placeholder,
            toolbarAdaptive: true,
            toolbarSticky: false,
            toolbarButtonSize: 'middle',
            shadowRoot,
            globalFullSize: false,
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
        [height, isDark, placeholder, readOnly, shadowRoot],
    );

    useEffect(() => {
        const host = hostRef.current;
        const root = host.shadowRoot || host.attachShadow({ mode: 'open' });
        if (!root.querySelector('style[data-jodit-styles]')) {
            const style = document.createElement('style');
            style.dataset.joditStyles = '';
            style.textContent = `${joditStyles.replace(/:root\b/g, ':host')}
                :host { display: block; min-width: 0; }
                .jodit-container { max-width: 100%; border-color: var(--surface-border); border-radius: var(--border-radius); }
                .jodit-toolbar__box { max-width: 100%; }
                .jodit-workplace { min-width: 0; }`;
            root.appendChild(style);
        }
        setShadowRoot(root);
    }, []);

    useEffect(() => {
        let active = true;

        Promise.all([
            import('jodit/esm/index.js'),
            import('jodit/esm/plugins/all.js'),
        ])
            .then(([module]) => {
                if (active) setJodit(() => module.Jodit);
            })
            .catch((error) => {
                if (active) {
                    console.error('Unable to load the rich-text editor.', error);
                    setLoadError(true);
                }
            });

        return () => {
            active = false;
        };
    }, []);

    return (
        <>
            <div className="rich-text-editor" ref={hostRef} />
            {loadError ? (
                <div className="rich-text-editor__loading p-error" role="alert">
                    The rich-text editor could not be loaded. Refresh the page to try again.
                </div>
            ) : !Jodit || !shadowRoot ? (
                <div className="rich-text-editor__loading" aria-live="polite">
                    Loading editor...
                </div>
            ) : createPortal(
                <IsolatedEditor
                    Jodit={Jodit}
                    id={id}
                    label={label}
                    config={config}
                    value={value}
                    onChange={(content) => onChange(content)}
                    onBlur={(content) => {
                        if (typeof content === 'string') onChange(content);
                        onBlur?.();
                    }}
                />,
                shadowRoot,
            )}
        </>
    );
}
