import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayAgain, GameSymbols, Result } from '../constants/Types';

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        pause: true,
        userTurn: false,
        result: '',
        playAgain: null as PlayAgain,
        userSymbol: 'O' as GameSymbols,
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
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
        setPlayAgain(state, action: PayloadAction<PlayAgain>) {
            state.playAgain = action.payload;
        },
        setUserSymbol(state, action: PayloadAction<GameSymbols>) {
            state.userSymbol = action.payload;
        },
        setBoard(state, action: PayloadAction<string[][]>) {
            console.log('changing to board ', action.payload);
            return {
                ...state,
                board: action.payload,
            };
        },
    },
});

export const { setUserTurn, setPause, setResult, setPlayAgain, setUserSymbol, setBoard } = gameSlice.actions;
export default gameSlice.reducer;
