import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
    },
});

let lastSidebarCollapsed = store.getState().ui.sidebarCollapsed;

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

export default store;
