import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState, useRef, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { Button, Input, Switch, FormControlLabel } from "@mui/material";
import { eventNames, title } from "process";
import styled from "@emotion/styled";
import { loginAsync } from "../../../features/loginSlice/loginSlice";
import LoginForm from "../../Login/LoginForm/LoginForm";
// interface Props {
//   toggleValue: string;
//   handleToggle: () => void;
// }

// --------------------------------------------------------다른사람 일정 가져오는거-----------
const fetchEvents = async (): Promise<any[]> => {
  const response = await axios.get("/api/events");
  return response.data;
};
// --------------------------------------------------------

const localizer = momentLocalizer(moment);
interface MyEvent extends Event {
  id: number;
  title: string;
  titleDetail: string;
  start: Date;
  end: Date;
}

const myEvent: MyEvent = {
  id: 0,
  title: "",
  titleDetail: "",
  start: new Date(),
  end: new Date(),
};
interface EventFormProps {
  onSubmit: (event: MyEvent) => void;
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
    axios({
      method: "POST",
      url: "/api/v1/projectProgress",
      data: {
        id: `${event.id}`,
        title: `${event.title}`,
        titleDetail: `${event.titleDetail}`,
        start: `${event.start}`,
        end: `${event.end}`,
        toggleValue,
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
          placeholder=""
          {...register("title", { required: "일정이름" })}
          value={event.title}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            width: "7rem",
            height: "2.5rem",
            marginRight: "1rem",
          }}
        />
        <Input
          type="text"
          placeholder=""
          {...register("titleDetail", {
            required: "상세내용",
          })}
          value={event.titleDetail}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            width: "20rem",
            height: "2.5rem",
            marginRight: "1rem",
          }}
        />
        <Input
          type="datetime-local"
          value={moment(event.start).format("YYYY-MM-DDTHH:mm")}
          {...register("start")}
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
          value={moment(event.end).format("YYYY-MM-DDTHH:mm")}
          {...register("end")}
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
const Cal = (/**props: Props**/) => {
  // const [data, setData] = useState<string>("");
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(
  //       `https://example.com/api/${props.toggleValue}`
  //     );
  //     setData(response.data);
  //   }
  //   fetchData();
  // }, [props.toggleValue]);

  // useEffect(() => {
  //   async function sendData() {
  //     const response = await axios.post("https://example.com/api", {
  //       toggleValue: props.toggleValue,
  //     });
  //     setData(response.data);
  //   }
  //   sendData();
  // }, [props.toggleValue]);
  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);
  const [events, setEvents] = useState<MyEvent[]>([]);

  const handleSelect = (event: MyEvent) => {
    setSelectedEvent(event);

    console.log("selected event", event);
  };
  const addEvent = (event: MyEvent) => {
    //추가하기직전 moment형식을 Date로 변환
    const startDate = new Date(event.start);
    const endDate = new Date(event.end);
    event.start = startDate;
    event.end = endDate;
    //추가하기 직전 ID값 변경
    event.id = events.length;
    setEvents((state) => [...state, event]);
  };
  // ------------------------------------ 입력된 다른 사람 데이터 가져온거 뿌리는거 ----------------
  useEffect(() => {
    fetchEvents().then((data) => {
      const events = data.map((event: any) => ({
        start: moment(event.start).toDate(),
        end: moment(event.end).toDate(),
        title: event.title,
        titleDetail: event.titleDetail,
        id: event.id,
      }));
      setEvents(events);
    });
  }, []);

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
            <h3>{selectedEvent.title}</h3>
            <p>{selectedEvent.titleDetail}</p>
            <p>{selectedEvent.start.toLocaleString()}</p>
            <p>{selectedEvent.end.toLocaleString()}</p>
            {/* <p>{data}</p> */}
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
