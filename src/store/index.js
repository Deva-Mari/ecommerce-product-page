import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "./hamburger-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: { hamburger: hamburgerReducer, cart: cartReducer },
});

export default store;