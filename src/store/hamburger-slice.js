import { createSlice } from "@reduxjs/toolkit";
const initialHamburgerState = { showHamburger: false };

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: initialHamburgerState,
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
      state.showHamburger = !state.showHamburger;
    },
  },
});

export const hamburgerActions = hamburgerSlice.actions;
export default hamburgerSlice.reducer;