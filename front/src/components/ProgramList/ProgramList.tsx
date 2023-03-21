import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaRegBookmark,
  FaRegEnvelope,
  FaSearch,
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
  const [kindtab, setkindTab] = useState<string>("to");
  const [fieldtab, setfieldTab] = useState<string>("");
  return (
    <ListForm>
      {/* 필터링해주는 칸 ------------------------------------------------------------------------ */}

      <Tagbox>
        <TagFrom>
          <p
            style={{ fontSize: "2rem", marginTop: "6rem", marginLeft: "8rem" }}
          >
            보고싶은 모집글만
          </p>
          <p
            style={{
              fontSize: "2rem",
              marginLeft: "8rem",
              marginTop: "0.8rem",
            }}
          >
            골라보기
          </p>
        </TagFrom>
        <PlaceForm>
          <p
            style={{
              marginBottom: "2rem",
              fontSize: "1.3rem",
              fontWeight: "bold",
            }}
          >
            수업방식
          </p>
          <Placebox>
            <div
              className={`place ${tab === "curr" ? "active" : ""}`}
              onClick={() => setTab("curr")}
            >
              온라인
            </div>
            <div
              className={`place2 ${tab === "prev" ? "active" : ""}`}
              onClick={() => setTab("prev")}
            >
              오프라인
            </div>
            <div
              className={`place3 ${tab === "th" ? "active" : ""}`}
              onClick={() => setTab("th")}
            >
              온라인 & 오프라인 병행
            </div>
          </Placebox>
        </PlaceForm>
        <KindForm>
          <p
            style={{
              marginBottom: "2rem",
              fontSize: "1.3rem",
              fontWeight: "bold",
            }}
          >
            종류
          </p>
          <Kindbox>
            <div
              className={`kind ${kindtab === "to" ? "active" : ""}`}
              onClick={() => setkindTab("to")}
            >
              전체
            </div>
            <div
              className={`kind2 ${kindtab === "te" ? "active" : ""}`}
              onClick={() => setkindTab("te")}
            >
              과외
            </div>
            <div
              className={`kind3 ${kindtab === "men" ? "active" : ""}`}
              onClick={() => setkindTab("men")}
            >
              멘토 & 멘티
            </div>
          </Kindbox>
        </KindForm>
        <FieldForm>
          <p
            style={{
              marginBottom: "2rem",
              fontSize: "1.3rem",
              fontWeight: "bold",
            }}
          >
            관심분야
          </p>
          <Fieldbox>
            <div
              className={`field ${fieldtab === "to" ? "active" : ""}`}
              onClick={() => setfieldTab("to")}
            >
              전체
            </div>
            <div
              className={`field2 ${fieldtab === "st" ? "active" : ""}`}
              onClick={() => setfieldTab("st")}
            >
              학습
            </div>

            <div
              className={`field3 ${fieldtab === "ho" ? "active" : ""}`}
              onClick={() => setfieldTab("ho")}
            >
              취미
            </div>
            <div
              className={`field4 ${fieldtab === "ma" ? "active" : ""}`}
              onClick={() => setfieldTab("ma")}
            >
              전공
            </div>
            <div
              className={`field5 ${fieldtab === "pa" ? "active" : ""}`}
              onClick={() => setfieldTab("pa")}
            >
              진로
            </div>
            <div
              className={`field6 ${fieldtab === "intro" ? "active" : ""}`}
              onClick={() => setfieldTab("intro")}
            >
              자소서
            </div>
            <div
              className={`field7 ${fieldtab === "ac" ? "active" : ""}`}
              onClick={() => setfieldTab("ac")}
            >
              대학진학
            </div>
            <div
              className={`field8 ${fieldtab === "it" ? "active" : ""}`}
              onClick={() => setfieldTab("it")}
            >
              창업
            </div>
            <div
              className={`field9 ${fieldtab === "ti" ? "active" : ""}`}
              onClick={() => setfieldTab("ti")}
            >
              자격증
            </div>
          </Fieldbox>
        </FieldForm>
      </Tagbox>

      {/* 검색칸----------------------------------------------------- */}

      <SearchForm>
        <TextField
          sx={{
            width: "90%",
            fontSize: "0.8rem",
          }}
          size="small"
        ></TextField>
        <FaSearch
          style={{ width: "5%", marginTop: "0.8rem", marginLeft: "0.8rem" }}
          size="40%"
        ></FaSearch>
        .
      </SearchForm>

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
const TagFrom = styled.div`
  width: 35%;
  margin-right: 2rem;
`;
const Tagbox = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;
const SearchForm = styled.div`
  width: 32%;
  height: 3.4%;
  margin-left: 63.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #d9d9d9;
`;
const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
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
const PlaceForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
  height: 60%;
  margin-top: 6rem;
  margin-right: 1.8rem;
`;
const Placebox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  font-size: 0.9rem;
  font-weight: bold;
`;
const KindForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
  height: 60%;
  margin-top: 6rem;
`;
const Kindbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.9rem;
  font-weight: bold;
`;
const FieldForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 60%;
  margin-top: 6rem;
  margin-left: 0.2rem;
`;
const Fieldbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.9rem;
  font-weight: bold;
`;
export default ProgramList;
