import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaRegBookmark,
  FaRegEnvelope,
} from "react-icons/fa";
import "./ProgramList.css";
import axios from "axios";
const ProgramList = () => {
  const [tab, setTab] = useState<string>("curr");
  useEffect(() => {
    const search = null;
    axios({
      method: "get",
      url: "/api/v1/program?",
      params: { keyword: "" },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <ListForm>
      {/* 필터링해주는 칸 ------------------------------------------------------------------------ */}

      <Tagbox>
        <p style={{ fontSize: "2rem", marginTop: "6rem", marginLeft: "8rem" }}>
          보고싶은 모집글만
        </p>
        <p
          style={{ fontSize: "2rem", marginLeft: "8rem", marginTop: "0.8rem" }}
        >
          골라보기
        </p>

        <div
          className={`method ${tab === "curr" ? "active" : ""}`}
          onClick={() => setTab("curr")}
        >
          온라인
        </div>
        <div
          className={`method ${tab === "prev" ? "active" : ""}`}
          onClick={() => setTab("prev")}
        >
          오프라인
        </div>
      </Tagbox>

      {/* 프로그램나열칸 ------------------------------------------------------------------------ */}
      <ListTotalBox>
        <FaChevronLeft
          style={{ width: "2%", marginRight: "2rem" }}
          size="4%"
          color="#dddddd"
        ></FaChevronLeft>

        <ListItem>
          <ItemBox>
            <ItemFirst>
              <ItemImage>
                <img
                  alt="img"
                  src="/images/mentee.png"
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                />
              </ItemImage>
              <ItemInfo>
                <p>멘토 이름/학과</p>
                <p>서울 특별시 전체~</p>
                <p>2021/02/16~ 2021/03/31</p>
              </ItemInfo>
            </ItemFirst>

            <ItemName>
              <p
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                프로그램주제이름
              </p>
              <p style={{ fontSize: "0.9rem", marginBottom: "0.6rem" }}>
                프로그램 카테고리
              </p>

              <div
                style={{
                  fontSize: "0.7rem",
                  lineHeight: "0.9rem",
                  color: "#777777",
                }}
              >
                <p>그룹 종류: 과외 or 프로젝트</p>
                <p>모집인원: 2명</p>
                <p>현재 모집된 구성원: 2명</p>
              </div>
            </ItemName>
            <hr
              style={{
                marginTop: "10.5%",
                border: "0",
                height: "1px",
                width: "90.5%",
                background: "#dddddd",
              }}
            ></hr>
            <ItemDday>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#FF8E41",
                  marginRight: "10rem",
                }}
              >
                D-31
              </p>

              <FaEye size="5%" style={{ marginTop: "0.1rem" }}></FaEye>
              <p
                style={{
                  fontSize: "0.7rem",
                  marginRight: "0.6rem",
                  marginTop: "0.1rem",
                }}
              >
                701
              </p>
              <FaRegEnvelope
                size="5%"
                style={{ marginRight: "1rem", marginTop: "0.1rem" }}
              ></FaRegEnvelope>
              <FaRegBookmark size="5%"></FaRegBookmark>
            </ItemDday>
          </ItemBox>

          <ItemBox></ItemBox>
          <ItemBox></ItemBox>
          <ItemBox></ItemBox>
          <ItemBox></ItemBox>
          <ItemBox></ItemBox>
          <ItemBox></ItemBox>
          <ItemBox></ItemBox>
        </ListItem>
        <FaChevronRight
          style={{ width: "2%", marginLeft: "2rem" }}
          size="4%"
          color="#dddddd"
        ></FaChevronRight>
      </ListTotalBox>
    </ListForm>
  );
};
const ListTotalBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ListForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  font-family: "NotoSansRegular";
  font-size: 1.2rem;
  align-items: center;
`;
const Tagbox = styled.div`
  height: 35vh;
  width: 100%;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;
const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  margin-top: 7vh;
  height: 75vh;
  width: 100%;
  margin-bottom: 4%;
`;
const ItemBox = styled.div`
  width: 23.5%;
  height: 48%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
const ItemFirst = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  margin-left: 5%;
`;
const ItemImage = styled.div`
  width: 30%;
  height: 10vh;
  border: 3px solid #d9d9d9;
  object-fit: fill;
`;
const ItemInfo = styled.div`
  margin-left: 1.5vh;
  margin-top: 1.5vh;
  width: 50%;
  height: 7vh;
  font-size: 0.7rem;
  line-height: 1.3rem;
`;
const ItemName = styled.div`
  width: 70%;
  height: 12vh;
  margin-left: 5%;
  margin-top: 7%;
`;
const ItemDday = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-top: 4.5%;
`;
export default ProgramList;
