import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    // increment(state) {
    //   //actions are dispatched correctly automatically
    //   state.counter++; // are allowed to mutate state (toolkit clones state behind the scenes)
    // },
    // decrement(state) {
    //   state.counter--;
    // },
    // increase(state, action) {
    //   // accept action as paramenter when using extra payload
    //   state.counter = state.counter + action.payload;
    // },
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;