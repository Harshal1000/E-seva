import React, { useRef } from "react";
import { IoReload } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { LoginActions } from "../store/LoginSlice";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const UserName = useRef("");
  const Pass = useRef("");
  const navigate = useNavigate();
  const AdminProfile = {
    username: "harshal",
    password: "root",
  };
  console.log(UserName.current.value);
  const dispatch = useDispatch();
  const HandleSubmit = (event) => {
    event.preventDefault();
    if (
      UserName.current.value === AdminProfile.username &&
      Pass.current.value === AdminProfile.password
    ) {
      dispatch(LoginActions.markAdminLogin());
      navigate("/admin");
    } else {
      alert("username or password is wrong");
    }
  };
  return (
    <form onSubmit={HandleSubmit}>
      <div class="form-group">
        <label for="registration-number">Username *</label>
        <input
          type="text"
          id="registration-number"
          placeholder="username"
          ref={UserName}
        />
      </div>
      <div class="form-group">
        <label for="password">Password *</label>
        <input
          type="password"
          id="password"
          ref={Pass}
          placeholder="Password"
        />
        {/* <a href="#" class="forgot-password">
          Forgot Password ?
        </a> */}
      </div>

      <button type="submit" class="login-btn">
        Login
      </button>
    </form>
  );
}
export default AdminLogin;
