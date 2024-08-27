import { createSlice } from '@reduxjs/toolkit'

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: {
    value: [],
  },
  reducers: {
       addToCart: (state , action) => {        
            state.value.push(action.payload)
       } , 
        removeFromCart: (state) => {
             state.value = [];
        }
   }
})

// Action creators are generated for each case reducer function
export const {addToCart , removeFromCart} = cartItemsSlice.actions

export default cartItemsSlice.reducer