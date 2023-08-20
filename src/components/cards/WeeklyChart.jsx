import React from "react";
import "/src/index.css";

export default function WeeklyChart() {
  return (
    <div className="border border-lg w-full flex flex-col items-center rounded-lg shadow-lg py-4">
      <h1 className="title">Weekly Spending</h1>
      <img
        className="w-50"
        src="public/column-chart-example.svg"
        alt="mock image of chart"
      />
    </div>
  );
}
