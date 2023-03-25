import React from "react";
import { Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  datasets: [
    {
      label: "Sales",
      data: [
        4500,
        5600,
        6800,
        6200,
        7300,
        8100,
        9700,
        10500,
        12000,
        14500,
        17800,
        20400
      ],
      fill: false,
      borderColor: "#8884d8",
      tension: 0.2
    },
    {
      label: "Expenses",
      data: [
        2500,
        3200,
        3900,
        4400,
        5000,
        5500,
        6100,
        6800,
        7200,
        8200,
        9200,
        10300
      ],
      fill: false,
      borderColor: "#82ca9d",
      tension: 0.2
    }
  ]
};

function MonthlyTrend() {
  return (
    <div>
      <Typography variant="h6">Monthly Trend</Typography>
      <Line data={data} />
    </div>
  );
}

export default MonthlyTrend;
