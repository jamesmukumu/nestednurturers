import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        theme: themeReducer,
    },
});

let lastSidebarCollapsed = store.getState().ui.sidebarCollapsed;
let lastThemeMode = store.getState().theme.mode;

store.subscribe(() => {
    if (typeof window === 'undefined') return;

    const sidebarCollapsed = store.getState().ui.sidebarCollapsed;
    if (sidebarCollapsed === lastSidebarCollapsed) return;
    lastSidebarCollapsed = sidebarCollapsed;

    try {
        window.localStorage.setItem(
            'admin-sidebar-collapsed',
            String(store.getState().ui.sidebarCollapsed),
        );
    } catch (error) {
        console.error('Unable to save the sidebar preference to local storage.', error);
    }
});

store.subscribe(() => {
    if (typeof window === 'undefined') return;

    const themeMode = store.getState().theme.mode;
    if (themeMode === lastThemeMode) return;
    lastThemeMode = themeMode;

    try {
        window.localStorage.setItem('app-theme', themeMode);
    } catch (error) {
        console.error('Unable to save the theme preference to local storage.', error);
    }
});

export default store;
