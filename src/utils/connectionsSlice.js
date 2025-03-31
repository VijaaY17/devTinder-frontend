import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "connection",
  initialState: { connection: null }, // ✅ Changed to object

  reducers: {
    addConnection: (state, action) => {
      state.connection = action.payload; // ✅ Correctly mutating state
    },
    removeConnection: (state) => {
      state.connection= null;
    },
  },
});

export const { addConnection, removeConnection } = connectionsSlice.actions;
export default connectionsSlice.reducer;