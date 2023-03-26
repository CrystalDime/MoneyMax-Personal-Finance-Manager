import React, { useState, useEffect } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import FinancialOverview from "../components/FinancialOverview";
import RecentTransactions from "../components/RecentTransactions";
import SavingsGoalsProgress from "../components/SavingsGoalsProgress";
import SpendingOverview from "../components/SpendingOverview";
import MonthlyTrend from "../components/MonthlyTrend";
import Header from "../components/Header";
import VerticalNavBar from "../components/VerticalNavBar";
import DashboardDataContext from "../contexts/DashboardDataContext";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(25),
  },
}));

function DashboardPage() {
  const classes = useStyles();
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savingsGoals, setSavingsGoals] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const dashboardDataApiUrl = `/api/UserInfo?endpoint=fetch_dashboard_data&userId=${userId}`;

    const fetchData = async () => {
      const response = await fetch(dashboardDataApiUrl);
      const data = await response.json();
      setIncomes(data.incomes);
      setExpenses(data.expenses);
      setSavingsGoals(data.savingsGoals);
    };

    fetchData();
  }, []);

  return (
    <DashboardDataContext.Provider value={{ incomes, expenses, savingsGoals }}>
      <Header />
      <VerticalNavBar />
      <main className={classes.content}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <FinancialOverview title="totalIncome" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FinancialOverview title="totalExpenses" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FinancialOverview title="netSavings" />
            </Grid>
            <Grid item xs={12}>
              <RecentTransactions />
            </Grid>
            <Grid item xs={12} sm={6}>
              {savingsGoals.map((goal) => (
                <SavingsGoalsProgress key={goal._id} goal={goal} />
              ))}
            </Grid>
            <Grid item xs={12} sm={6}>
              <SpendingOverview />
            </Grid>
            <Grid item xs={12}>
              <MonthlyTrend />
            </Grid>
          </Grid>
        </Container>
      </main>
    </DashboardDataContext.Provider>
  );
}

export default DashboardPage;
