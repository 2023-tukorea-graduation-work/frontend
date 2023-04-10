import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState, useRef, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { Button, Input, Switch, FormControlLabel } from "@mui/material";
import styled from "@emotion/styled";


interface ProgramProps {
  programNo: number;
}


// --------------------------------------------------------다른사람 일정 가져오는거-----------
// const fetchEvents = async (): Promise<any[]> => {
//   const response = await axios.get("/api/events");
//   return response.data;
// };
// --------------------------------------------------------

const localizer = momentLocalizer(moment);
interface MyEvent extends Event {
  program_week_no : number,
  content: string,
  mento_no: number | null,
  mentee_no: number | null,
  user_gb: string,
  schedule_gb: string,
  schedule_start_datetime: Date;
  schedule_finish_datetime: Date;
}

const myEvent: MyEvent = {
  program_week_no : 0,
  content: "",
  mento_no: null,
  mentee_no: null,
  user_gb: "",
  schedule_gb: "",
  schedule_start_datetime: new Date(),
  schedule_finish_datetime: new Date(),
};

interface EventFormProps {
  onSubmit: (event: MyEvent) => void;
}

function dateFormat(date: any) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  return date.getFullYear() + "-" + month + "-" + day + " " + hour + ":00:00";
}


const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  const [toggleValue, setToggleValue] = useState<string>("ToDoList");
  const toggleOnChange = () => {
    setToggleValue((state) =>
      state === "ToDoList" ? (state = "수업일정") : (state = "ToDoList")
    );
  };
  const startDate = new Date();
  const endDate = new Date();
  const [event, setEvent] = useState<MyEvent>({ ...myEvent });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvent((prevState) => ({ ...prevState, [name]: value }));
  };
  const {
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // session Storage 로 부터 로그인한 유저정보 가져옴.
    const user = JSON.parse(String(sessionStorage.getItem('user')));

    console.log(event.content)

    axios({
      method: "POST",
      url: "/api/v1/schedule",
      data: {
        program_week_no : 5,
        content: `${event.content}`,
        mento_no: (user.user_gb === "MENTO") ? user.user_no : null,
        mentee_no: (user.user_gb === "MENTEE") ? user.user_no : null,
        user_gb: user.user_gb,
        schedule_gb: toggleValue,
        schedule_start_datetime: `${dateFormat(event.schedule_start_datetime)}`,
        schedule_finish_datetime: `${dateFormat(event.schedule_finish_datetime)}`,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    onSubmit(event);
    setEvent({ ...myEvent });
  };

  return (
    <form style={{ backgroundColor: "skyblue" }} onSubmit={handleSubmit}>
      <Calbutton>
        <Input
          type="text"
          placeholder="일정"
          {...register("content", { required: "일정" })}
          value={event.content}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            width: "7rem",
            height: "2.5rem",
            marginRight: "1rem",
          }}
        />
        <Input
          type="datetime-local"
          value={moment(event.schedule_start_datetime).format("YYYY-MM-DDTHH:mm")}
          {...register("schedule_start_datetime")}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            width: "14rem",
            height: "2.5rem",
            marginRight: "1rem",
          }}
        />
        <p>~</p>
        <Input
          type="datetime-local"
          value={moment(event.schedule_finish_datetime).format("YYYY-MM-DDTHH:mm")}
          {...register("schedule_finish_datetime")}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            width: "14rem",
            height: "2.5rem",
            marginRight: "1rem",
          }}
        />
        <FormControlLabel
          sx={{
            fontFamily: "NotoSansLight",
            fontSize: "0.7rem",
          }}
          control={<Switch onChange={toggleOnChange} defaultChecked />}
          label={toggleValue === "ToDoList" ? "ToDoList" : "수업일정"}
        />
        <Button type="submit" disabled={isSubmitting}>
          추가하기
        </Button>
      </Calbutton>
    </form>
  );
};

const Cal = (props: ProgramProps) => {

  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);
  const [events, setEvents] = useState<MyEvent[]>([]);

  const handleSelect = (event: MyEvent) => {
    setSelectedEvent(event);

    console.log("selected event", event);
  };
  const addEvent = (event: MyEvent) => {
    //추가하기직전 moment형식을 Date로 변환
    const startDate = new Date(event.schedule_start_datetime);
    const endDate = new Date(event.schedule_finish_datetime);
    event.schedule_start_datetime = startDate;
    event.schedule_finish_datetime = endDate;
    setEvents((state) => [...state, event]);
  };
  
  // ------------------------------------ 입력된 다른 사람 데이터 가져온거 뿌리는거 ----------------
  // useEffect(() => {
  //   fetchEvents().then((data) => {
  //     const events = data.map((event: any) => ({
  //       schedule_start_datetime: moment(event.schedule_start_datetime).toDate(),
  //       schedule_finish_datetime: moment(event.schedule_finish_datetime).toDate(),
  //       content: event.content,
  //       program_week_no : 0,
  //       mento_no: 0,
  //       mentee_no: 0,
  //       user_gb: "",
  //       schedule_gb: "", 
  //     }));
  //     setEvents(events);
  //   });
  // }, []);

  const eventStyleGetter = (event: Event) => {
    const backgroundColor = event.title === "John" ? "#3174ad" : "#009688";
    return {
      style: {
        backgroundColor,
      },
    };
  };

  // -------------------------------------------------------------------------------------
  return (
    <>
      {/* <button onClick={props.handleToggle}>
        {props.toggleValue === "MENTEE" ? "MENTEE" : "MENTO"} 
      </button>  */}
      <EventForm onSubmit={addEvent} />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelect}
        eventPropGetter={eventStyleGetter}
        style={{ height: 500, backgroundColor: "white", marginTop: "3rem" }}
        selectable
      />

      <Confirmbox>
        {selectedEvent && (
          <div>
            {/* <h3>{selectedEvent.title}</h3>
            <p>{selectedEvent.titleDetail}</p>
            <p>{selectedEvent.start.toLocaleString()}</p>
            <p>{selectedEvent.end.toLocaleString()}</p>
            <p>{data}</p> */}
          </div>
        )}
      </Confirmbox>
    </>
  );
};
export default Cal;

const Calbutton = styled.div`
  display: flex;
`;
const Confirmbox = styled.div`
  width: 100%;
  height: 10vh;
  background-color: yellow;
`;
const Selecteddate = styled.div``;
