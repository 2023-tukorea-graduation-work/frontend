import "/node_modules/@syncfusion/ej2-base/styles/material.css";
import "/node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "/node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "/node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "/node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "/node_modules/@syncfusion/ej2-lists/styles/material.css";
import "/node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "/node_modules/@syncfusion/ej2-popups/styles/material.css";
import "/node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "/node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
import React, { useEffect, useState } from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  Month,
  WorkWeek,
  MonthAgenda,
  TimelineMonth,
  EventSettingsModel,
  ViewDirective,
  ViewsDirective,
  Agenda,
} from "@syncfusion/ej2-react-schedule";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import "./cal.css";

class Cal extends React.Component {
  private localData: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject: "Metting",
        EndTime: new Date(2023, 0, 11, 6, 30),
        StartTime: new Date(2023, 0, 11, 4, 0),
      },
    ],
  };
  // private remoteData = new DataManager({
  //   url: "https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData",
  //   adaptor: new WebApiAdaptor(),
  //   crossDomain: true,
  // });

  render() {
    return (
      <ScheduleComponent
        height="73vh"
        currentView="Week"
        // eventSettings={{ dataSource: this.remoteData }}
        selectedDate={new Date(2023, 5, 5)}
      >
        <ViewsDirective>
          <ViewDirective option="Week"></ViewDirective>
          <ViewDirective
            option="Month"
            isSelected={true}
            showWeekNumber={true}
            showWeekend={false}
          ></ViewDirective>
          <ViewDirective option="MonthAgenda"></ViewDirective>
          <ViewDirective option="TimelineMonth"></ViewDirective>
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, Month, MonthAgenda, TimelineMonth]}
        />
      </ScheduleComponent>
    );
  }
}

export default Cal;

// interface EventData {
//   Id: number;
//   Subject: string;
//   StartTime: Date;
//   EndTime: Date;
// }

// class Cal extends React.Component<{}, {}> {
// private data: Object[] = [
//   {
//     Id: 1,
//     Subject: "Metting",
//     StartTime: new Date(2023, 4, 4, 10, 0),
//     EndTime: new Date(2023, 4, 4, 10, 1),
//   },
//   {
//     Id: 2,
//     Subject: "Test",
//     StartTime: new Date(2023, 4, 5, 10, 0),
//     EndTime: new Date(2023, 4, 5, 10, 1),
//   },
// ];

// constructor(props: any) {
//   super(props);

//   setDataSource([]);

// this.state = {
//   dataSource: [
//     {
//       Id: 1,
//       Subject: "Metting",
//       StartTime: new Date(2023, 4, 4, 10, 0),
//       EndTime: new Date(2023, 4, 4, 10, 1),
//     },
//     {
//       Id: 2,
//       Subject: "Test",
//       StartTime: new Date(2023, 4, 5, 10, 0),
//       EndTime: new Date(2023, 4, 5, 10, 1),
//     },
//   ],
// };
// }

//   render() {
//     return (
//       <ScheduleComponent
//         height="73vh"
//         currentView="Week"
//         selectedDate={new Date(2023, 4, 2)}
//         eventSettings={{ dataSource: this.state.dataSource }}
//       >
//         <ViewsDirective>
//           <ViewDirective option="Week"></ViewDirective>
//           <ViewDirective
//             option="Month"
//             isSelected={true}
//             showWeekNumber={true}
//             showWeekend={false}
//           ></ViewDirective>
//           <ViewDirective option="MonthAgenda"></ViewDirective>
//           <ViewDirective option="TimelineMonth"></ViewDirective>
//         </ViewsDirective>
//         <Inject
//           services={[Day, Week, WorkWeek, Month, MonthAgenda, TimelineMonth]}
//         />
//       </ScheduleComponent>
//     );
//   }
// }

// class Cal extends React.Component {
//   private localData: EventSettingsModel = {
//     dataSource: [
//       {
//         Id: 1,
//         End: new Date(2023, 0, 11, 6, 30),
//         Start: new Date(2023, 0, 11, 4, 0),
//         Summary: "",
//         IsAllDay: true,
//         RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=10",
//         IsBlock: true,
//       },
//     ],
//     fields: {
//       subject: { name: "Summary", default: "No title is provided." },
//       startTime: { name: "Start" },
//       endTime: { name: "End" },
//     },
//   };

//   private remoteData = new DataManager({
//     url: "https://js.syncfusion.com/demos/djservices/api/Schedule/LoadData",
//     adaptor: new WebApiAdaptor(),
//     crossDomain: true,
//   });
//     return (
//       <ScheduleComponent
//         height="73vh"
//         currentView="Week"
//         selectedDate={new Date(2023, 0, 11)}
//         eventSettings={{ dataSource: data }}
//         onDataBinding={{handleDataBinding}}
//       >
//         <ViewsDirective>
//           <ViewDirective option="Week"></ViewDirective>
//           <ViewDirective
//             option="Month"
//             isSelected={true}
//             showWeekNumber={true}
//             showWeekend={false}
//           ></ViewDirective>
//           <ViewDirective option="MonthAgenda"></ViewDirective>
//           <ViewDirective option="TimelineMonth"></ViewDirective>
//         </ViewsDirective>
//         <Inject
//           services={[Day, Week, WorkWeek, Month, MonthAgenda, TimelineMonth]}
//         />
//       </ScheduleComponent>
//     );
//   }
// }
