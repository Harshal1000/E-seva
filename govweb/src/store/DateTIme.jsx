import { createSlice } from "@reduxjs/toolkit";

const DateTimeSlice = createSlice({
  name: "datetime",
  initialState: { date: "", time: "" },
  reducers: {
    SetDateTime: (state, action) => {
      state.date = action.payload.selectedDate;
      state.time = action.payload.selectedTime;
      alert("your appointment is successfully done");
    },
  },
});

export const DateTimeActions = DateTimeSlice.actions;
export default DateTimeSlice;
