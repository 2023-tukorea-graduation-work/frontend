import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState, useRef } from "react";
import { Button, Input } from "@mui/material";

const localizer = momentLocalizer(moment);
interface MyEvent extends Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const myEvent: MyEvent = {
  id: 0,
  title: "",
  start: new Date(),
  end: new Date(),
};
const handleSelectEvent = (event: MyEvent) => {
  console.log("selected event", event);
};
interface EventFormProps {
  onSubmit: (event: MyEvent) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit }) => {
  const [event, setEvent] = useState<MyEvent>({ ...myEvent });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvent((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(event);
    setEvent({ ...myEvent });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        placeholder="일정이름"
        value={event.title}
        onChange={handleChange}
      />
      <Input
        type="datetime-local"
        name="start"
        value={moment(event.start).format("YYYY-MM-DDTHH:mm")}
        onChange={handleChange}
      />
      <Input
        type="datetime-local"
        name="end"
        value={moment(event.end).format("YYYY-MM-DDTHH:mm")}
        onChange={handleChange}
      />
      <Button type="submit">추가하기</Button>
    </form>
  );
};
const Cal = () => {
  const [events, setEvents] = useState<MyEvent[]>([]);

  const addEvent = (event: MyEvent) => {
    event.id = events.length;
    setEvents((state) => [...state, event]);
  };

  return (
    <>
      <EventForm onSubmit={addEvent} />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
        selectable
      />
    </>
  );
};
export default Cal;

// import React from "react";
// import { useState } from "react";
// import { Calendar, momentLocalizer, Event } from "react-big-calendar";
// import moment from "moment";

// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);
// interface MyEvent extends Event {
//   myProp: string;
// }

// const myEvent: MyEvent = {
//   title: "My Event",
//   start: new Date(),
//   end: new Date(),
//   myProp: "some value",
// };

// const Cal = () => {
//   const [events, setEvents] = useState<MyEvent[]>([myEvent]);

//   const addEvent = (event: MyEvent) => {
//     setEvents([...events, event]);
//   };

//   const handleSelectEvent = (event: MyEvent) => {
//     console.log("selected event", event);
//   };

//   return (
//     <Calendar
//       localizer={localizer}
//       events={events}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500 }}
//       selectable
//       onSelectEvent={handleSelectEvent}
//       onSelectSlot={(slotInfo) =>
//         addEvent({
//           start: slotInfo.start,
//           end: slotInfo.end,
//           title: "New Event",
//           myProp: "some value",
//         })
//       }
//     />
//   );
// };

// export default Cal;

// ------------------------------------1번째 방법 ------------------------------------------------------------------
// // import { useState } from "react";
// // import { Calendar, momentLocalizer } from "react-big-calendar";
// // import moment from "moment";
// // import "react-big-calendar/lib/css/react-big-calendar.css";
// // import React from "react";

// // interface MyEvent {
// //   id: number;
// //   title: string;
// //   start: Date;
// //   end: Date;
// // }

// // const localizer = momentLocalizer(moment);

// // const Cal = () => {
// //   const [events, setEvents] = useState<MyEvent[]>([]);
// //   const [showEventModal, setShowEventModal] = useState(false);
// //   const [newEvent, setNewEvent] = useState<MyEvent>({
// //     id: 0,
// //     title: "",
// //     start: new Date(),
// //     end: new Date(),
// //   });

// //   const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
// //     setShowEventModal(true);
// //     setNewEvent({
// //       id: events.length + 1,
// //       title: "",
// //       start,
// //       end,
// //     });
// //   };

// //   const handleEventModalClose = () => {
// //     setShowEventModal(false);
// //   };

// //   const handleEventSave = () => {
// //     setEvents([...events, newEvent]);
// //     setShowEventModal(false);
// //   };

// //   const handleEventTitleChange = (
// //     event: React.ChangeEvent<HTMLInputElement>
// //   ) => {
// //     setNewEvent({ ...newEvent, title: event.target.value });
// //   };

// //   const handleEventStartChange = (start: Date) => {
// //     setNewEvent({ ...newEvent, start });
// //   };

// //   const handleEventEndChange = (end: Date) => {
// //     setNewEvent({ ...newEvent, end });
// //   };

// //   return (
// //     <>
// //       <Calendar
// //         localizer={localizer}
// //         events={events}
// //         selectable
// //         onSelectSlot={handleSelectSlot}
// //         startAccessor="start"
// //         endAccessor="end"
// //         style={{ height: 500 }}
// //       />
// //       {showEventModal && (
// //         <div>
// //           <h3>New Event</h3>
// //           <label>
// //             Title:
// //             <input
// //               type="text"
// //               value={newEvent.title}
// //               onChange={handleEventTitleChange}
// //             />
// //           </label>
// //           <br />
// //           <label>
// //             Start:
// //             <input
// //               type="datetime-local"
// //               value={newEvent.start.toISOString().slice(0, -8)}
// //               onChange={(e) => handleEventStartChange(new Date(e.target.value))}
// //             />
// //           </label>
// //           <br />
// //           <label>
// //             End:
// //             <input
// //               type="datetime-local"
// //               value={newEvent.end.toISOString().slice(0, -8)}
// //               onChange={(e) => handleEventEndChange(new Date(e.target.value))}
// //             />
// //           </label>
// //           <br />
// //           <button onClick={handleEventSave}>Save</button>
// //           <button onClick={handleEventModalClose}>Cancel</button>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Cal;

// import React from "react";
// import { useState } from "react";
// import { Calendar, Event, momentLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import moment from "moment";
// interface MyEvent extends Event {
//   id: number;
//   title: string;
//   start: Date;
//   end: Date;
// }

// ------------------------------------2번째 방법 ------------------------------------------------------------------
// const Cal = () => {
//   const [events, setEvents] = useState<MyEvent[]>([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [newEvent, setNewEvent] = useState<MyEvent>({
//     id: 0,
//     title: "",
//     start: new Date(),
//     end: new Date(),
//   });

//   const handleEventSelect = (event: MyEvent) => {
//     console.log(event);
//   };

//   const handleDateSelect = ({ start, end }: { start: Date; end: Date }) => {
//     setNewEvent({
//       id: events.length + 1,
//       title: "",
//       start,
//       end,
//     });
//     setShowPopup(true);
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setNewEvent((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSaveEvent = () => {
//     setEvents((prevState) => [...prevState, newEvent]);
//     setShowPopup(false);
//   };

//   // const handleEventStartChange = (start: Date) => {
//   //   setNewEvent({ ...newEvent, start });
//   // };
//   // const handleEventEndChange = (end: Date) => {
//   //   setNewEvent({ ...newEvent, end });
//   // };
//   // const handleEventModalClose = () => {
//   //   setShowPopup(false);
//   // };

//   const localizer = momentLocalizer(moment);
//   return (
//     <>
//       <Calendar
//         localizer={localizer}
//         selectable
//         popup
//         events={events}
//         onSelectEvent={handleEventSelect}
//         onSelectSlot={handleDateSelect}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//       />
//       {showPopup && (
//         <div className="event-popup">
//           <h3>일정 추가하기</h3>
//           <label>
//             제목:
//             <input
//               type="text"
//               name="title"
//               value={newEvent.title?.toString()}
//               onChange={handleInputChange}
//             />
//           </label>
//           <br />
//           {/* <label>
//             Start:
//             <input
//               type="datetime-local"
//               value={newEvent.start.toISOString().slice(0, -8)}
//               onChange={(e) => handleEventStartChange(new Date(e.target.value))}
//             />
//           </label>
//           <br />
//           <label>
//             End:
//             <input
//               type="datetime-local"
//               value={newEvent.end.toISOString().slice(0, -8)}
//               onChange={(e) => handleEventEndChange(new Date(e.target.value))}
//             />
//           </label>
//           <br /> */}
//           <button onClick={handleSaveEvent}>저장하기</button>
//           {/* <button onClick={handleEventModalClose}>Cancel</button> */}
//         </div>
//       )}
//     </>
//   );
// };

// export default Cal;
