import { configureStore } from "@reduxjs/toolkit";
import leftbarReducer from "../features/leftBarSlice/leftBarSlice";
import programListReducer from "../features/ProgramListSlice/programListSlice";
import programDetailReducer from "../features/ProgramListDetailSlice/programListDetailSlice";
export const store = configureStore({
  reducer: {
    leftBar: leftbarReducer,
    programList: programListReducer,
    programDetail: programDetailReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
