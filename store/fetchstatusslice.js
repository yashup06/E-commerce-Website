import { createSlice } from "@reduxjs/toolkit";

const fetchstatusslice = createSlice({
  name: "fetchstatus",
  initialState: {
    fetchdone: false,
    currentlyfetching: false,
  },
  reducers: {
    markfetchdone: (state) => {
      state.fetchdone = true;
    },
    markfetchingstarted: (state) => {
      state.currentlyfetching = true;
    },
    markfetchingfinished: (state) => {
      state.currentlyfetching = false;
    },
  },
});

export const fetchstatusactions = fetchstatusslice.actions;

export default fetchstatusslice;
