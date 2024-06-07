import React from "react";
import { Link } from "react-router-dom";

function Header2() {
  return (
    <>
      <ul
        className="nav col-13 col-lg-auto me-lg-auto mb-2 justify-content-center text-end mb-md-0"
        style={{ padding: "none" }}
      >
        <li>
          <Link
            to="/home"
            className="nav-link px-2 text-white bottom-color link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="nav-link px-2 text-white bottom-color link"
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="nav-link px-2 text-white bottom-color link"
          >
            About Plateform
          </Link>
        </li>
      </ul>

      <div className="text-end">
        <button type="button" className="btn btn-dark me-2">
          <Link to="/login" className="a-1">
            Login
          </Link>
        </button>
        <button type="button" className="btn btn-dark">
          <Link to="/registration" className="a-1">
            Sign-up
          </Link>
        </button>
      </div>
    </>
  );
}

export default Header2;
