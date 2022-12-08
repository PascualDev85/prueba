import { useSelector } from "react-redux";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Balance Eléctrico",
    },
  },
};

export const Chart = () => {
  const { data, startDay } = useSelector((state) => state.energia);

  return (
    <>
      {startDay ? (
        <>
          <Line options={options} data={data} />
          <Bar options={options} data={data} />
        </>
      ) : null}
    </>
  );
};
