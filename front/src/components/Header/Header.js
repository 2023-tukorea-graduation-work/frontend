import React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import "./Header.css";

const Header = () => {
  return (
    <>
 <div
        style={{
          
          width: "100%",
          height: "10vh",
          backgroundColor:"#FFB07A"
        }}
      >

      <Grid container>
        <Grid xs={1}></Grid>
        <Grid xs={10} sx={{ height: "10vh" }}>
          <HeaderStyle>
            <LogoStyle>1</LogoStyle>
            <NavStyle>
            <div>P R O G R A M</div>
              <div>S E A R C H</div>
              <div>C L A S S</div>
            </NavStyle>
            <ImageStyle>
            Login
              {/* <img
                src="/images/Man.jpg"
                alt="logo"
                style={{ width: "4.5rem", height: "4.5rem", objectFit: "fill" }}
              /> */}
            </ImageStyle>
          </HeaderStyle>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
      </div>
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
  width: 4rem;
  height: 80px;
  background-color: green;
`;
const NavStyle = styled.div`
  width: 35%;
  display: flex;
  font-family: Inter;
  font-size: 110%;
  color: #ffffff;
  justify-content: space-between;
`;
 const ImageStyle = styled.div`
   height: 2.5rem;
  width: 2.5rem;  border: 3px solid #d9d9d9;
  border-radius: 50%;
  object-fit: fill;
  line-height:5vh;
  font-size:0.8rem;
  text-align:center;
  font-weight:bold;
`;

export default Header;

