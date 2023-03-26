import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
interface loginSuccess {
  message: string;
  object: number | null;
  status: string;
}
interface loginInfo {
  email: string;
  password: string;
  user_gb: string;
}
const initialState: loginSuccess = {
  message: "",
  object: null,
  status: "",
};
export const loginAsync = createAsyncThunk<loginSuccess, loginInfo>(
  "login",
  async (loginData) => {
    try {
      const { data } = await axios({
        url: "/api/v1/login",
        method: "post",
        data: {
          email: `${loginData.email}`,
          password: `${loginData.password}`,
          user_gb: "MENTO",
        },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, { payload }) => {
      state.message = payload.message;
      state.object = payload.object;
      state.status = payload.status;
      console.log(state.message);
      console.log(state.object);
      console.log(state.status);
    });
  },
});
export default loginSlice.reducer;
