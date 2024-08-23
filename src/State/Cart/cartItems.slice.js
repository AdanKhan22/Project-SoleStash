import { createSlice } from '@reduxjs/toolkit'

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: {
    value: [],
  },
  reducers: {
       addToCart: (state , action) => {        
            state.value.push(action.payload)
       }  
        // REMOVE_FROM_CART: (state , payload) => {
        //      state.value = !state.value;
        // }
   }
})

// Action creators are generated for each case reducer function
export const {addToCart} = cartItemsSlice.actions

export default cartItemsSlice.reducer