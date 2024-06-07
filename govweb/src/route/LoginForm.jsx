import React, { useState } from "react";
import AdminLogin from "../component/AdminLogin";
import CandidateLogin from "../component/CandidateLogin";
import { useSelector } from "react-redux";
import Home from "./Home";
function LoginForm() {
  const [selection, setSelection] = useState(false);
  const login = useSelector((store) => store.login);
  console.log(login);

  return (
    <>
      {login.loginStatus ? (
        <Home />
      ) : (
        <div class="container-1">
          <div class="tabs">
            <div class="tab" onClick={() => setSelection(false)}>
              Citizen
            </div>
            <div class="tab" onClick={() => setSelection(true)}>
              Admin
            </div>
          </div>
          {!selection ? <CandidateLogin /> : <AdminLogin />}
        </div>
      )}
    </>
  );
}
export default LoginForm;
