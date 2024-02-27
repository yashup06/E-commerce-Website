import { createSlice } from "@reduxjs/toolkit";

const itemsslice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addinitialitems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsactions = itemsslice.actions;

export default itemsslice;
