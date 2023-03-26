import React, { useState, useEffect } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import VerticalNavBar from "../components/VerticalNavBar";
import SavingsGoalsProgressReport from "../components/SavingsGoalsProgressReport";
import IncomeCategoriesPieChart from "../components/IncomeCategoriesPieChart";
import ExpenseCategoriesPieChart from "../components/ExpenseCategoriesPieChart";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(25),
  },
}));

function extractCategoriesData(data) {
  const categoriesData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category] += item.amount;
    return acc;
  }, {});

  return Object.entries(categoriesData).map(([category, amount]) => ({
    category,
    amount,
  }));
}

function ReportsPage() {
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

  const incomeCategoriesData = extractCategoriesData(incomes);
  const expenseCategoriesData = extractCategoriesData(expenses);

  return (
    <>
      <Header />
      <VerticalNavBar />
      <main className={classes.content}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SavingsGoalsProgressReport goals={savingsGoals} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <IncomeCategoriesPieChart incomeCategoriesData={incomeCategoriesData} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ExpenseCategoriesPieChart expenseCategoriesData={expenseCategoriesData} />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default ReportsPage;

