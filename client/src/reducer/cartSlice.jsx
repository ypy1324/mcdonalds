import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    cartItems: [],
  },
  reducers: {
    storeCartInfo: (state, action) => {
      state.quantity = action.payload.quantity;
      state.cartItems = action.payload.cartItems;
    },
    // clearUser: (state) => {
    //   state.uid = "";
    // },
  },
});

export const { storeCartInfo } = cartSlice.actions;
export default cartSlice.reducer;
