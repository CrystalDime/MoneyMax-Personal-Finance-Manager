import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import DashboardDataContext from "../contexts/DashboardDataContext";

function FinancialOverview({ title }) {
  const { incomes, expenses } = useContext(DashboardDataContext);
  
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const netSavings = totalIncome - totalExpenses;
  
  var value;
  var Vcolor; 
  var Vtitle;
  if (title === "totalIncome"){
     value = totalIncome;
     Vcolor = "#4CAF50";
     Vtitle = "Total Income";
  }
  else if (title === "totalExpenses"){
     value = totalExpenses;
     Vcolor ="#F44336";
     Vtitle = "Total Expenses";
  }
  else if (title === "netSavings"){
     value = netSavings;
     Vcolor = "#3F51B5";
     Vtitle = "Net Savings";
  }
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{Vtitle}</Typography>
        <Typography variant="h4" style={{ color: Vcolor}}>${value}</Typography>
      </CardContent>
    </Card>
  );
}

export default FinancialOverview;
