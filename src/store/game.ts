import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayAgain, GameSymbols, Result, AIDifficulty } from '../constants/Types';

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        pause: true,
        stop: true,
        userTurn: false,
        result: '',
        playAgain: null as PlayAgain,
        userSymbol: 'O' as GameSymbols,
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ],
        difficulty: 'Easy',
        winningsCounter: {
            CPU: 0,
            User: 0,
        },
        winningCombination: ['', '', ''],
    },
    reducers: {
        setUserTurn(state, action: PayloadAction<boolean>) {
            state.userTurn = action.payload;
        },
        setPause(state, action: PayloadAction<boolean>) {
            state.pause = action.payload;
        },
        setStop(state, action: PayloadAction<boolean>) {
            state.stop = action.payload;
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
        setBoard(state, action: PayloadAction<GameSymbols[][] | ''[][]>) {
            return {
                ...state,
                board: action.payload,
            };
        },
        setDifficulty(state, action: PayloadAction<AIDifficulty>) {
            state.difficulty = action.payload;
        },
        setWinningsCounter(state, action: PayloadAction<string>) {
            if (action.payload === 'You') {
                state.winningsCounter.User = state.winningsCounter.User + 1;
            }
            if (action.payload === 'CPU') {
                state.winningsCounter.CPU = state.winningsCounter.CPU + 1;
            }
        },
        setWinningCombination(state, action: PayloadAction<string[]>) {
            return {
                ...state,
                winningCombination: action.payload,
            };
        },
    },
});

export const {
    setUserTurn,
    setPause,
    setResult,
    setPlayAgain,
    setUserSymbol,
    setBoard,
    setStop,
    setDifficulty,
    setWinningsCounter,
    setWinningCombination,
} = gameSlice.actions;
export default gameSlice.reducer;
