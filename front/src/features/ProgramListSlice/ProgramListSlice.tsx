import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export interface PostState {
  post_id: number;
}
interface itemBox {
  PROGRAM_NO: number;
  ACT_PLACE: string;
  CAPACITY: number;
  COLLEGE: string;
  DEADLINE: number;
  DETAIL: string;
  MAJOR: string;
  NAME: string;
  PARTICIPANT: number;
  PRO_FINISH_DATE: string;
  PRO_START_DATE: string;
  ROW_NUM: number;
  SUBJECT: string;
}
interface totalState {
  post: itemBox[];
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
export const loadItemListAsync = createAsyncThunk<itemBox[], string>(
  "loadItemList",
  async (keys) => {
    try {
      const { data } = await axios({
        method: "get",
        url: "/api/v1/program?",
        params: { keyword: keys },
      });
      return data.object;
    } catch (e) {
      console.log(e);
    }
  }
);
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
  extraReducers: (builder) => {
    builder.addCase(loadItemListAsync.fulfilled, (state, { payload }) => {
      state.post = payload;
      console.log(state.post);
    });
  },
});
export const { placeSelect, teachTypeSelect, interestSelect } =
  programListSlice.actions;
export default programListSlice.reducer;
