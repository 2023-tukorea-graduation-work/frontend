import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button, FormControl, Input, MenuItem, Select } from "@mui/material";

const StepSecond = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const teachingStyle = [
    "온라인",
    "오프라인",
    "서울",
    "경기도",
    "인천",
    "그외지역",
  ];
  const nameHandleChange = (event) => {
    setName(event.target.value);
  };
  const ageHandleChange = (event) => {
    setAge(event.target.value);
  };
  const emailHandleChange = (event) => {
    setEmail(event.target.value);
  };
  const directEmailHandleChange = (event) => {
    setEmail(event.target.value);
  };
  const gradeHandleChange = (event) => {
    setGrade(event.target.value);
  };
  return (
    <div style={{ padding: "4%", height: "87%" }}>
      {/* ---------------1번째칸 관심분야---------------  */}

      <div
        style={{
          backgroundColor: "skyblue",
          height: "10rem",
          fontFamily: "NotoSansRegular",
        }}
      >
        관심분야 선택
      </div>

      {/* ---------------2번째칸 프로필사진 & 정보입력---------------  */}

      <div style={{ display: "flex", height: "42.5%" }}>
        <ImageUpload>
          <ImageShow>프로필 사진</ImageShow>
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: "8%",
              width: "80%",
              height: "13%",
              fontSize: "100%",
              fontFamily: "NotoSansLight",
              boxShadow: "0",
            }}
          >
            첨부
          </Button>
        </ImageUpload>
        <InformationBox>
          <InformationBoxLine>
            이름
            <Input
              value={name}
              onChange={nameHandleChange}
              disableUnderline={true}
              placeholder="이름입력"
              sx={{
                fontSize: "1rem",
                height: "100%",
                width: "15%",
                boxShadow: "0",
                border: "0",
                borderRadius: "0",
                borderBottom: "solid 2px",
                borderBottomColor: "#d6d6d6",
              }}
            />
            출생연도
            <FormControl>
              <Select
                disableUnderline={true}
                sx={{
                  width: "3.9rem",
                  height: "100%",
                  border: "solid 1px #d6d6d6",
                  boxShadow: "0",
                }}
                value={age}
                onChange={ageHandleChange}
                displayEmpty
                variant="standard"
              >
                <MenuItem value="">
                  <em>2000</em>
                </MenuItem>
                <MenuItem value={1999}>1999</MenuItem>
                <MenuItem value={1998}>1998</MenuItem>
                <MenuItem value={1997}>1997</MenuItem>
              </Select>
            </FormControl>
            이메일
            <Input
              disableUnderline={true}
              placeholder="이메일을 입력"
              sx={{
                fontSize: "1rem",
                height: "100%",
                width: "16%",
                boxShadow: "0",
                border: "0",
                borderRadius: "0",
                borderBottom: "solid 2px",
                borderBottomColor: "#d6d6d6",
              }}
            />
            @
            <Input
              disableUnderline={true}
              value={email}
              onChange={directEmailHandleChange}
              placeholder="직접입력"
              sx={{
                fontSize: "1rem",
                height: "100%",
                width: "11%",
                boxShadow: "0",
                border: "0",
                borderRadius: "0",
                borderBottom: "solid 2px",
                borderBottomColor: "#d6d6d6",
              }}
            />
            <FormControl>
              <Select
                disableUnderline={true}
                sx={{
                  height: "100%",
                  width: "110%",
                  border: "solid 1px #d6d6d6",
                  boxShadow: "0",
                }}
                value={email}
                onChange={emailHandleChange}
                displayEmpty
                variant="standard"
              >
                <MenuItem value="">
                  <em style={{}}>메일주소 선택</em>
                </MenuItem>
                <MenuItem value={"gmail.com"}>gmail.com</MenuItem>
                <MenuItem value={"hanmail.com"}>hanmail.com</MenuItem>
                <MenuItem value={"youtube.com"}>youtube.com</MenuItem>
              </Select>
            </FormControl>
          </InformationBoxLine>
          <InformationBoxLine>
            학교
            <Input
              disableUnderline={true}
              sx={{
                height: "100%",
                width: "60%",
                borderRadius: "4.2px",
                border: "solid 0.8px #d6d6d6",
                boxShadow: "0",
              }}
              placeholder="직접입력"
            />
            학교찾기
            <Input
              disableUnderline={true}
              sx={{
                height: "100%",
                width: "20%",
                borderRadius: "4.2px",
                border: "solid 0.8px #d6d6d6",
                boxShadow: "0",
              }}
              placeholder="학교명 검색"
            />
          </InformationBoxLine>
          <InformationBoxLine>
            학과
            <Input
              disableUnderline={true}
              sx={{
                height: "100%",
                width: "20%",
                borderRadius: "4.2px",
                border: "solid 0.8px #d6d6d6",
                boxShadow: "0",
              }}
              placeholder="학과"
            />
            학년
            <FormControl>
              <Select
                disableUnderline={true}
                sx={{
                  height: "40px",
                  width: "120%",
                  border: "solid 1px #d6d6d6",
                  boxShadow: "0",
                }}
                value={grade}
                onChange={gradeHandleChange}
                displayEmpty
                variant="standard"
              >
                <MenuItem value="">
                  <em>학년</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
            활동가능기간
            <Input
              disableUnderline={true}
              sx={{
                height: "100%",
                width: "20%",
                borderRadius: "4.2px",
                border: "solid 0.8px #d6d6d6",
                boxShadow: "0",
              }}
              placeholder=""
            />
            ~
            <Input
              disableUnderline={true}
              sx={{
                height: "100%",
                width: "20%",
                borderRadius: "4.2px",
                border: "solid 0.8px #d6d6d6",
                boxShadow: "0",
              }}
              placeholder=""
            />
          </InformationBoxLine>
          <InformationBoxLine>
            수업방식
            <div
              style={{
                justifyContent: "space-evenly",
                display: "flex",
                width: "85%",
                height: "100%",
                backgroundColor: "#f8f8f8",
              }}
            >
              {teachingStyle.map((value, index) => {
                return (
                  <>
                    <input type="checkbox" key={index} value={value}></input>
                    {value}
                  </>
                );
              })}
            </div>
          </InformationBoxLine>
          <InformationBoxLine>
            한줄자기소개
            <Input
              disableUnderline={true}
              sx={{
                height: "100%",
                width: "85%",
                borderRadius: "4.2px",
                border: "solid 0.8px #d6d6d6",
                boxShadow: "0",
              }}
              placeholder=""
            />
          </InformationBoxLine>
        </InformationBox>
      </div>

      {/* ---------------3번째칸 아이디 & 비밀번호---------------  */}

      <IdWithPasswordBox>
        <IdWithPasswordLine>
          아아디
          <Input
            value={name}
            onChange={nameHandleChange}
            disableUnderline={true}
            placeholder="이름을 입력하세요."
            sx={{
              fontSize: "1rem",
              height: "100%",
              width: "70%",
              boxShadow: "0",
              border: "0",
              borderRadius: "0",
              borderBottom: "solid 2px",
              borderBottomColor: "#d6d6d6",
            }}
          />{" "}
        </IdWithPasswordLine>
        <IdWithPasswordLine>
          비밀번호
          <Input
            value={name}
            onChange={nameHandleChange}
            disableUnderline={true}
            placeholder="비밀번호입력"
            sx={{
              fontSize: "1rem",
              height: "100%",
              width: "70%",
              boxShadow: "0",
              border: "0",
              borderRadius: "0",
              borderBottom: "solid 2px",
              borderBottomColor: "#d6d6d6",
            }}
          />
        </IdWithPasswordLine>
        <IdWithPasswordLine>
          비밀번호 확인
          <Input
            value={name}
            onChange={nameHandleChange}
            disableUnderline={true}
            placeholder="비밀번호확인"
            sx={{
              fontSize: "1rem",
              height: "100%",
              width: "70%",
              boxShadow: "0",
              border: "0",
              borderRadius: "0",
              borderBottom: "solid 2px",
              borderBottomColor: "#d6d6d6",
            }}
          />
        </IdWithPasswordLine>
      </IdWithPasswordBox>

      {/* ---------------4번째칸 회원가입버튼---------------  */}

      <SubmitButton>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "20%",
            height: "100%",
            fontSize: "100%",
            fontFamily: "NotoSansLight",
            boxShadow: "0",
          }}
          onClick={props.IncreaseStep}
        >
          회원가입하기
        </Button>
      </SubmitButton>
    </div>
  );
};

const ImageUpload = styled.div`
  width: 20%;
  height: 89%;
  padding: 1.25rem 1.125rem 0.891rem;
  border-radius: 5px;
  border: solid 1px #d6d6d6;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageShow = styled.div`
  width: 100%;
  height: 80%;
  background-color: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #afafaf;
  font-family: "NotoSansLight";
`;
const InformationBox = styled.div`
  margin-top: 3%;
  margin-left: 2%;
  font-family: "NotoSansMedium";
  height: 100%;
  width: 100%;
`;
const InformationBoxLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2%;
`;
const IdWithPasswordBox = styled.div`
  margin-top: 5%;
  font-family: NotoSansRegular;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const IdWithPasswordLine = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SubmitButton = styled.div`
  margin-top: 5%;
  height: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StepSecond;
