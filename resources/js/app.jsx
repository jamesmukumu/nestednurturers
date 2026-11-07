import '../css/app.css';
import './bootstrap';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';


import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import {PrimeReactProvider} from "primereact/api"
import { Provider } from 'react-redux';
import { store } from './store';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
       <Provider store={store}>
         <PrimeReactProvider>
           <App {...props} />
         </PrimeReactProvider>
       </Provider>
        
        );
    },
    progress: {
        color: '#4B5563',
    },
});
