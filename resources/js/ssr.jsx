import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { renderToString } from "react-dom/server";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "./store";
 
const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.jsx`,
                import.meta.glob("./Pages/**/*.jsx"),
            ),
        setup({ App, props }) {
            return (
                <Provider store={store}>
                    <PrimeReactProvider>
                        <App {...props} />
                    </PrimeReactProvider>
                </Provider>
            );
        },
    }),
);
