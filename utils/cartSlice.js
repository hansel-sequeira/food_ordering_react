import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeFromCart: (state) => {
            state.cartItems.pop();
        },
        clearCart: (state) => {
            state.length = 0;
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;