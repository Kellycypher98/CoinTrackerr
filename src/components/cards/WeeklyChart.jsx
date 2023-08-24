import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import "/src/index.css";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function WeeklyChart() {
  const [chartData, setChartData] = React.useState({
    labels: ["Expense", "Income"],
    datasets: [
      {
        label: "",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="border border-lg w-full flex flex-col items-center rounded-lg shadow-lg py-4">
      <h1 className="title">Weekly Spending</h1>
      <div className="py-5">
        <Pie data={chartData} />
      </div>
    </div>
  );
}
