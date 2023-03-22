import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostState {
  post_id: number;
}

interface totalState {
  post: PostState[];
  placeSelected: string;
  teachTypeSelected: string;
  interestSelected: string;
}
const initialState: totalState = {
  post: [],
  placeSelected: "",
  teachTypeSelected: "",
  interestSelected: "",
};
export const programListSlice = createSlice({
  name: "programlist",
  initialState,
  reducers: {
    placeSelect: (state, action: PayloadAction<string>) => {
      state.placeSelected = action.payload;
      console.log(state.placeSelected);
    },
    teachTypeSelect: (state, action: PayloadAction<string>) => {
      state.teachTypeSelected = action.payload;
      console.log(state.teachTypeSelected);
    },
    interestSelect: (state, action: PayloadAction<string>) => {
      state.interestSelected = action.payload;
      console.log(state.interestSelected);
    },
  },
});
export const { placeSelect, teachTypeSelect, interestSelect } =
  programListSlice.actions;
export default programListSlice.reducer;
