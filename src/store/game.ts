import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Restart = boolean | null;

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        pause: true,
        userTurn: true,
        result: '',
        restart: null as Restart,
    },
    reducers: {
        setUserTurn(state, action: PayloadAction<boolean>) {
            state.userTurn = action.payload;
        },
        setPause(state, action: PayloadAction<boolean>) {
            state.pause = action.payload;
        },
        setResult(state, action: PayloadAction<'You' | 'CPU' | 'Draw' | ''>) {
            state.result = action.payload;
        },
        setRestart(state, action: PayloadAction<Restart>) {
            state.restart = action.payload;
        },
    },
});

export const { setUserTurn, setPause, setResult, setRestart } = gameSlice.actions;
export default gameSlice.reducer;
