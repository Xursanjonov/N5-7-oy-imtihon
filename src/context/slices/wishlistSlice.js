import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: JSON.parse(localStorage.getItem("like-data")) || [],
};

const wishlistSlice = createSlice({
    name: "heart",
    initialState,
    reducers: {
        addToLike: (state, action) => {
            console.log(action.payload)
            let index = state.value.findIndex((i) => i.id === action.payload.id);
            if (index < 0) {
                state.value = [...state.value, action.payload];
            } else {
                state.value = state.value.filter((i) => i.id !== action.payload.id);
            }
            localStorage.setItem("like-data", JSON.stringify(state.value));
        }
    },
});

export const { addToLike } = wishlistSlice.actions;
export default wishlistSlice.reducer;