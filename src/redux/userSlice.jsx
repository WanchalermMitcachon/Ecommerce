// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Create a unique cart item ID for each new addition
      const cartItemId = new Date().getTime().toString();
      state.items.push({ ...action.payload, quantity: state.quantity, cartItemId });
      state.quantity = 0; // reset quantity after adding to cart
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.cartItemId !== action.payload);
    },
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      if (state.quantity > 0) state.quantity -= 1;
    },
  },
});

export const { addItem, removeItem, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
