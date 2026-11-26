import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import joditStyles from "jodit/es2021/jodit.min.css?inline";

function IsolatedEditor({ Jodit, id, label, config, value, onChange, onBlur }) {
    const textareaRef = useRef(null);
    const editorRef = useRef(null);
    const callbacksRef = useRef({ onChange, onBlur });
    const valueRef = useRef(value);
    const emittedValuesRef = useRef([]);
    callbacksRef.current = { onChange, onBlur };
    valueRef.current = value;

    useEffect(() => {
        const host = textareaRef.current.getRootNode().host;
        const editor = Jodit.make(textareaRef.current, config);
        let restoreFullscreen = null;
        let toolbarObserver = null;
        let fullscreenSnapshot = null;
        const captureFullscreen = (enable) => {
            if (
                enable ??
                !editor.container.classList.contains("jodit_fullsize")
            ) {
                const scrollArea = host.closest(".admin-shell__content-scroll");
                fullscreenSnapshot = {
                    previous: [
                        document.documentElement,
                        document.body,
                        scrollArea,
                    ]
                        .filter(Boolean)
                        .map((element) => ({
                            element,
                            overflow: element.style.overflow,
                            left: element.scrollLeft,
                            top: element.scrollTop,
                        })),
                    windowScroll: [window.scrollX, window.scrollY],
                    focused: host.shadowRoot.activeElement,
                };
            }
        };
        // Capture before Jodit removes its container from the normal document flow.
        editor.events.on("toggleFullSize", captureFullscreen, { top: true });
        const syncFullscreen = () => {
            const enabled =
                editor.container.classList.contains("jodit_fullsize");
            if (enabled && !restoreFullscreen) {
                const { previous, windowScroll, focused } = fullscreenSnapshot;
                host.classList.add("rich-text-editor--fullscreen");
                previous.forEach(({ element }) => {
                    element.style.overflow = "hidden";
                });
                restoreFullscreen = () => {
                    host.classList.remove("rich-text-editor--fullscreen");
                    previous.forEach(({ element, overflow, left, top }) => {
                        element.style.overflow = overflow;
                        element.scrollLeft = left;
                        element.scrollTop = top;
                    });
                    window.scrollTo(...windowScroll);
                    if (focused?.isConnected)
                        focused.focus({ preventScroll: true });
                };
            } else if (!enabled && restoreFullscreen) {
                restoreFullscreen();
                restoreFullscreen = null;
                fullscreenSnapshot = null;
            }
        };
        editor.events.on("toggleFullSize", syncFullscreen);
        editorRef.current = editor;
        editor.events
            .on("change", (content) => {
                emittedValuesRef.current.push(content);
                if (emittedValuesRef.current.length > 20)
                    emittedValuesRef.current.shift();
                callbacksRef.current.onChange(content);
            })
            .on("blur", () => callbacksRef.current.onBlur?.(editor.value));

        const labelEditor = () => {
            if (editorRef.current === editor) {
                editor.editor.setAttribute("aria-label", label);
                editor.editor.setAttribute("role", "textbox");
                editor.editor.setAttribute("aria-multiline", "true");
                // A wrapped full toolbar must leave a usable writing area below it.
                const fitToolbar = () => {
                    if (editorRef.current !== editor) return;
                    const minimum = Math.max(
                        config.minHeight,
                        (editor.toolbarContainer?.offsetHeight || 0) +
                            (editor.statusbar?.getHeight() || 0) +
                            162,
                    );
                    if (editor.container.style.minHeight !== `${minimum}px`) {
                        editor.container.style.minHeight = `${minimum}px`;
                        editor.events.fire("afterResize");
                    }
                };
                toolbarObserver = new ResizeObserver(fitToolbar);
                if (editor.toolbarContainer)
                    toolbarObserver.observe(editor.toolbarContainer);
                fitToolbar();
            }
        };
        if (editor.isReady) {
            labelEditor();
        } else {
            editor
                .waitForReady()
                .then(labelEditor)
                .catch((error) =>
                    console.error(
                        "Unable to initialize the rich-text editor.",
                        error,
                    ),
                );
        }

        return () => {
            toolbarObserver?.disconnect();
            editor.events.off("toggleFullSize", captureFullscreen);
            editor.events.off("toggleFullSize", syncFullscreen);
            restoreFullscreen?.();
            restoreFullscreen = null;
            editorRef.current = null;
            if (editor.isReady) {
                editor.destruct();
            } else {
                editor
                    .waitForReady()
                    .then((readyEditor) => readyEditor.destruct())
                    .catch((error) =>
                        console.error(
                            "Unable to dispose of the rich-text editor.",
                            error,
                        ),
                    );
            }
        };
    }, [Jodit, config, label]);

    useEffect(() => {
        const editor = editorRef.current;
        if (!editor) return;

        const updateValue = () => {
            if (editorRef.current !== editor) return;
            const echoIndex = emittedValuesRef.current.indexOf(
                valueRef.current,
            );
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
            editor
                .waitForReady()
                .then(updateValue)
                .catch((error) =>
                    console.error(
                        "Unable to initialize the rich-text editor value.",
                        error,
                    ),
                );
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
    placeholder = "Write something...",
    height = 360,
    readOnly = false,
}) {
    const [Jodit, setJodit] = useState(null);
    const [loadError, setLoadError] = useState(false);
    const [shadowRoot, setShadowRoot] = useState(null);
    const hostRef = useRef(null);
    const isDark = useSelector((state) => state.theme.resolved === "dark");
    const config = useMemo(
        () => ({
            height,
            minHeight: 240,
            width: "100%",
            readonly: readOnly,
            theme: isDark ? "dark" : "default",
            placeholder,
            toolbarAdaptive: false,
            toolbarSticky: false,
            toolbarButtonSize: "middle",
            shadowRoot,
            globalFullSize: true,
        }),
        [height, isDark, placeholder, readOnly, shadowRoot],
    );

    useEffect(() => {
        const host = hostRef.current;
        const root = host.shadowRoot || host.attachShadow({ mode: "open" });
        if (!root.querySelector("style[data-jodit-styles]")) {
            const style = document.createElement("style");
            style.dataset.joditStyles = "";
            style.textContent = `${joditStyles.replace(/:root\b/g, ":host")}
                :host { display: block; min-width: 0; }
                :host(.rich-text-editor--fullscreen) { position: fixed; inset: 0; width: 100vw; height: 100dvh; z-index: 2000; background: var(--app-surface); }
                :host(.rich-text-editor--fullscreen) .jodit-container.jodit_fullsize { position: absolute; inset: 0; width: 100% !important; height: 100% !important; min-height: 0 !important; border-radius: 0; }
                :host(.rich-text-editor--fullscreen) .jodit-workplace { min-height: 0 !important; }
                .jodit-toolbar-editor-collection { flex-wrap: wrap; }
                .jodit-toolbar-editor-collection .jodit-toolbar-editor-collection_mode_horizontal { flex-wrap: wrap; }
                .jodit-container { max-width: 100%; border-color: var(--surface-border); border-radius: var(--border-radius); }
                .jodit-toolbar__box { max-width: 100%; }
                .jodit-workplace { min-width: 0; }`;
            style.textContent += `
                .jodit-container, .jodit-dialog, .jodit-popup {
                    --jd-color-border: var(--app-border);
                    --jd-color-text: var(--app-text);
                    --jd-color-label: var(--app-text-secondary);
                    --jd-color-placeholder: var(--app-text-muted);
                    --jd-color-border-selected: var(--app-text-secondary);
                    --jd-color-background-active: var(--surface-hover);
                    --jd-color-background-selection: var(--surface-hover);
                    --jd-color-text-selection: var(--app-text);
                    --jd-color-background-selection-opacity50: var(--surface-hover);
                    --jd-color-panel: var(--app-surface);
                    --jd-color-text-icons: var(--app-text-secondary);
                    --jd-color-background-default: var(--app-surface);
                    --jd-color-background-light-gray: var(--admin-warm);
                    --jd-dark-background-color: var(--app-surface);
                    --jd-dark-toolbar-color: var(--admin-warm);
                    --jd-color-icon: var(--app-text-secondary);
                    --jd-dark-icon-color: var(--app-text-secondary);
                    --jd-dark-text-color: var(--app-text);
                    --jd-dark-border-color: var(--app-border);
                    --jd-dark-color-border-selected: var(--app-text-secondary);
                }
                .jodit-toolbar__box, .jodit-status-bar, .jodit-dialog, .jodit-popup {
                    font-family: var(--admin-font-body);
                    font-size: var(--admin-text-label);
                }
                .jodit-toolbar-button__button:hover, .jodit-toolbar-button__trigger:hover {
                    background: var(--surface-hover);
                }
                .jodit-toolbar-button__button:focus-visible, .jodit-toolbar-button__trigger:focus-visible {
                    outline: 2px solid var(--admin-focus);
                    outline-offset: -2px;
                }
                .jodit-ui-button-variants_variant_primary,
                .jodit-ui-button-variants_variant_primary:hover:not([disabled]),
                .jodit-ui-button-variants_variant_primary:active:not([disabled]) {
                    background-color: var(--surface-hover);
                    color: var(--app-text);
                }
                .jodit-ui-button-variants_variant_primary svg {
                    fill: currentColor;
                    stroke: currentColor;
                }
                .jodit-ui-button-variants_variant_primary:focus:not([disabled]) {
                    outline-color: var(--admin-focus);
                }
                .jodit-dialog a, .jodit-popup a { color: var(--app-text-secondary); }
                .jodit-ui-ai-assistant__spinner:before { border-top-color: var(--app-text-secondary); }
                input[type="checkbox"], input[type="radio"] { accent-color: var(--app-text-secondary); }`;
            root.appendChild(style);
        }
        setShadowRoot(root);
    }, []);

    useEffect(() => {
        let active = true;

        Promise.all([
            import("jodit/esm/index.js"),
            import("jodit/esm/plugins/all.js"),
        ])
            .then(([module]) => {
                if (active) setJodit(() => module.Jodit);
            })
            .catch((error) => {
                if (active) {
                    console.error(
                        "Unable to load the rich-text editor.",
                        error,
                    );
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
                    The rich-text editor could not be loaded. Refresh the page
                    to try again.
                </div>
            ) : !Jodit || !shadowRoot ? (
                <div className="rich-text-editor__loading" aria-live="polite">
                    Loading editor...
                </div>
            ) : (
                createPortal(
                    <IsolatedEditor
                        Jodit={Jodit}
                        id={id}
                        label={label}
                        config={config}
                        value={value}
                        onChange={(content) => onChange(content)}
                        onBlur={(content) => {
                            if (typeof content === "string") onChange(content);
                            onBlur?.();
                        }}
                    />,
                    shadowRoot,
                )
            )}
        </>
    );
}
