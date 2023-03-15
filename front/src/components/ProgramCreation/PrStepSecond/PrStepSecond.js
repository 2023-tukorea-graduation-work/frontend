import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  FormControl,
  Input,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { Controller, useFieldArray, useForm } from "react-hook-form";
const PrStepSecond = (props) => {
  const {
    control,
    register,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  const teachingStyle = ["온라인", "오프라인", "온라인&오프라인 병행"];
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    console.log(data);
    axios({
      url: "/api/v1/login",
      method: "post",
      data: {
        email: `${data.email}`,
        password: `${data.password}`,
        user_gb: "MENTO",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "start",
        fontFamily: "NotoSansRegular",
        fontSize: "1.2rem",
        alignItems: "center",
        overflow: "auto",
        overflowX: "hidden",
      }}
    >
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
          {...register("subject", {
            required: "주제 필수입력입니다.",
          })}
        />
        <p>프로그램 소개글</p>
        <InformationBoxLine>
          <TextField
            multiline
            rows={5}
            sx={{
              width: "100%",
              border: "0",
              boxShadow: "0",
            }}
            {...register("detail", {
              required: "소개글 필수입력입니다.",
            })}
          />
        </InformationBoxLine>
        <InformationBoxLine>
          <div style={{ width: "30%" }}>활동가능기간</div>
          {/* <Controller
            control={control}
            name="date-input"
            render={({ field }) => (
              <DatePicker
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          /> */}
          <Controller
            control={control}
            name="pro_start_date"
            render={({ field }) => (
              <InputDate
                {...field}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
              />
            )}
          />
          <Controller
            control={control}
            name="pro_finish_date"
            render={({ field }) => (
              <InputDate
                {...field}
                selected={field.value}
                onChange={(date) => field.onChange(date)}
              />
            )}
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
              <div key={index}>
                <input
                  type="radio"
                  value={value}
                  {...register("act_place", {
                    required: "활동장소는 필수입력입니다.",
                  })}
                ></input>
                {value}
              </div>
            ))}
          </div>
        </InformationBoxLine>
        <InformationBoxLine>
          모집인원
          <div style={{ width: "10%" }}>
            <FormControl>
              <Controller
                defaultValue=""
                control={control}
                name="capacity"
                rules={{ required: "인원은 필수선택입니다." }}
                render={({ field }) => (
                  <Select
                    {...field}
                    disableUnderline={true}
                    sx={{
                      height: "40px",
                      width: "150%",
                      border: "solid 1px #d6d6d6",
                      boxShadow: "0",
                      marginLeft: "20%",
                      paddingLeft: "20%",
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
                      <em>인원</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </div>
          <div style={{ width: "12%" }}>활동가능기간</div>
          <div style={{ width: "30%" }}>
            <Controller
              control={control}
              name="recruit_start_date"
              render={({ field }) => (
                <InputDate
                  {...field}
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                />
              )}
            />
          </div>
          <div style={{ width: "30%" }}>
            <Controller
              control={control}
              name="recruit_finish_dte"
              render={({ field }) => (
                <InputDate
                  {...field}
                  selected={field.value}
                  onChange={(date) => field.onChange(date)}
                />
              )}
            />
          </div>
        </InformationBoxLine>
      </InformationBox>
      <LearningPlan>
        <p>학습 계획</p>
        <table style={{ border: "solid 1px #d6d6d6" }}>
          <tbody>
            {fields.map((state, index) => (
              <>
                <tr>
                  <td
                    style={{
                      border: "solid 1px #d6d6d6",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    {index}주차
                  </td>
                  <td
                    style={{
                      border: "solid 1px #d6d6d6",
                    }}
                  >
                    <TextField
                      {...register(`test.${index}`)}
                      multiline
                      rows={5}
                      sx={{
                        width: "100%",
                        border: "0",
                        boxShadow: "0",
                      }}
                    />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={() => append(" ")}>
          추가
        </button>
      </LearningPlan>
      <Button
        type="submit"
        disabled={isSubmitting}
        variant="contained"
        color="primary"
        sx={{
          width: "20%",
          height: "4%",
          fontSize: "100%",
          fontFamily: "NotoSansRegular",
          boxShadow: "0",
        }}
      >
        작성 완료
      </Button>
    </form>
  );
};

const InformationBox = styled.div`
  width: 92%;
  height: 60%;
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
const InputDate = styled(DatePicker)`
  height: 3rem;
  width: 70%;
  border-radius: 4.2px;
  border: solid 0.8px #d6d6d6;
  boxshadow: 0;
  margin-right: 100px;
`;
export default PrStepSecond;
