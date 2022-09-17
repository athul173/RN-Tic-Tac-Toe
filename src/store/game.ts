import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restart, GameSymbols, Result } from '../constants/Types';

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        pause: true,
        userTurn: true,
        result: '',
        restart: null as Restart,
        userSymbol: 'O' as GameSymbols,
    },
    reducers: {
        setUserTurn(state, action: PayloadAction<boolean>) {
            state.userTurn = action.payload;
        },
        setPause(state, action: PayloadAction<boolean>) {
            state.pause = action.payload;
        },
        setResult(state, action: PayloadAction<Result>) {
            state.result = action.payload;
        },
        setRestart(state, action: PayloadAction<Restart>) {
            state.restart = action.payload;
        },
        setUserSymbol(state, action: PayloadAction<GameSymbols>) {
            state.userSymbol = action.payload;
        },
    },
});

export const { setUserTurn, setPause, setResult, setRestart, setUserSymbol } = gameSlice.actions;
export default gameSlice.reducer;
