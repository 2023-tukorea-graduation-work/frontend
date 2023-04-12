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
import ProgramListjs from "./pages/ProgramList";
import ProgramListDetailjs from "./pages/ProgramListDetail";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Mainpagejs from "./pages/Mainpage";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffb07a",
    },
    secondary: {
      main: "#399DA3",
    },
    mento: {
      main: "#399DA3",
    },
  },
});
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
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
                path="/ProgramListDetailjs/:PROGRAM_NO"
                element={<ProgramListDetailjs />}
              ></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/myPage" element={<MyPage />}></Route>
              <Route path="/" element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
