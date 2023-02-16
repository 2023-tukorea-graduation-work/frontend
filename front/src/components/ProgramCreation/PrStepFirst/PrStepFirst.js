import React from "react";
import styled from "@emotion/styled";
const PrStepFirst = (props) => {
  return (
    <BasicForm>
      <HellowStyle>프로젝트 카테고리를 선택해주세요</HellowStyle>
      <TestList>
        <Test onClick={props.increaseStep}></Test>
        <Test></Test>
        <Test></Test>
        <Test></Test>
        <Test></Test>
        <Test></Test>
      </TestList>
    </BasicForm>
  );
};
const BasicForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
`;
const HellowStyle = styled.div`
  margin-top: 10%;
  margin-bottom: 5%;
  font-family: "NotoSansMedium";
  font-size: 1.5rem;
  color: #000;
`;
const TestList = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Test = styled.div`
  width: 25%;
  height: 60%;
  margin-right: 4%;
  margin-bottom: 4%;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-top-right-radius: 4rem;
  cursor: pointer;
`;
export default PrStepFirst;
