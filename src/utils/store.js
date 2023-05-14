import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer : {
        cart: CartSlice,
        search: searchSlice
    }
});

export default store;