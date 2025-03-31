import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: { feed: null }, // ✅ Changed to object

  reducers: {
    addFeed: (state, action) => {
      state.feed = action.payload; // ✅ Correctly mutating state
    },
    removeFeed: (state, action) => {
      state.feed = state.feed.filter((req) => req._id !== action.payload);
    }
    
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;