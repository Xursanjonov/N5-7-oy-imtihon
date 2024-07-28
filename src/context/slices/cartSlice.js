import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: JSON.parse(localStorage.getItem("cart")) || [],
    subtotal: JSON.parse(localStorage.getItem("cart-subtotal")) || 0,
    total: JSON.parse(localStorage.getItem("cart-total")) || 0,
};

const calculateSubtotal = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let index = state.value.findIndex(i => i.id === action.payload.id);
            if (index < 0) {
                state.value = [...state.value, { ...action.payload, quantity: 1 }];
            } else {
                state.value = state.value.map((item, inx) =>
                    inx === index ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            state.subtotal = calculateSubtotal(state.value);
            state.total = state.subtotal; // You can include other charges like taxes here
            localStorage.setItem("cart", JSON.stringify(state.value));
            localStorage.setItem("cart-subtotal", JSON.stringify(state.subtotal));
            localStorage.setItem("cart-total", JSON.stringify(state.total));
        },
        removeFromCart: (state, action) => {
            state.value = state.value.filter(i => i.id !== action.payload);
            state.subtotal = calculateSubtotal(state.value);
            state.total = state.subtotal; // Update if there are other charges
            localStorage.setItem("cart", JSON.stringify(state.value));
            localStorage.setItem("cart-subtotal", JSON.stringify(state.subtotal));
            localStorage.setItem("cart-total", JSON.stringify(state.total));
        },
        decrementCart: (state, action) => {
            let index = state.value.findIndex(i => i.id === action.payload.id);
            if (index >= 0) {
                state.value = state.value.map((item, inx) =>
                    inx === index ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
                );
                state.subtotal = calculateSubtotal(state.value);
                state.total = state.subtotal; // Update if there are other charges
                localStorage.setItem("cart", JSON.stringify(state.value));
                localStorage.setItem("cart-subtotal", JSON.stringify(state.subtotal));
                localStorage.setItem("cart-total", JSON.stringify(state.total));
            }
        },
        deleteAllCart: (state) => {
            state.value = [];
            state.subtotal = 0;
            state.total = 0;
            localStorage.removeItem("cart");
            localStorage.removeItem("cart-subtotal");
            localStorage.removeItem("cart-total");
        }
    }
});

export const { addToCart, removeFromCart, decrementCart, deleteAllCart } = cartSlice.actions;
export default cartSlice.reducer;
