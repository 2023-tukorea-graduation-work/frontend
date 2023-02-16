import React, { useState } from "react";
import styled from "@emotion/styled";
import { FormControl, Input, MenuItem, Select } from "@mui/material";
const PrStepSecond = () => {
  const [grade, setGrade] = useState("");
  const gradeHandleChange = (event) => {
    setGrade(event.target.value);
  };
  const teachingStyle = [
    "온라인",
    "오프라인",
    "서울",
    "경기도",
    "인천",
    "그외지역",
  ];
  return (
    <BasicForm>
      <InformationBox>
        <p>주제</p>
        <Input
          disableUnderline={true}
          sx={{
            width: "100%",
            height: "13%",
            borderRadius: "3px",
            border: "solid 1px #d6d6d6",
            boxShadow: "0",
            margin: "1rem 0 1rem 0",
          }}
          placeholder=""
        />
        <InformationBoxLine>
          활동가능기간
          <Input
            disableUnderline={true}
            sx={{
              height: "100%",
              width: "15%",
              borderRadius: "4.2px",
              border: "solid 0.8px #d6d6d6",
              boxShadow: "0",
              margin: "0 1rem 0 1rem",
            }}
            placeholder=""
          />
          ~
          <Input
            disableUnderline={true}
            sx={{
              height: "100%",
              width: "15%",
              borderRadius: "4.2px",
              border: "solid 0.8px #d6d6d6",
              boxShadow: "0",
              margin: "0 1rem 0 1rem",
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
              width: "55%",
              height: "140%",
              backgroundColor: "#f8f8f8",
              alignItems: "center",
            }}
          >
            {teachingStyle.map((value, index) => (
              <>
                <input type="checkbox" key={index} value={value}></input>
                {value}
              </>
            ))}
          </div>
        </InformationBoxLine>
        <InformationBoxLine>
          모집인원
          <FormControl>
            <Select
              disableUnderline={true}
              sx={{
                height: "40px",
                width: "150%",
                border: "solid 1px #d6d6d6",
                boxShadow: "0",
                marginLeft: "20%",
                paddingLeft: "20%",
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
        </InformationBoxLine>
      </InformationBox>
      <LearningPlan>
        <p>학습 계획</p>
      </LearningPlan>
    </BasicForm>
  );
};
const BasicForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  font-family: "NotoSansRegular";
  font-size: 1.2rem;
`;
const InformationBox = styled.div`
  width: 92%;
  height: 35%;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 5%;
`;
const InformationBoxLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2%;
`;
const LearningPlan = styled.div`
  margin-left: 4%;
  margin-right: 4%;
  width: 92%;
  display: flex;
  flex-direction: column;
`;
export default PrStepSecond;
