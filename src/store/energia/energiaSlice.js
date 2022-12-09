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
    errorMessage: "",
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
      state.dataTable = payload;
      state.isLoading = false;
    },
    setErrorMessage: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingFormData,
  formDay,
  setGraphic,
  setDataTable,
  setErrorMessage,
} = energiaSlice.actions;
