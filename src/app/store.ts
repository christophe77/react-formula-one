import { configureStore } from '@reduxjs/toolkit';
import formulaOneReducer from '../features/formulaOneSlice';

export const store = configureStore({
    reducer: {
        formulaOne: formulaOneReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;