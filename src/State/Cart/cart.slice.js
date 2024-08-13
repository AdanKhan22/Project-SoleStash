import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartOpen',
  initialState: {
    value: false,
  },
  reducers: {
       cartOpen: (state) => {
            state.value = !state.value;
       }
  }
})

// Action creators are generated for each case reducer function
export const {cartOpen} = cartSlice.actions

export default cartSlice.reducer