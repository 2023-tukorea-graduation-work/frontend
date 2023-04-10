import React from "react";
import styled from "@emotion/styled";
import Cal from "../ProgressDetail/cal";

interface ProgramProps {
  programNo: number;
}

const Calenderdetail = ({programNo} : ProgramProps) => {
  console.log(programNo);

  // axios({
  //   url: "/api/v1/mentee",
  //   method: "post",
  //   data: formData,
  // })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  

  return (
    <CalenderForm>
      <Calenderbox>
        <p
          style={{
            marginTop: "2.5rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginLeft: "1rem",
            marginBottom: "2rem",
          }}
        >
          일정
        </p>
        <Tablebox>
          <Cal programNo={programNo}></Cal>
        </Tablebox>
      </Calenderbox>
    </CalenderForm>
  );
};
const CalenderForm = styled.div`
  display: flex;
  flex-direction: row;
`;
const Calenderbox = styled.div`
  width: 100%;
  height: 82vh;
`;

const Tablebox = styled.div`
  width: 100%;
  background-color: skyblue;
`;

export default Calenderdetail;
