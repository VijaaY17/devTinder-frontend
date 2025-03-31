import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null }, // ✅ Changed to object

  reducers: {
    addUser: (state, action) => {
      state.user = action.payload; // ✅ Correctly mutating state
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
