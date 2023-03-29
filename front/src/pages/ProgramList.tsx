import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ProgramList from "../components/ProgramList/ProgramList";


const ProgramListjs = () => {
return(

    <>
    <div
        style={{
          width: "100%",
          height: "25vh",
          backgroundColor:"#FFB07A"
        }}
      >

        <Grid container>
        <Grid xs={1}></Grid>
        <Grid xs={10} sx={{ display: "flex" }}>

        <ProgramList></ProgramList>

        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
      </div>

    </>
      );
    };

export default ProgramListjs;
