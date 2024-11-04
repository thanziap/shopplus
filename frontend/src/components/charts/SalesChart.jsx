import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function SalesChart({ salesData }) {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Sales & Order Data",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = salesData?.map((data) => data?.date);

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: salesData?.map((data) => data?.sales),
        borderColor: "rgba(34, 96, 189, 1)",
        backgroundColor: "rgba(34, 96, 189, 0.34)   ",
        yAxisID: "y",
      },
      {
        label: "Orders",
        data: salesData?.map((data) => data?.numOrders),
        borderColor: "rgba(39, 175, 173, 1)",
        backgroundColor: "rgba(39, 175, 173, 0.407) ",
        yAxisID: "y1",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
