import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Select from 'react-select';
import {  StateOption, stateOptions,StudyOption,StudyOptions,HobbyOption,HobbyOptions ,MajorOption,MajorOptions} from './data';
import { FaBook ,FaRunning,FaStackOverflow} from "react-icons/fa";


// const PrStepFirst = (props) => {
//   return (
//     <BasicForm>
//       <HellowStyle>프로젝트 카테고리를 선택해주세요</HellowStyle>
//       <TestList>
//         <Test onClick={props.increaseStep}></Test>
//         <Test></Test>
//         <Test></Test>
//         <Test></Test>
//         <Test></Test>
//         <Test></Test>
//       </TestList>
//     </BasicForm>
//   );
// };
// const BasicForm = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: start;
// `;
// const HellowStyle = styled.div`
//   margin-top: 10%;
//   margin-bottom: 5%;
//   font-family: "NotoSansMedium";
//   font-size: 1.5rem;
//   color: #000;
// `;
// const TestList = styled.div`
//   height: 40%;
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;
// const Test = styled.div`
//   width: 25%;
//   height: 60%;
//   margin-right: 4%;
//   margin-bottom: 4%;
//   box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
//   background-color: #fff;
//   border-top-right-radius: 4rem;
//   cursor: pointer;
// `;
// export default PrStepFirst;


const PrStepFirst = (props:any) => {   //이거 any쓰는건 좋지않은 방법이여서 다른해결방법을 더 찾아봐야할듯!
  return (
    <BasicForm>
      <p
      style={{marginTop:"5rem",marginLeft:"3rem",fontSize:"1rem"}}
      >카테고리 선택하기</p>
      <div
        style={{marginTop:"1rem",marginLeft:"3rem"}}
      >
      
    <Select
    defaultValue={[stateOptions[2], stateOptions[3]]}
    isMulti
    name="colors"
    options={stateOptions}
    className="basic-multi-select"
    classNamePrefix="select"
    
  />
  </div>

  <p
      style={{marginTop:"3rem",marginLeft:"3rem",fontSize:"1rem"}}
      >선택한 대표 카테고리들의 관심사를 선택해주세요</p>
      <div
        style={{marginTop:"1rem",marginLeft:"3rem"}}
      >
      <p style={{fontSize:"0.8rem",marginBottom:"0.5rem",marginTop:"2rem"}}><FaBook style={{marginRight:"0.3rem",color:"#399DA3"}}/>학습</p>
    <Select
    defaultValue={[StudyOptions[2], StudyOptions[3]]}
    isMulti
    name="colors"
    options={StudyOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
  </div>

  <div
        style={{marginLeft:"3rem"}}
      >
      <p style={{fontSize:"0.8rem",marginBottom:"0.5rem",marginTop:"1rem"}}><FaRunning style={{marginRight:"0.3rem",color:"#399DA3"}}/>취미</p>
    <Select
    defaultValue={[HobbyOptions[2], HobbyOptions[3]]}
    isMulti
    name="colors"
    options={HobbyOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
  </div>

  <div
        style={{marginLeft:"3rem"}}
      >
      <p style={{fontSize:"0.8rem",marginBottom:"0.5rem",marginTop:"1rem"}}><FaStackOverflow style={{marginRight:"0.3rem",color:"#399DA3"}}/>전공</p>
    <Select
    defaultValue={[MajorOptions[2], MajorOptions[3]]}
    isMulti
    name="colors"
    options={MajorOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
  </div>

  <Button
        variant="contained"
        style={{fontSize:"1rem",left:"45%",marginTop:"17.3rem"}}
        sx={{ height: "2.2rem", width: "11rem",backgroundColor:"#399DA3"}}
        onClick={(props.increaseStep)}
      >
        상세정보 입력하기
      </Button>

  </BasicForm>
  );
};

const BasicForm = styled.div`
  width: 96%;
  align-items: center;
  text-align: start;
`;
export default PrStepFirst;