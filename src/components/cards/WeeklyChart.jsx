import React from "react";
import { Bar } from "react-chartjs-2";
import "/src/index.css";

export default function WeeklyChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Spending",
        data: [50, 60, 70, 45, 80, 90, 75],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="border border-lg w-full flex flex-col items-center rounded-lg shadow-lg py-4">
      <h1 className="title">Weekly Spending</h1>
      <Bar data={data} options={options} />
    </div>
  );
}
