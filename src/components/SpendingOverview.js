import React from "react";
import { Pie } from "react-chartjs-2";
import { Typography } from "@material-ui/core";
import "chart.js/auto";
const data = {
  labels: ["Rent", "Groceries", "Transportation", "Entertainment", "Utilities"],
  datasets: [
    {
      data: [1200, 500, 200, 100, 300],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF"
      ]
    }
  ]
};

function SpendingOverview() {
  return (
    <div>
      <Typography variant="h6">Spending Overview</Typography>
      <Pie data={data} />
    </div>
  );
}

export default SpendingOverview;
