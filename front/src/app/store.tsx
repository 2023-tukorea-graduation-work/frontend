import { configureStore } from "@reduxjs/toolkit";
import leftbarReducer from "../features/leftBarSlice/leftBarSlice";
import programListReducer from "../features/ProgramListSlice/ProgramListSlice";
export const store = configureStore({
  reducer: {
    leftBar: leftbarReducer,
    programList: programListReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
