import { createSlice } from "@reduxjs/toolkit";

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
export const ProgramListSlice = createSlice({
  name: "programlist",
  initialState,
  reducers: {},
});
