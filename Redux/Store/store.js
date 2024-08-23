
import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "../../src/State/Cart/cart.slice";
import  cartItemsReducer from "../../src/State/Cart/cartItems.slice";


const store = configureStore({
    reducer: {
        cartOpen : cartReducer,
        cartItems:cartItemsReducer,
       
    }
});

export default store;
