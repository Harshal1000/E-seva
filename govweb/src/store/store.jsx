import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import ProfileSlice from "./ProfileSlice";
import LoginSlice from "./LoginSlice";
import itemSlice from "./itemSlice";
import DocumentSlice from "./DocumentSlice";
import DateTimeSlice from "./DateTIme";
import ApplicationSlice from "./ApplicationSlice";
import Idslice from "./Idslice";

const store = configureStore({
  reducer: {
    profile: ProfileSlice.reducer,
    login: LoginSlice.reducer,
    userID: itemSlice.reducer,
    documentType: DocumentSlice.reducer,
    datetime: DateTimeSlice.reducer,
    applicationstatus: ApplicationSlice.reducer,
    id: Idslice.reducer,
  },
});
export default store;
