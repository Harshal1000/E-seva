import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header1 from "./Haader1";
import { useSelector } from "react-redux";
import Header2 from "./Header2";
import store from "../store/store";

function Header() {
  const login = useSelector((store) => store.login);
  console.log(`login is ${login.loginStatus}`);
  return (
    <nav className="p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-left justify-content-left justify-content-lg-start">
          <Link
            to="/home"
            className="d-flex align-items-center mb-2 mb-lg-0 x text-decoration-none"
          >
            <span class="fs-4 h3">E-seva</span>
          </Link>

          {login.loginStatus ? <Header1 /> : <Header2 />}
        </div>
      </div>
    </nav>
  );
}

export default Header;
