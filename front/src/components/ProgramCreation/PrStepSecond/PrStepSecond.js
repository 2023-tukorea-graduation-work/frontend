import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { ko } from 'date-fns/esm/locale';
// import { FaCalendarAlt } from "react-icons/fa";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Button, FormControl, Input,TextField, MenuItem, Select ,Checkbox} from "@mui/material";
const PrStepSecond = (props) => {
  const [grade, setGrade] = useState("");
  const teachingStyle = [
    "온라인",
    "오프라인",
    "온라인&오프라인 병행",
  ];
  const [plan, setPlan] = useState([
    { id: 1, title: "" },
    { id: 2, title: "" },
  ]);
  const week = useRef(2);
  const gradeHandleChange = (event) => {
    setGrade(event.target.value);
    console.log(grade);
  };
  function titleHandleChange(event, index) {
    const copyPlan = [...plan];
    copyPlan[index].title = event.target.value;
    setPlan(copyPlan);
  }
  const addPlan = () => {
    week.current += 1;
    setPlan((state) => [...state, { id: week.current, title: "" }]);
    console.log(week.current);
  };

  const StartCal = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker 
      dateFormat="yyyy년 MM월 dd일"
      minDate={new Date()}
      selected={startDate} onChange={date => setStartDate(date)}
      locale={ko}
      />
    );
  };

  const EndCal = () => {
    const [endDate, setEndDate] = useState(new Date());
    return (
      <DatePicker 
      dateFormat="yyyy년 MM월 dd일"
      selected={endDate} onChange={date => setEndDate(date)}
      locale={ko}
      />
    );
  };

  return (
    <BasicForm>

      <InformationBox>
      <p
        style={{marginBottom:"0.9rem",
                fontSize:"0.7rem",
                color:"#777777",
              }}
      >선택한 카테고리 -> 카테고리세부주제</p>
        <p>주제</p>
        <Input
          disableUnderline={true}
          sx={{
            width: "100%",
            height: "2.5em",
            borderRadius: "3px",
            border: "solid 1px #d6d6d6",
            boxShadow: "0",
            margin: "1rem 0 1rem 0",
            fontSize:"0.8rem",
          }}
          placeholder=""
        />
        <p
        style={{marginBottom:"1rem",display:"flex"}}
        >프로그램소개
        </p>

        <TextField
          multiline
          rows={2}
          disableUnderline={true}
          style={{
            width: "100%",
            borderRadius: "3px",
            border: "solid 1px #d6d6d6",
            boxShadow: "0",
            fontSize:"0.8rem",
          }}
          placeholder=""
        />

        <InformationBoxLine>
          <p
            style={{marginTop:"1rem"}}
          >활동가능기간</p>
          
          <div
            style={{marginLeft:"1rem",
                    marginRight:"1rem",
                    marginTop:"1rem"
                  }}
          > 
          <StartCal/>
          </div>
          <p
            style={{marginTop:"1rem"}}
          >~</p>
          <div
            style={{marginLeft:"1rem",
            marginRight:"1rem",
            marginTop:"1rem"
          }}
          >
          <EndCal/>
          </div>
          
          {/* <FaCalendarAlt/> */}
          {/* <Input
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
          /> */}
        </InformationBoxLine>
        <InformationBoxLine>
          수업방식
          <div
            style={{
              justifyContent: "space-evenly",
              display: "flex",
              width: "55%",
              height: "70%",
              backgroundColor: "#f8f8f8",
              alignItems: "center",
              marginLeft:"2.4rem",
            }}
          >
            {teachingStyle.map((value, index) => (
              <>
                <input type="checkbox" key={index} value={value}></input>
                {value}
              </>
            ))}
          </div>
          <CheckStyled>
            <Checkbox style={{color:"#83C2C5"}} />
            프로젝트생성여부
          </CheckStyled>

        </InformationBoxLine>
        <InformationBoxLine>

          모집인원
          <FormControl>
            <Select
              disableUnderline={true}
              sx={{
                height: "30px",
                width: "150%",
                border: "solid 1px #d6d6d6",
                boxShadow: "0",
                marginLeft: "95%",
                paddingLeft: "20%",
                fontSize:"0.8rem",
                
              }}
              value={grade}
              onChange={gradeHandleChange}
              displayEmpty
              variant="standard"
            >
              <MenuItem value="">
                <em>-</em>
              </MenuItem>
              <MenuItem sx={{fontSize:"0.8rem"}}value={1}>1</MenuItem>
              <MenuItem sx={{fontSize:"0.8rem"}} value={2}>2</MenuItem>
              <MenuItem sx={{fontSize:"0.8rem"}} value={3}>3</MenuItem>
              <MenuItem sx={{fontSize:"0.8rem"}} value={4}>4</MenuItem>
              <MenuItem sx={{fontSize:"0.8rem"}} value={5}>5</MenuItem>
              <MenuItem sx={{fontSize:"0.8rem"}} value={6}>6</MenuItem>
            </Select>
          </FormControl>

         <p
          style={{marginLeft:"4.5rem"}}
         >모집기간</p>
          <div
            style={{marginLeft:"1rem",
                    marginRight:"1rem",
                  }}
          > 

          <StartCal/>
          </div>
          ~
          <div
            style={{marginLeft:"1rem",
            marginRight:"1rem"
          }}
          >
          <EndCal/>
          </div>
         
        </InformationBoxLine>
        학습 계획
      </InformationBox>

      <LearningPlan>
        <table style={{ border: "solid 1px #d6d6d6",marginTop:"1rem"}}>
          <tbody>
            {plan.map((state, index) => (
              <>
                <tr>
                  <td
                    style={{
                      border: "solid 1px #d6d6d6",
                      textAlign: "center",
                      paddingTop: "5%",
                      height: "3.5rem",
                    }}
                  >
                    {state.id}주차
                  </td>
                  <td
                    style={{
                      border: "solid 1px #d6d6d6",
                    }}
                  >
                    <Input
                      disableUnderline={true}
                      multiline
                      onChange={(event) => titleHandleChange(event, index)}
                      value={state.title}
                      sx={{
                        height: "100%",
                        width: "100%",
                        border: "0",
                        boxShadow: "0",
                        fontSize:"0.8rem",
                        marginLeft:"0.5rem",
                      }}
                    />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <button 
        style={{backgroundColor:"#E6F3F3",border: "solid 1px #d6d6d6"}}
        onClick={addPlan}>추가</button>
      </LearningPlan>
      <Button
        variant="contained"
        sx={{
          width: "18%",
          height: "5.5%",
          fontSize: "80%",
          fontFamily: "NotoSansRegular",
          boxShadow: "0",
          marginTop:"2%",
          marginBottom:"2%",
          backgroundColor:"#399DA3"
        }}
        onClick={props.increaseStep}
      >
        작성 완료
      </Button>
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
  align-items: center;

`;
const InformationBox = styled.div`
  width: 92%;
  height: 24rem;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 3%;
  font-Size:0.8rem;
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
  font-Size:0.8rem;
  overflow: auto;
`;
const CheckStyled = styled.div`
  align-items: center;
  font-family: NotoSansLight;
  font-size:0.8rem;
`;
export default PrStepSecond;
