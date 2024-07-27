import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { tokenApi } from "./api/tokenApi";
import authSlice from "./slices/authSlice";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        wishlist: wishlistSlice,
        cart: cartSlice,
        [api.reducerPath]: api.reducer,
        [tokenApi.reducerPath]: tokenApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware).concat(tokenApi.middleware),
});

export default store