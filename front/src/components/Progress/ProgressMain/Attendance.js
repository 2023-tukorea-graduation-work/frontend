import React from "react";
import styled from "@emotion/styled";
const Attendance = () => {
  return (
    <AttendanceBox>
      <TextBox></TextBox>
    </AttendanceBox>
  );
};
const TextBox = styled.div`
  width: 90%;
  height: 90%;
  background-color: red;
`;
const AttendanceBox = styled.div`
  margin-right: 2%;
  background-color: blue;
  width: 49%;
  height: 30%;
  border-radius: 25px;
  display: flex;
`;
export default Attendance;
