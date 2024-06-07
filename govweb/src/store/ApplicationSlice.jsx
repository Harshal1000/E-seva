import { createSlice } from "@reduxjs/toolkit";

const ApplicationSlice = createSlice({
  name: "applicationstatus",
  initialState: { status: "panding", Application: [] },
  reducers: {
    marksuccess: (state) => {
      state.status = "success";
    },
    AddApplication: (state, action) => {
      state.Application = action.payload;
    },
  },
});

export const ApplicationActions = ApplicationSlice.actions;
export default ApplicationSlice;
