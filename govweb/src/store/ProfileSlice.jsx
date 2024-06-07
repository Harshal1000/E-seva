import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "profile",
  initialState: [],
  reducers: {
    AddProfile: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const ProfileActions = ProfileSlice.actions;
export default ProfileSlice;
