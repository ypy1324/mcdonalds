import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { uid: "", displayName: "", accessToken: "" },
  reducers: {
    loginUser: (state, action) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.accessToken = action.payload.accessToken;
    },
    clearUser: (state) => {
      state.uid = "";
      state.displayName = "";
      state.accessToken = "";
    },
  },
});

export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
