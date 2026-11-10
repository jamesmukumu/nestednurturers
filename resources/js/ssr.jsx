import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { renderToString } from "react-dom/server";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "./store";
import ThemeManager from "./Components/ThemeManager";
import lightThemeUrl from "primereact/resources/themes/lara-light-indigo/theme.css?url";
import darkThemeUrl from "primereact/resources/themes/lara-dark-indigo/theme.css?url";
 
const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const themeUrls = { light: lightThemeUrl, dark: darkThemeUrl };
const publicPages = import.meta.glob([
    "./Pages/About.jsx",
    "./Pages/Blog/Show.jsx",
    "./Pages/Blogs/Index.jsx",
    "./Pages/Contacts.jsx",
    "./Pages/Faq.jsx",
    "./Pages/Home.jsx",
    "./Pages/Pricing.jsx",
    "./Pages/Services.jsx",
]);

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.jsx`,
                publicPages,
            ),
        setup({ App, props }) {
            return (
                <Provider store={store}>
                    <PrimeReactProvider>
                        <ThemeManager themeUrls={themeUrls} />
                        <App {...props} />
                    </PrimeReactProvider>
                </Provider>
            );
        },
    }),
);
