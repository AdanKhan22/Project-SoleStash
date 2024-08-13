
import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "../../src/State/Cart/cart.slice";
const store = configureStore({
    reducer: {
        cartOpen : cartReducer,
    }
});

export default store;
