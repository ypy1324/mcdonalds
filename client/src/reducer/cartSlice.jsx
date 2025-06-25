import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    items: [],
  },
  reducers: {
    cartInfo: (state, action) => {
      state.quantity = action.payload.quantity;
      state.items = action.payload.items;
    },
    // clearUser: (state) => {
    //   state.uid = "";
    // },
  },
});

export const { cartInfo } = cartSlice.actions;
export default cartSlice.reducer;
