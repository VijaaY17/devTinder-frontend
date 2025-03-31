import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "request",
  initialState: { request: [] }, // ✅ Ensure request is an array

  reducers: {
    addRequest: (state, action) => {
      state.request = action.payload; // ✅ Replace the array instead of pushing
    },
    removeRequest: (state, action) => {
      state.request = state.request.filter((req) => req._id !== action.payload);
    }
  },
});

export const { addRequest, removeRequest } = requestsSlice.actions;
export default requestsSlice.reducer;

