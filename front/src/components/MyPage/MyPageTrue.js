import React from "react";
import styled from "@emotion/styled";
import ToggleButton from "@mui/material/ToggleButton";
const MyPageTrue = () => {
  return (
    <WhiteBox>
      <LeftNav></LeftNav>
      <MyProject>
        <div>MY PROJECT</div>
        <ToggleButton color="primary" value="ProgressBefore" selected={true}>
          진행예정
        </ToggleButton>
        <ToggleButton color="primary" value="Progressing">
          진행중 프로젝트
        </ToggleButton>
        <ToggleButton color="primary" value="ProgressEnd">
          완료 프로젝트
        </ToggleButton>
      </MyProject>

      <YourProfile>
        <div>YourProfile</div>
        NAME AGE EMAIL ADDRESS
        <div>LOGOUT</div>
      </YourProfile>
    </WhiteBox>
  );
};
const LeftNav = styled.div`
  height: 100%;
  width: 10%;
`;
const MyProject = styled.div`
  height: 100%;
  width: 65%;
`;
const YourProfile = styled.div`
  height: 100%;
  width: 25%;
`;
const WhiteBox = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-top-right-radius: 4rem;
`;
export default MyPageTrue;
