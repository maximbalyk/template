import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heroes: [],
};

export const heroesSlice = createSlice({
    name: "heroes card",
    initialState,
    reducers: {
        saveData: (state, action) => {
            state.heroes = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { saveData } = heroesSlice.actions;

export default heroesSlice.reducer;
