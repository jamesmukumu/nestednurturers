import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        content: '<h2>Welcome to the editor</h2><p>Start writing your content here.</p>',
    },
    reducers: {
        setContent(state, action) {
            state.content = action.payload;
        },
    },
});

export const { setContent } = editorSlice.actions;
export default editorSlice.reducer;
