import { configureStore } from "@reduxjs/toolkit";
import cartStoreReducer from "./cartSlice";


const store = configureStore({
    reducer: {
        cart: cartStoreReducer
    }
});

export default store;