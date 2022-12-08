import {
  formDay,
  startLoadingFormData,
  setGraphic,
  setDataTable,
} from "./energiaSlice";

export const startForm = (language, type, startDay, endDay) => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingFormData());

      const response = await fetch(
        `https://apidatos.ree.es/${language}/datos/balance/balance-electrico?start_date=${startDay}T00:00&end_date=${endDay}T23:59&time_trunc=day`
      );

      const { included } = await response.json();

      console.log(included);

      let dataTable = included[type].attributes.content;
      dataTable = await dataTable.map((date) => {
        return date.attributes.values.map((item) => {
          return {
            type: date.attributes.title,
            value: item.value.toFixed(2),
            percentage: item.percentage.toFixed(2) + " %",
            datetime: item.datetime.split("T")[0],
          };
        });
      });
      dataTable = await dataTable.flat();

      console.log(dataTable);

      let labels = included[type].attributes.content[0].attributes.values;
      labels = await labels.map((item) => item.datetime.split("T")[0]);

      let datasets = included[type].attributes.content;
      datasets = await datasets.map((type) => {
        return {
          label: type.attributes.title,
          data: type.attributes.values.map((item) => item.value),
          backgroundColor: type.attributes.color,
          borderColor: type.attributes.color,
          tension: 0.4,
        };
      });

      const data = { labels: labels, datasets: datasets };

      dispatch(formDay({ startDay: startDay, endDay: endDay }));
      dispatch(setGraphic(data));
      dispatch(setDataTable(dataTable));
    } catch (error) {
      console.log(error);
    }
  };
};
