import { configureStore } from "@reduxjs/toolkit";
import leftbarReducer from "../features/leftBarSlice/leftBarSlice";
export const store = configureStore({
  reducer: {
    leftBar: leftbarReducer,
  },
});
