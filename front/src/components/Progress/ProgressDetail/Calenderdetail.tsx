import React from "react";
import styled from "@emotion/styled";

const Calenderdetail = () => {
  return (
    <CalenderForm>
      <Calenderbox>
        <p
          style={{
            marginTop: "2.5rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginLeft: "1rem",
          }}
        >
          일정
        </p>
        <Tabbox>11</Tabbox>
        <Tablebox>22</Tablebox>
      </Calenderbox>
      <Calendershpae>
        <p>캘린더</p>
        <Calenderday>111</Calenderday>
        <Calendertodo>22</Calendertodo>
      </Calendershpae>
    </CalenderForm>
  );
};
const CalenderForm = styled.div`
  display: flex;
  flex-direction: row;
`;
const Calenderbox = styled.div`
  width: 70%;
  height: 82vh;
  border: 3px solid red;
`;
const Calendershpae = styled.div`
  width: 30%;
  border: 3px solid blue;
`;
const Tabbox = styled.div`
  width: 100%;
  height: 5vh;
  margin-top: 1.7rem;
  background-color: #f5f5f5;
`;
const Tablebox = styled.div`
  width: 100%;

  background-color: yellow;
`;
const Calenderday = styled.div`
  width: 100%;
  height: 30vh;
  background-color: blue;
`;
const Calendertodo = styled.div`
  width: 100%;
  height: 20vh;
  background-color: purple;
`;
export default Calenderdetail;
