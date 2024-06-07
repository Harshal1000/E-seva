import { createSlice } from "@reduxjs/toolkit";

const Idslice = createSlice({
  name: "id",
  initialState: "1",
  reducers: {
    addId: (state, action) => {
      state = action.payload;
    },
  },
});

export const IdActions = Idslice.actions;
export default Idslice;
