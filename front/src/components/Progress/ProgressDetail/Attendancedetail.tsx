import React from "react";
import styled from "@emotion/styled";
import { FaRegCheckCircle } from "react-icons/fa";

const Attendencedetail = () => {
  return (
    <AttendForm>
      <p
        style={{
          marginTop: "2.5rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginLeft: "1rem",
        }}
      >
        출석
      </p>
      <Attendbox>
        <Studentbox>
          <Studentlist>
            <p>icon</p>
            <p>박서영</p>
            <p>숭의여자고등학교</p>
            <p>25세</p>
          </Studentlist>
          <StudentAttend>
            <p>현재 총 수업 수: 4회</p>
            <p>출석 5회</p>
            <p>지각 1회</p>
            <p>결석 1회</p>
          </StudentAttend>
        </Studentbox>

        <Studentbox>
          <Studentlist>
            <p>icon</p>
            <p>박서영</p>
            <p>숭의여자고등학교</p>
            <p>25세</p>
          </Studentlist>
          <StudentAttend>
            <p>현재 총 수업 수: 4회</p>
            <p>출석 5회</p>
            <p>지각 1회</p>
            <p>결석 1회</p>
          </StudentAttend>
        </Studentbox>

        <Checklist>
          <p style={{ fontSize: "1rem" }}>날짜 :</p>
          <p>2022.02.31</p>
          <p>진행차시 : 1차시 / 9차시</p>
          <p>프로그램기간 : 2022.02.01 ~ 2022.09.21</p>
        </Checklist>

        <Studentbox>
          <Studentlist>
            <p>icon</p>
            <p>박서영</p>
            <p>숭의여자고등학교</p>
            <p>25세</p>
          </Studentlist>
          <StudentAttendCheck>
            <p>
              출석
              <FaRegCheckCircle
                size="1rem"
                style={{ marginTop: "0.2rem", marginLeft: "0.3rem" }}
              ></FaRegCheckCircle>
            </p>
            <p>
              지각
              <FaRegCheckCircle
                style={{ marginTop: "0.2rem", marginLeft: "0.3rem" }}
              ></FaRegCheckCircle>
            </p>
            <p>
              결석
              <FaRegCheckCircle
                style={{ marginTop: "0.2rem", marginLeft: "0.3rem" }}
              ></FaRegCheckCircle>
            </p>
          </StudentAttendCheck>
        </Studentbox>
        <Studentbox>
          <Studentlist>
            <p>icon</p>
            <p>박서영</p>
            <p>숭의여자고등학교</p>
            <p>25세</p>
          </Studentlist>
          <StudentAttendCheck>
            <p>
              출석
              <FaRegCheckCircle
                size="1rem"
                style={{ marginTop: "0.2rem", marginLeft: "0.3rem" }}
              ></FaRegCheckCircle>
            </p>
            <p>
              지각
              <FaRegCheckCircle
                style={{ marginTop: "0.2rem", marginLeft: "0.3rem" }}
              ></FaRegCheckCircle>
            </p>
            <p>
              결석
              <FaRegCheckCircle
                style={{ marginTop: "0.2rem", marginLeft: "0.3rem" }}
              ></FaRegCheckCircle>
            </p>
          </StudentAttendCheck>
        </Studentbox>
      </Attendbox>
    </AttendForm>
  );
};
const AttendForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Studentlist = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: space-between;
  margin: 2% 34% 2% 2%;
  font-size: 0.8rem;
`;
const Studentbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 6vh;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin-bottom: 0.5rem;
`;
const StudentAttend = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  margin: 2% 2% 2% 2%;
  font-size: 0.8rem;
`;
const StudentAttendCheck = styled.div`
  display: flex;
  flex-direction: row;
  width: 35%;
  justify-content: space-between;
  margin: 1.5% 2% 1.8% 14%;
  font-size: 1rem;
`;
const Checklist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-top: 3.5%;
  margin-bottom: 2%;
`;

const Attendbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 95.5%;
  margin-top: 1.7rem;
  margin-left: 1rem;
`;
export default Attendencedetail;
