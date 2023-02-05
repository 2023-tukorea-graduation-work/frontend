import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import LoginForm from "../components/Login/LoginForm/LoginForm";
import LoginMenu from "../components/Login/LoginMenu/LoginMenu";
const Login = () => {
  return (
    <>
      <Grid container>
        <Grid xs={3}></Grid>
        <Grid xs={6}>
          <LoginForm></LoginForm>
          <LoginMenu></LoginMenu>
        </Grid>
        <Grid xs={3}></Grid>
      </Grid>
    </>
  );
};

export default Login;
