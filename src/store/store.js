import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

// here store return a one object that is reducer
// and there is amiddleware called thunk so dont need to configure manually
// store imported in root layout page

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});

export default store;
