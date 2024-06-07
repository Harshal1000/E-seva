import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: { loginStatus: false, passwordMatch: false, adminlogin: false },
  reducers: {
    markloginStatusfalse: (state) => {
      state.loginStatus = false;
    },
    markLoginStatusTrue: (state) => {
      state.loginStatus = true;
    },
    markPasswordnotMatch: (state) => {
      state.passwordMatch = false;
    },
    markPasswordMatch: (state) => {
      state.passwordMatch = true;
    },
    markAdminLogin: (state) => {
      state.adminlogin = true;
    },
  },
});

export const LoginActions = LoginSlice.actions;
export default LoginSlice;
