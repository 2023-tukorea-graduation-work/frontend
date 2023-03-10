import React from "react";
import styled from "@emotion/styled";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, Checkbox } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import "./LoginForm.css";
import axios from "axios";
const LoginForm = () => {
  const {
    control,
    register,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    data.user_gb = "MENTO";
    console.log(data);
    axios({
      url: "/api/v1/login",
      method: "post",
      data: {
        email: `${data.email}`,
        password: `${data.password}`,
        user_gb: "MENTO",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <>
      <LogoStyled>
        <Logo>Logo</Logo>
      </LogoStyled>

      <FormStyled>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Input
            id="email"
            placeholder="이메일주소 OR 전화번호 입력"
            sx={{ marginTop: "10rem" }}
            fullWidth={true}
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlineOutlinedIcon fontSize="medium" />
              </InputAdornment>
            }
            {...register("email", {
              required: "이메일은 필수입력입니다.",
            })}
          />
          <Input
            id="passWord"
            placeholder="비밀번호 입력"
            sx={{ marginTop: "1rem" }}
            fullWidth={true}
            startAdornment={
              <InputAdornment position="start">
                <LockOutlinedIcon fontSize="medium" />
              </InputAdornment>
            }
            {...register("password", {
              required: "비밀번호은 필수입력입니다.",
            })}
          />
          <CheckStyled>
            <Checkbox color="primary" />
            로그인 상태 유지
          </CheckStyled>

          <MentorCheckStyled>
          <Checkbox color="primary" />
          멘토로그인
          <p className="menteee">**해제시 멘티로 자동선택됩니다.</p>
          </MentorCheckStyled>


          <Button
            type="submit"
            disabled={isSubmitting}
            variant="contained"
            color="primary"
            fullWidth={true}
            sx={{ fontSize: "1rem", fontFamily: "NotoSansMedium" }}
          >
            로그인
          </Button>
        </form>
      </FormStyled>
    </>
  );
};

const MentorCheckStyled = styled.div`
margin-top:-1rem;
justify-content: start;
display: flex;
align-items: center;
font-family: NotoSansLight;
color: #777;
font-size:0.7rem;
`;

const FormStyled = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  width: 80%;
  height: 30rem;
  border: 1px;
  border-radius: 20px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;
const CheckStyled = styled.div`
  justify-content: start;
  display: flex;
  align-items: center;
  font-family: NotoSansLight;
  color: #777;
  font-size:0.7rem;
`;
const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  border: 1px solid red;
  width: 100%;
  height: 1rem;
`;
const Logo = styled.div`
  border: 1px solid blue;
  width: 10rem;
  height: 6rem;
  text-align: center;
`;
export default LoginForm;
