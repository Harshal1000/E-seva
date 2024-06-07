import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./route/App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./route/Home";
import AboutSection from "./route/AboutSection";
import LoginForm from "./route/LoginForm";
import Feedback from "./route/Feedback";
import RegistrationForm, { ProfileLoader } from "./route/RegistrationForm";
import store from "./store/store";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import ShowProfile from "./route/ShowProfile";
import Document from "./route/Document";
import Serviceprovider from "./component/Serviceprovider";
import ApplicationTable from "./route/ApplicationTable";
import MyApp from "./route/MyApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { element: <Home />, index: true },
      { path: "/home", element: <Home /> },

      { path: "/about", element: <AboutSection /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/feedback", element: <Feedback /> },
      {
        path: "/registration",
        element: <RegistrationForm />,
        action: ProfileLoader,
      },
      { path: "/showprofile", element: <ShowProfile /> },
      { path: "/services", element: <Serviceprovider /> },
      { path: "/documentinfo", element: <Document /> },
      {
        path: "/my-application",
        element: <MyApp />,
      },
    ],
  },
  { path: "/admin", element: <ApplicationTable /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
