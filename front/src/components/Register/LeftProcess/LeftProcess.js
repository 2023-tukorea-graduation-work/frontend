import React from "react";
import styled from "@emotion/styled";
const LeftProcess = (props) => {
  const LeftStyle = styled.div`
    width: 15%;
    height: 87vh;
    background-color: rgba(255, 204, 170, 0.3);
    font-family: "NotoSansMedium";
    text-align: center;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  `;
  const ProcessStyle = styled.div`
    position: relative;
    top: 5%;
    margin-top: 3rem;
    display: block;
    color: #777;
  `;
  return (
    <>
      <LeftStyle>
        {["01.멘토/멘티설정", "02.기본정보입력", "03.회원가입완료"].map(
          (value, index) => {
            if (index === props.countStep)
              return (
                <ProcessStyle key={index} style={{ color: "#000" }}>
                  {value}
                </ProcessStyle>
              );
            return <ProcessStyle key={index}>{value}</ProcessStyle>;
          }
        )}
      </LeftStyle>
    </>
  );
};

export default LeftProcess;
