import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import Register from "./pages/Register";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import MyPage from "./pages/MyPage";
import ProgramCreation from "./pages/ProgramCreation";
import ProjectProgress from "./pages/ProjectProgress";
import ProgramListjs from "./pages/ProgramList.js";
import ProgramListDetailjs from "./pages/ProgramListDetail";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Mainpagejs from "./pages/Mainpage.";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "MTU4MjQ5NUAzMjMxMmUzMTJlMzMzNWgxT3YyTWg4cCtETG8yQTdnci9vaU9FNmR3K2ZQdkxMRXNTczhsbXZRUHM9;Mgo+DSMBaFt+QHFqVkNrWE5MaV1CX2BZfFlzQ2lYfk4QCV5EYF5SRHJfQ1xnTHhSd01qXX4=;Mgo+DSMBMAY9C3t2VFhhQlJBfVtdVXxLflF1VWFTelh6dVRWACFaRnZdQV1nSX9SckBlWH5XcHxU;Mgo+DSMBPh8sVXJ1S0d+X1RPckBKQmFJfFBmR2lceVRxdUUmHVdTRHRcQlljSH9Xc0NiWHZccnU=;MTU4MjQ5OUAzMjMxMmUzMTJlMzMzNUo1TlA0b2pHQWtBaTl0WllLR1N4SWt0Q1lUN0NMVlpTSit6K0xlbWRrSjA9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RGQmtWfFN0RnNbdVt2flRHcDwsT3RfQF5jTX5Sd0FmX35feXFTRw==;ORg4AjUWIQA/Gnt2VFhhQlJBfVtdVXxLflF1VWFTelh6dVRWACFaRnZdQV1nSX9SckBlWH5Xd3VU;MTU4MjUwMkAzMjMxMmUzMTJlMzMzNWc1Tms1RHJxM2dJbU9JZlN3eUttU25CejhBUWNvVDE0VWhBM0dQQkZJK2M9;MTU4MjUwM0AzMjMxMmUzMTJlMzMzNU8vdCtoWlFLejBpUytaYmhwVk1OWnlRdFZ2NzRjNnpMT0YzNEk1Lyt6SUk9;MTU4MjUwNEAzMjMxMmUzMTJlMzMzNWZRL2szeElScTBVZ1BSZ2hicjAvWW1kUGovQmtjRlRjTndrTUNRSTVnV3c9;MTU4MjUwNUAzMjMxMmUzMTJlMzMzNUVNekZOSU1HUG1sK0lZMDZyTlZvWDhBTnhRVmpVbVp4WE1KbnJBakZ4NjQ9;MTU4MjUwNkAzMjMxMmUzMTJlMzMzNWgxT3YyTWg4cCtETG8yQTdnci9vaU9FNmR3K2ZQdkxMRXNTczhsbXZRUHM9"
);
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffb07a",
    },
    secondary: {
      main: "#ffc7a0",
    },
    mento: {
      main: "#399DA3",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/Mainpagejs" element={<Mainpagejs />}></Route>
            <Route
              path="/projectProgress"
              element={<ProjectProgress />}
            ></Route>
            <Route
              path="/programCreation"
              element={<ProgramCreation />}
            ></Route>
            <Route path="/ProgramListjs" element={<ProgramListjs />} />
            <Route
              path="/ProgramListDetailjs"
              element={<ProgramListDetailjs />}
            ></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/myPage" element={<MyPage />}></Route>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
