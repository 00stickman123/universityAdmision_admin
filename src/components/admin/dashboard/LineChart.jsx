import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function LineChart() {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        ticks: {
          callback: function (value) {
            if (value % 1 === 0) {
              return value;
            }
          },
        },
      },
    },
  };
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [12, 20, 32, 20, 15, 20],
        fill: false,
        backgroundColor: "#93AAFD60",
        borderColor: "#2D5BFF",
        tension: 0.1,
      },
    ],
  };
  return <Line data={data} options={options} />;
}

export default LineChart;
