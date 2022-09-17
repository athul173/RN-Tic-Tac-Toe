import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const stackSlice = createSlice({
    name: 'stack',
    initialState: {
        welcome: true,
    },
    reducers: {
        setWelcome(state, action: PayloadAction<boolean>) {
            state.welcome = action.payload;
        },
    },
});

export const { setWelcome } = stackSlice.actions;

export default stackSlice.reducer;
