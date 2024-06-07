import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Header1() {
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
            to="/my-application"
            className="nav-link px-2 text-white bottom-color link"
          >
            My application
          </Link>
        </li>
        <li>
          <Link
            to="/feedback"
            className="nav-link px-2 text-white bottom-color link"
          >
            Feedback
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="nav-link px-2 text-white bottom-color link "
          >
            About Platform
          </Link>
        </li>
      </ul>
      <Link
        to="/showprofile"
        style={{ fontSize: "35px", padding: "none" }}
        className="text-end text-white"
      >
        <FaUserCircle />
      </Link>
    </>
  );
}

export default Header1;
