import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // ✅ Correct import
import feedReducer from "./feedSlice"
import connectionReducer from "./connectionsSlice"
import requestReducer from "./requestsSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed : feedReducer, 
    connection : connectionReducer,
    request : requestReducer  // ✅ Matches userSlice.js
  },
});

export default appStore;
