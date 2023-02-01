import React from "react";
import styled from "@emotion/styled";
const LoginMenu = () => {
  const OptionStyled = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 2rem;
    text-align: center;
    font-family: NotoSansReugular;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #777;
  `;
  return (
    <OptionStyled>
      비밀번호찾기 &nbsp; &nbsp;| &nbsp; &nbsp;아이디찾기 &nbsp;&nbsp;|&nbsp;
      &nbsp; 회원가입
    </OptionStyled>
  );
};

export default LoginMenu;
