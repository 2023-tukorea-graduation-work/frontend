import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { ko } from "date-fns/esm/locale";
// import { FaCalendarAlt } from "react-icons/fa";
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
import { useAppSelector } from "../../../app/hook";
interface ButtonProps {
  increaseStep: () => void;
}

const PrStepSecond = (props: ButtonProps) => {
  const {
    control,
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "programWeeks",
  });
  const teachingStyle = ["온라인", "오프라인", "온라인&오프라인 병행"];
  const mento_no = useAppSelector((state) => state.login.user_nb);
  function dateFormat(date: any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;
    return date.getFullYear() + "-" + month + "-" + day;
  }

  const onSubmit = (data: any) => {
    console.log(data);
    console.log(typeof mento_no);
    console.log(mento_no);
    axios({
      url: "/api/v1/program",
      method: "post",
      data: {
        mento_no: mento_no,
        subject: `${data.subject}`,
        pro_place: `${data.act_place}`,
        capacity: `${data.capacity}`,
        detail: `${data.detail}`,
        pro_finish_date: `${dateFormat(data.pro_finish_date)}`,
        pro_start_date: `${dateFormat(data.pro_start_date)}`,
        programWeeks: data.programWeeks,
        recruit_finish_date: `${dateFormat(data.recruit_finish_date)}`,
        recruit_start_date: `${dateFormat(data.recruit_start_date)}`,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const onError = (error: any) => {
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
        <p
          style={{
            marginBottom: "0.9rem",
            fontSize: "0.7rem",
            color: "#777777",
          }}
        >
          선택한 카테고리 - 카테고리세부주제
        </p>
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
            fontSize: "0.8rem",
          }}
          placeholder=""
        />
        <p style={{ marginBottom: "1rem " }}>프로그램소개</p>
        <InformationBoxLine>
          <TextField
            multiline
            rows={2}
            sx={{
              width: "100%",
              borderRadius: "3px",
              border: "solid 1px #d6d6d6",
              boxShadow: "0",
              fontSize: "0.8rem",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // default
                },
                "&.Mui-focused fieldset": {
                  border: "0px",
                },
                "&:hover fieldset": {
                  border: "0px",
                },
              },
            }}
            placeholder=""
            {...register("subject", {
              required: "주제 필수입력입니다.",
            })}
          />
        </InformationBoxLine>
        <InformationBoxLine>
          <p style={{ width: "10%" }}>활동가능기간</p>
          <div style={{ width: "8rem", marginRight: "1rem" }}>
            <Controller
              control={control}
              name="pro_start_date"
              render={({ field }) => (
                <InputDate
                  {...field}
                  dateFormat="yyyy년 MM월 dd일"
                  selected={field.value}
                  onChange={(date: any) => field.onChange(date)}
                  locale={ko}
                />
              )}
            />
          </div>
          ~
          <div style={{ width: "8rem", marginLeft: "1rem" }}>
            <Controller
              control={control}
              name="pro_finish_date"
              render={({ field }) => (
                <InputDate
                  {...field}
                  dateFormat="yyyy년 MM월 dd일"
                  selected={field.value}
                  onChange={(date: any) => field.onChange(date)}
                  locale={ko}
                />
              )}
            />
          </div>
        </InformationBoxLine>
        <InformationBoxLine>
          수업방식
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              width: "%",
              height: "150%",
              backgroundColor: "#f8f8f8",
              alignItems: "center",
              marginLeft: "2.4rem",
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
          <div style={{ width: "5rem", marginLeft: "4.5%", marginRight: "1%" }}>
            <FormControl>
              <Controller
                defaultValue=""
                control={control}
                name="capacity"
                rules={{ required: "인원은 필수선택입니다." }}
                render={({ field }) => (
                  <Select
                    disableUnderline
                    {...field}
                    sx={{
                      height: "30px",
                      width: "150%",
                      border: "solid 1px #d6d6d6",
                      boxShadow: "0",
                      paddingLeft: "20%",
                      fontSize: "0.8rem",
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
                    <MenuItem sx={{ fontSize: "0.8rem" }} value={1}>
                      1
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "0.8rem" }} value={2}>
                      2
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "0.8rem" }} value={3}>
                      3
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "0.8rem" }} value={4}>
                      4
                    </MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </div>
          <div style={{ width: "5rem" }}>활동가능기간</div>
          <div style={{ width: "8rem", marginRight: "1rem" }}>
            <Controller
              control={control}
              name="recruit_start_date"
              render={({ field }) => (
                <InputDate
                  {...field}
                  dateFormat="yyyy년 MM월 dd일"
                  selected={field.value}
                  onChange={(date: any) => field.onChange(date)}
                  locale={ko}
                />
              )}
            />
          </div>
          ~
          <div style={{ width: "8rem", marginLeft: "1rem" }}>
            <Controller
              control={control}
              name="recruit_finish_date"
              render={({ field }) => (
                <InputDate
                  {...field}
                  dateFormat="yyyy년 MM월 dd일"
                  selected={field.value}
                  onChange={(date: any) => field.onChange(date)}
                  locale={ko}
                />
              )}
            />
          </div>
        </InformationBoxLine>
        학습 계획
      </InformationBox>

      <LearningPlan>
        <table style={{ border: "solid 1px #d6d6d6", marginTop: "2.5rem" }}>
          <tbody>
            {fields.map((field, index) => (
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
                      key={field.id}
                      {...register(`programWeeks.${index}.detail`)}
                      multiline
                      rows={5}
                      sx={{
                        width: "100%",
                        height: "100%",
                        border: "0",
                        boxShadow: "0",
                        fontSize: "0.8rem",
                        "&:hover": {
                          borderColor: "blue",
                          backgroundColor: "white",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "white", // default
                          },
                          "&.Mui-focused fieldset": {
                            border: "0px",
                          },
                          "&:hover fieldset": {
                            border: "0px",
                          },
                        },
                      }}
                    />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </LearningPlan>
      <button
        type="button"
        onClick={() => append({ detail: "" })}
        style={{ backgroundColor: "#E6F3F3", border: "solid 1px #d6d6d6" }}
      >
        학습계획 추가
      </button>
      <Button
        type="submit"
        disabled={isSubmitting}
        variant="contained"
        color="secondary"
        sx={{
          height: "2.2rem",
          width: "11rem",
          fontSize: "1rem",
          fontFamily: "NotoSansRegular",
          boxShadow: "0",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        작성 완료
      </Button>
    </form>
  );
};
const InformationBox = styled.div`
  width: 92%;
  height: 24rem;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 3%;
  font-size: 0.8rem;
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
  font-size: 0.8rem;
  overflow: auto;
`;
const InputDate = styled(DatePicker)`
  height: 1.5rem;
  width: 100%;
  border-radius: 4.2px;
  border: solid 0.8px #d6d6d6;
  boxshadow: 0;
  margin-right: 100px;
`;
export default PrStepSecond;
