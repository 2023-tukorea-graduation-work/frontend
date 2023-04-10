import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
interface userObject {
  USER_NO: number | null;
  user_gb: string;
}
interface loginSuccess {
  message: string;
  object: userObject;
  status: string;
}
interface loginInfo {
  email: string;
  password: string;
  user_gb: string;
}
const initialState: loginSuccess = {
  message: "",
  object: { USER_NO: null, user_gb: "" },
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
          user_gb: `${loginData.user_gb}`,
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
      state.status = payload.status;
      sessionStorage.setItem('user', JSON.stringify(state.object));
      const user = JSON.parse(String(sessionStorage.getItem('user')));
      console.log(user)
    });
  },
});
export default loginSlice.reducer;
