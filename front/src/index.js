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
import { Provider } from "react-redux";
import { store } from "./app/store";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffb07a",
    },
    secondary: {
      main: "#ffc7a0",
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
            <Route
              path="/projectProgress"
              element={<ProjectProgress />}
            ></Route>
            <Route
              path="/programCreation"
              element={<ProgramCreation />}
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
