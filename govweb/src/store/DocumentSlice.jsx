import { createSlice } from "@reduxjs/toolkit";

const DocumentSlice = createSlice({
  name: "documentType",
  initialState: { type: "3", header: "harshal" },
  reducers: {
    markType1: (state, action) => {
      state.type = action.payload.type;
      state.header = action.payload.header;
    },
    markType2: (state, action) => {
      state.type = action.payload.type;
      state.header = action.payload.header;
    },
    markType3: (state, action) => {
      state.type = action.payload.type;
      state.header = action.payload.header;
    },
    markType4: (state, action) => {
      state.type = action.payload.type;
      state.header = action.payload.header;
    },
    markType5: (state, action) => {
      state.type = action.payload.type;
      state.header = action.payload.header;
    },
    markType6: (state, action) => {
      state.type = action.payload.type;
      state.header = action.payload.header;
    },
  },
});

export const DocumentActions = DocumentSlice.actions;
export default DocumentSlice;
