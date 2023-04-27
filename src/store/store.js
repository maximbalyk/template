import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./heroesSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})