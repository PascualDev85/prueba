import { createSlice } from "@reduxjs/toolkit";

export const energiaSlice = createSlice({
  name: "energia",
  initialState: {
    isLoading: false,
    language: "",
    type: null,
    startDay: null,
    endDay: null,
    data: {
      labels: [],
      datasets: [],
    },
    dataTable: [],
    errorMessage: null,
  },
  reducers: {
    startLoadingFormData: (state) => {
      state.isLoading = true;
    },
    formDay: (state, { payload }) => {
      state.startDay = payload.startDay;
      state.endDay = payload.endDay;
      state.isLoading = false;
    },
    setGraphic: (state, { payload }) => {
      state.data = {
        labels: payload.labels,
        datasets: payload.datasets,
      };
      state.isLoading = false;
    },
    setDataTable: (state, { payload }) => {
      console.log("DATOS TABLA", payload);
      state.dataTable = payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingFormData, formDay, setGraphic, setDataTable } =
  energiaSlice.actions;
