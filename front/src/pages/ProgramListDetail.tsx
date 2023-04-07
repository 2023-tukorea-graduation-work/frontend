import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ProgramListDetail from "../components/ProgramListDetail/ProgramListDetail";
import { useAppSelector } from "../app/hook";
import styled from "@emotion/styled";
const ProgramListDetailjs = () => {
  const userGb = useAppSelector((state) => state.login.object.user_gb);
  const Color = styled.div`
    width: 100%;
    height: 25vh;
    background-color: ${userGb === "MENTO" ? "#399DA3" : "#ffb07a"};
  `;
  return (
    <>
      <Color>
        <Grid container>
          <Grid xs={1}></Grid>
          <Grid xs={10} sx={{ display: "flex" }}>
            <ProgramListDetail></ProgramListDetail>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </Color>
    </>
  );
};

export default ProgramListDetailjs;
