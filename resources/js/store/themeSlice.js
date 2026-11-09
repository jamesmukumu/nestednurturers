import { createSlice } from '@reduxjs/toolkit';

const storageKey = 'app-theme';
const validModes = ['light', 'dark', 'system'];

function prefersDark() {
    return typeof window !== 'undefined'
        && typeof window.matchMedia === 'function'
        && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getInitialTheme() {
    let mode = 'system';

    if (typeof window !== 'undefined') {
        try {
            const storedMode = window.localStorage.getItem(storageKey);
            if (validModes.includes(storedMode)) mode = storedMode;
        } catch (error) {
            console.error('Unable to read the theme preference from local storage.', error);
        }
    }

    return {
        mode,
        resolved: mode === 'system' ? (prefersDark() ? 'dark' : 'light') : mode,
    };
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: getInitialTheme,
    reducers: {
        setMode(state, action) {
            if (validModes.includes(action.payload)) {
                state.mode = action.payload;
                if (action.payload !== 'system') state.resolved = action.payload;
            }
        },
        toggleTheme(state) {
            state.mode = state.resolved === 'dark' ? 'light' : 'dark';
            state.resolved = state.mode;
        },
        setResolved(state, action) {
            if (action.payload === 'light' || action.payload === 'dark') {
                state.resolved = action.payload;
            }
        },
    },
});

export const { setMode, toggleTheme, setResolved } = themeSlice.actions;
export const selectThemeMode = (state) => state.theme.mode;
export const selectResolvedTheme = (state) => state.theme.resolved;
export const selectIsDark = (state) => state.theme.resolved === 'dark';

export default themeSlice.reducer;
