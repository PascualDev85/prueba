import { configureStore } from "@reduxjs/toolkit";
import { energiaSlice } from "./energia";

export const store = configureStore({
  reducer: {
    energia: energiaSlice.reducer,
  },
});
