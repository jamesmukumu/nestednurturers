import { createSlice } from '@reduxjs/toolkit';

function readSidebarPreference() {
    try {
        return window.localStorage.getItem('admin-sidebar-collapsed') === 'true';
    } catch (error) {
        console.error('Unable to read the sidebar preference from local storage.', error);
        return false;
    }
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        sidebarCollapsed: typeof window !== 'undefined' ? readSidebarPreference() : false,
        mobileSidebarOpen: false,
    },
    reducers: {
        toggleSidebarCollapsed(state) {
            state.sidebarCollapsed = !state.sidebarCollapsed;
        },
        setMobileSidebarOpen(state, action) {
            state.mobileSidebarOpen = action.payload;
        },
        toggleMobileSidebar(state) {
            state.mobileSidebarOpen = !state.mobileSidebarOpen;
        },
    },
});

export const {
    toggleSidebarCollapsed,
    setMobileSidebarOpen,
    toggleMobileSidebar,
} = uiSlice.actions;

export default uiSlice.reducer;
