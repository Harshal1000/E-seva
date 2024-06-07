import React, { useRef, useState } from "react";
import { IoReload } from "react-icons/io5";
import { Link, Outlet, redirect, redirectDocument } from "react-router-dom";
import Home from "../route/Home";
import { useDispatch, useSelector } from "react-redux";
import RegistrationForm from "../route/RegistrationForm";
import { Alert } from "bootstrap";
import { LoginActions } from "../store/LoginSlice";
import { itemActions } from "../store/itemSlice";

function CandidateLogin() {
  const Uname = useRef("");
  const Pass = useRef("");
  const Profile = useSelector((store) => store.profile);
  const dispatch = useDispatch();
  const login = useSelector((store) => store.login);

  const handleSubmit = (event) => {
    event.preventDefault();

    const uname = Uname.current.value;
    const pass = Pass.current.value;

    console.log(uname);

    Profile.forEach((Profile) => {
      if (Profile.username === uname && Profile.password === pass) {
        dispatch(LoginActions.markPasswordMatch());
        dispatch(LoginActions.markLoginStatusTrue());
        dispatch(itemActions.setUserID(String(uname)));

        alert("you are successfully login"); // Show Home component if username matches
      } else {
        dispatch(LoginActions.markPasswordnotMatch());
        // Hide Home component if username doesn't match
      }
    });
    // dispatch(itemActions.setUserID(String(uname)));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="registration-number">Username *</label>
          <input
            type="text"
            id="registration-number"
            placeholder="username"
            ref={Uname}
          />
        </div>
        <div class="form-group">
          <label for="password">Password *</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            ref={Pass}
          />
          <a href="#" class="forgot-password">
            Forgot Password ?
          </a>
        </div>
        <button type="submit" class="login-btn">
          Login
        </button>
        <p class="register-link">
          New User? <Link to="/registration">Register Now</Link>
        </p>
      </form>
    </>
  );
}

export default CandidateLogin;
