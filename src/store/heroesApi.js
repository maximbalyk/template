import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from "../constants/constants";

export const heroesApi = createApi({
    reducerPath: 'heroesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        getAllHeroes: build.query({
            query: () => 'people',
        }),
    }),
})

export const { useGetAllHeroesQuery } = heroesApi;