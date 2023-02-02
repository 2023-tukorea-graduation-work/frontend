import React from "react";
import styled from "@emotion/styled";
const StepFirst = (props) => {
  const BasicForm = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: start;
  `;
  const HellowStyle = styled.div`
    margin-bottom: 10%;
    font-family: "NotoSansMedium";
    font-size: 1.5rem;
    color: #000;
  `;
  const Test = styled.div`
    width: 35%;
    height: 90%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border-top-right-radius: 4rem;
    cursor: pointer;
  `;
  return (
    <BasicForm>
      <HellowStyle>환형합니다. 멘토/멘티를 선택해주세요</HellowStyle>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50%",
          justifyContent: "center",
        }}
      >
        <Test
          onClick={() => {
            props.isMento();
            props.IncreaseStep();
          }}
        >
          멘토
        </Test>
        <Test onClick={props.IncreaseStep} style={{ marginLeft: "8rem" }}>
          멘티
        </Test>
      </div>
    </BasicForm>
  );
};

export default StepFirst;
