import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import leftbarReducer from "../features/leftBarSlice/leftBarSlice";
export const store = configureStore({
  reducer: {
    leftBar: leftbarReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
