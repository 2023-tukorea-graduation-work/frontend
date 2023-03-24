import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { FaHome, FaEye, FaRegBookmark, FaRegEnvelope } from "react-icons/fa";

const ProgramListDetail = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <DetailForm>
      <Detailbox>
        <Detailca>
          <FaHome
            size="42%"
            color="#777777"
            style={{ marginTop: "1rem" }}
          ></FaHome>
          <p
            style={{
              marginTop: "2.2rem",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            카테고리명
          </p>
          <p style={{ marginTop: "0.3rem", fontSize: "0.8rem" }}>
            -세부 카테고리
          </p>
        </Detailca>

        <DetailIntro>
          <p style={{ width: "6%" }}>박서영</p>
          <p style={{ width: "15%" }}>한국공학대학교</p>
          <p style={{ width: "74%" }}>it경영학과</p>
          <p style={{ width: "50%" }}>모집인원 : 3</p>
          <p style={{ width: "50%" }}>활동기간 : 2022.03.21 ~ 2022.03.21</p>
          <p style={{ width: "50%" }}>모집기간 : 2022.03.21 ~ 2022.03.21</p>
          <p style={{ width: "50%" }}>수업방식 : 온라인</p>
        </DetailIntro>

        <DetailIcon>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "#FF8E41",
              marginRight: "11rem",
            }}
          >
            D-31
          </p>

          <FaEye size="10%" color="#8E8E8E"></FaEye>
          <p
            style={{
              fontSize: "0.8rem",
              marginRight: "0.3rem",
              color: "#8E8E8E",
            }}
          >
            701
          </p>
          <FaRegEnvelope
            size="10%"
            style={{
              marginRight: "0.1rem",
            }}
            color="#8E8E8E"
          ></FaRegEnvelope>
          <FaRegBookmark size="10%" color="#8E8E8E"></FaRegBookmark>
        </DetailIcon>
      </Detailbox>

      <Programintro>
        <p>
          안녕하세요. 저는 현재 2개의 회사를 운영하고 있는 강유나입니다.
          어린나이부터 사업만 운영하며, 지금까지 20대를 보내왔습니다. 이번에는
          더욱더 큰 꿈을 꾸며 30대를 맞이한 여행관련 스타트업을 기획중에
          있습니다. 이런식으로 주제에 관한 내용이 들어가는 칸
        </p>
      </Programintro>

      <ProgramPlan>
        <TableContainer>
          <Table aria-label="a dense table">
            <TableRow sx={{ height: "10vh" }}>
              <TableCell align="center" width="10%">
                1주차
              </TableCell>
              <TableCell align="left">상세내용</TableCell>
            </TableRow>
            <TableRow sx={{ height: "10vh" }}>
              <TableCell align="center" width="10%">
                1주차
              </TableCell>
              <TableCell align="left">상세내용</TableCell>
            </TableRow>
            <TableRow sx={{ height: "10vh" }}>
              <TableCell align="center" width="10%">
                1주차
              </TableCell>
              <TableCell align="left">상세내용</TableCell>
            </TableRow>
            <TableRow sx={{ height: "10vh" }}>
              <TableCell align="center" width="10%">
                1주차
              </TableCell>
              <TableCell align="left">상세내용</TableCell>
            </TableRow>
            <TableRow sx={{ height: "10vh" }}>
              <TableCell align="center" width="10%">
                1주차
              </TableCell>
              <TableCell align="left">상세내용</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </ProgramPlan>

      <div>
        <Button
          variant="contained"
          color="primary"
          sx={{
            height: "2.4rem",
            width: "11rem",
            fontSize: "1rem",
            fontFamily: "NotoSansRegular",
            boxShadow: "0",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          프로그램신청하기
        </Button>
      </div>
    </DetailForm>
  );
};
const DetailForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  font-family: "NotoSansRegular";
  font-size: 1.2rem;
  align-items: center;
`;
const Detailbox = styled.div`
  height: 17rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;
const Detailca = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4% 2% 5% 4%;
`;
const DetailIntro = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 6%;
  margin-bottom: 6%;
  font-size: 0.9rem;
`;
const DetailIcon = styled.div`
  width: 24%;
  display: flex;
  flex-direction: row;
  margin-top: 4%;
  margin-bottom: 4%;
`;
const Programintro = styled.div`
  margin-top: 4%;
  margin-bottom: 4%;
  width: 40%;
  text-align: center;
  font-size: 0.8rem;
  line-height: 180%;
`;
const ProgramPlan = styled.div`
  width: 100%;
  height: 28vh;
  border: solid 0.8px #d6d6d6;
  overflow: auto;
`;

export default ProgramListDetail;
