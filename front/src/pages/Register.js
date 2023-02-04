import React, { useState } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import LeftProcess from "../components/Register/LeftProcess/LeftProcess";
import StepFirst from "../components/Register/StepFirst/StepFirst";
import StepSecondMentor from "../components/Register/StepSecond/StepSecondMentor";
import StepThird from "../components/Register/StepThird/StepThird";
import StepSecondMentee from "../components/Register/StepSecond/StepSecondMentee";
const Register = () => {
  const [Mento, setMento] = useState(false);
  const [countStep, setCountStep] = useState(0);
  const isMento = () => {
    setMento(!Mento);
  };
  const IncreaseStep = () => {
    setCountStep((state) => state + 1);
    console.log(countStep);
  };
  const WhiteBox = styled.div`
    height: 87vh;
    width: 85%;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
    background-color: #fff;
    border-top-right-radius: 4rem;
  `;
  return (
    <>
      <Grid container>
        <Grid xs={1}></Grid>
        <Grid xs={10} sx={{ display: "flex" }}>
          <LeftProcess countStep={countStep} />
          <WhiteBox>
            {countStep === 0 && (
              <StepFirst IncreaseStep={IncreaseStep} isMento={isMento} />
            )}
            {countStep === 1 && Mento && (
              <StepSecondMentor IncreaseStep={IncreaseStep} />
            )}
            {countStep === 1 && !Mento && (
              <StepSecondMentee IncreaseStep={IncreaseStep} />
            )}
            {countStep === 2 && <StepThird />}
          </WhiteBox>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </>
  );
};

export default Register;
