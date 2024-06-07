import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "userID",
  initialState: "",
  reducers: {
    setUserID: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const itemActions = itemSlice.actions;
export default itemSlice;
