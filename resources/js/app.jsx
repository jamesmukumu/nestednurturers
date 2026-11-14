import '../css/app.css';
import '../css/theme.css';
import './bootstrap';

import lightThemeUrl from "primereact/resources/themes/lara-light-indigo/theme.css?url";
import darkThemeUrl from "primereact/resources/themes/lara-dark-indigo/theme.css?url";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import '../css/buttons.css';


import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import {PrimeReactProvider} from "primereact/api"
import { Provider } from 'react-redux';
import { store } from './store';
import ThemeManager from './Components/ThemeManager';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const pageLoaderColor = '#FF76DC';
const themeUrls = { light: lightThemeUrl, dark: darkThemeUrl };

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        const themeInsertionPoint = document.getElementById('primereact-theme-insertion-point');
        if (!themeInsertionPoint) {
            throw new Error('PrimeReact theme insertion point is missing.');
        }

        let themeLink = document.getElementById('primereact-theme');
        if (!themeLink) {
            themeLink = document.createElement('link');
            themeLink.id = 'primereact-theme';
            themeLink.rel = 'stylesheet';
        }
        themeInsertionPoint.after(themeLink);
        themeLink.href = themeUrls[store.getState().theme.resolved];

        root.render(
       <Provider store={store}>
         <PrimeReactProvider>
           <ThemeManager themeUrls={themeUrls} />
           <App {...props} />
         </PrimeReactProvider>
       </Provider>
        
        );
    },
    progress: {
        color: pageLoaderColor,
    },
});
