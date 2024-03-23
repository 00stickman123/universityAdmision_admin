import React from "react";
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import SecondaryBtn from "../SecondaryBtn";
Chart.register(CategoryScale);

function PieChart() {
  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      //   title: {
      //     display: true,
      //     text: "Chart.js Pie Chart",
      //   },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center p-3">
      <Pie data={data} options={options} />
      <SecondaryBtn className="mt-4 w-fit">See more</SecondaryBtn>
    </div>
  );
}

export default PieChart;
