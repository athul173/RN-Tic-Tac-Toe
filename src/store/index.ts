import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './game';
import stackReducer from './stack';

export const store = configureStore({
    reducer: {
        game: gameReducer,
        stack: stackReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
