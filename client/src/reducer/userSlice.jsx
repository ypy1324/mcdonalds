import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: "",
    displayName: "",
    email: "",
    rewardPoints: 0,
    address: {},
    // accessToken: "",
  },
  reducers: {
    loginUser: (state, action) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.rewardPoints = action.payload.rewardPoints;
      state.address = action.payload.address;
      // state.accessToken = action.payload.accessToken;
    },
    clearUser: (state) => {
      state.uid = "";
      state.displayName = "";
      state.email = "";
      state.rewardPoints = 0;
      state.address = {};
      // state.accessToken = "";
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
