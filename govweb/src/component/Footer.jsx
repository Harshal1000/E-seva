import React from "react";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer class="py-3 my-4 footer">
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Find us on</h1>
      <ul
        class="nav justify-content-center border-bottom pb-3 mb-3 mb-lg-0 text-white text-decoration-none"
        style={{ fontSize: "40px" }}
      >
        <li class="nav-item" style={{ marginBlockEnd: "10px" }}>
          <a href="#" class="nav-link px-2 text-body-secondary">
            <FaSquareXTwitter />
          </a>
        </li>
        <li
          class="nav-item"
          style={{ marginBlockEnd: "10px", padding: "none ", margin: "none" }}
        >
          <a href="#" class="nav-link px-2 text-body-secondary">
            <FaFacebookSquare />
          </a>
        </li>
        <li class="nav-item" style={{ marginBlockEnd: "10px" }}>
          <a href="#" class="nav-link px-2 text-body-secondary">
            <FaSquareInstagram />
          </a>
        </li>
      </ul>
      <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
    </footer>
  );
}
export default Footer;
