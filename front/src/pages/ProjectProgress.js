import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";
import LeftBar from "../components/Progress/LeftBar/LeftBar";
import { useDispatch, useSelector } from "react-redux";
import { indexChange } from "../features/leftBarSlice/leftBarSlice";
const ProjectProgress = () => {
  const selectIndex = useSelector((state) => state.leftBar.indexNumber);
  const barArray = [
    { title: <div>0</div>, content: <div>0</div> },
    { title: <div>1</div>, content: <div>1</div> },
    { title: <div>2</div>, content: <div>2</div> },
    { title: <div>3</div>, content: <div>3</div> },
    { title: <div>4</div>, content: <div>4</div> },
    { title: <div>5</div>, content: <div>5</div> },
  ];

  return (
    <>
      <Grid container>
        <Grid xs={1}></Grid>
        <Grid xs={10} sx={{ display: "flex" }}>
          <LeftBar></LeftBar>
          <Boxx2>
            <div>{barArray[selectIndex].content}</div>
          </Boxx2>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </>
  );
};

const Boxx2 = styled.div`
  height: 83vh;
  width: 85%;
  background-color: #f5f5f5;
  margin-left: 2%;
`;
export default ProjectProgress;
