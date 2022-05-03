import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import shelfSlice from "./slices/shelfSlice";
import searchSlice from "./slices/searchSlice";
const store = configureStore({
  reducer: { shelfSlice, searchSlice },
  middleware: [thunk],
});

export default store;
