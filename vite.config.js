import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import inertia from "@inertiajs/vite";
export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        inertia({ ssr: { entry: "resources/js/ssr.jsx" } }),
    ],
    ssr: {
        noExternal: [/^primereact/],
    },
});
