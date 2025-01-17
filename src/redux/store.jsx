import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./userSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
