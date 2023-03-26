import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";
import DashboardDataContext from "../contexts/DashboardDataContext";
import "chart.js/auto";

function MonthlyTrend() {
  const { incomes, expenses } = useContext(DashboardDataContext);

  const months = [
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
    "December",
  ];

  const monthlyIncomes = new Array(12).fill(0);
  const monthlyExpenses = new Array(12).fill(0);

  incomes.forEach((income) => {
    const month = new Date(income.date).getMonth();
    monthlyIncomes[month] += income.amount;
  });

  expenses.forEach((expense) => {
    const month = new Date(expense.date).getMonth();
    monthlyExpenses[month] += expense.amount;
  });

  const data = {
    labels: months,
    datasets: [
      {
        label: "Sales",
        data: monthlyIncomes,
        fill: false,
        borderColor: "#8884d8",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: monthlyExpenses,
        fill: false,
        borderColor: "#82ca9d",
        tension: 0.2,
      },
    ],
  };

  return (
    <div>
      <Typography variant="h6">Monthly Trend</Typography>
      {data.labels.length > 0 && <Line data={data} />}
    </div>
  );
}

export default MonthlyTrend;
