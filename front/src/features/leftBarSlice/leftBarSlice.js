import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexNumber: 0,
};
export const leftbarSlice = createSlice({
  name: "leftbar",
  initialState,
  reducers: {
    indexChange: (state, action) => {
      state.indexNumber = action.payload.value;
    },
  },
});

export const { indexChange } = leftbarSlice.actions;
export default leftbarSlice.reducer;
