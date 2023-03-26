import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Typography } from "@material-ui/core";
import DashboardDataContext from "../contexts/DashboardDataContext";

function SpendingOverview() {
  const { expenses } = useContext(DashboardDataContext);

  const spendingByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(spendingByCategory),
    datasets: [
      {
        data: Object.values(spendingByCategory),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
   
],
};

return (
<div>
<Typography variant="h6">Spending Overview</Typography>
<Pie data={data} />
</div>
);
}

export default SpendingOverview;