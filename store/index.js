import { configureStore } from "@reduxjs/toolkit";
import itemsslice from "./itemsslice";
import fetchstatusslice from "./fetchstatusslice";
import bagslice from "./bagslice";

const myntrastore = configureStore({
  reducer: {
    items: itemsslice.reducer,
    fetchstatus: fetchstatusslice.reducer,
    bag: bagslice.reducer,
  },
});

export default myntrastore;
