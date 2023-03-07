import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button, FormControl, Input, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
const StepSecond = (props) => {
  const {
    control,
    register,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirm, setpasswordComfirm] = useState("");
  const teachingStyle = ["온라인", "오프라인", "온라인&오프라인 병행"];
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
  const idHandleChange = (event) => {
    setId(event.target.value);
  };
  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };
  const passwordComfirmHandleChange = (event) => {
    setpasswordComfirm(event.target.value);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      style={{ padding: "4%", height: "87%" }}
    >
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
              {...register("name", {
                required: "이메일은 필수입력입니다.",
              })}
            />
            출생연도
            <FormControl>
              <Controller
                defaultValue=""
                control={control}
                name="age"
                render={({ field }) => (
                  <Select
                    {...field}
                    disableUnderline={true}
                    sx={{
                      width: "3.9rem",
                      height: "100%",
                      border: "solid 1px #d6d6d6",
                      boxShadow: "0",
                    }}
                    displayEmpty
                    variant="standard"
                    name="age"
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{
                        display: "none",
                      }}
                    >
                      <em>-</em>
                    </MenuItem>
                    <MenuItem value={2000}>2000</MenuItem>
                    <MenuItem value={1999}>1999</MenuItem>
                    <MenuItem value={1998}>1998</MenuItem>
                    <MenuItem value={1997}>1997</MenuItem>
                  </Select>
                )}
              />
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
              {...register("email", {
                required: "이메일은 필수입력입니다.",
              })}
            />
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
              {...register("school", {
                required: "학교는 필수입력입니다.",
              })}
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
          <InformationBoxLine style={{ justifyContent: "start" }}>
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
              {...register("학과", {
                required: "학교는 필수입력입니다.",
              })}
            />
            학년
            <FormControl>
              <Controller
                defaultValue=""
                control={control}
                name="grade"
                render={({ field }) => (
                  <Select
                    {...field}
                    disableUnderline={true}
                    sx={{
                      height: "40px",
                      width: "120%",
                      border: "solid 1px #d6d6d6",
                      boxShadow: "0",
                    }}
                    displayEmpty
                    variant="standard"
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{
                        display: "none",
                      }}
                    >
                      <em>학년</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
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
              {teachingStyle.map((value, index) => (
                <div key={index}>
                  <input type="checkbox" value={value}></input>
                  {value}
                </div>
              ))}
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
              {...register("소개", {
                required: "소개는 필수입력입니다.",
              })}
            />
          </InformationBoxLine>
        </InformationBox>
      </div>

      {/* ---------------3번째칸 아이디 & 비밀번호---------------  */}

      <IdWithPasswordBox>
        <IdWithPasswordLine>
          아아디
          <Input
            onChange={idHandleChange}
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
            {...register("아이디", {
              required: "아이디는 필수입력입니다.",
            })}
          />
        </IdWithPasswordLine>
        <IdWithPasswordLine>
          비밀번호
          <Input
            onChange={passwordHandleChange}
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
            {...register("password", {
              required: "비밀번호는 필수입력입니다.",
            })}
          />
        </IdWithPasswordLine>
        <IdWithPasswordLine>
          비밀번호 확인
          <Input
            onChange={passwordComfirmHandleChange}
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
            {...register("비밀번호2", {
              required: "비밀번호2는 필수입력입니다.",
              validate: {
                confirmPassword: (value) => {
                  if (getValues("password") !== value) {
                    return "비밀번호가 일치하지않습니다!.";
                  }
                },
              },
            })}
          />
        </IdWithPasswordLine>
      </IdWithPasswordBox>

      {/* ---------------4번째칸 회원가입버튼---------------  */}

      <SubmitButton>
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          color="primary"
          sx={{
            width: "20%",
            height: "100%",
            fontSize: "100%",
            fontFamily: "NotoSansLight",
            boxShadow: "0",
          }}
          // onClick={props.increaseStep}
        >
          회원가입하기
        </Button>
      </SubmitButton>
    </form>
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
  margin-top: 2%;
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
