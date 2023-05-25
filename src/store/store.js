import { configureStore } from '@reduxjs/toolkit'
import { heroesApi } from "./heroesApi";
export const store = configureStore({
    reducer: {
        [heroesApi.reducerPath]: heroesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(heroesApi.middleware),
})