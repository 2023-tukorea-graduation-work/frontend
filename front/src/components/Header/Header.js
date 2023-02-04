import React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
const Header = () => {
  return (
    <>
      <Grid container>
        <Grid xs={1}></Grid>
        <Grid xs={10} sx={{ height: "13vh" }}>
          <HeaderStyle>
            <LogoStyle>1</LogoStyle>
            <NavStyle>
              <div>PROJECT</div>
              <div>SEARCH</div>
              <div>LOGIN</div>
            </NavStyle>
            <ImageStyle>
              <img
                src="/images/Man.jpg"
                alt="logo"
                style={{ width: "4.5rem", height: "4.5rem", objectFit: "fill" }}
              />
            </ImageStyle>
          </HeaderStyle>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </>
  );
};
const HeaderStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoStyle = styled.div`
  width: 4.5rem;
  height: 80px;
  background-color: green;
`;
const NavStyle = styled.div`
  width: 35%;
  display: flex;
  font-family: Inter;
  font-size: 200%;
  color: #ffffff;
  background-color: red;
  justify-content: space-between;
`;
const ImageStyle = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  border: 3px solid #d9d9d9;
  border-radius: 50%;
  object-fit: fill;
`;

export default Header;
