import React from "react";
import Header from "../component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";
import FatchData from "../component/FatchData";

function App() {
  return (
    <div className="main">
      <Header />
      <FatchData />

      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
