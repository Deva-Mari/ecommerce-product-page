import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "./hamburger-slice";
// import authReducer from "./auth-slice";

const store = configureStore({
  reducer: { hamburger: hamburgerReducer },
});

export default store;