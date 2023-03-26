import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "../styles.css";

import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import ExpensesPage from "../pages/ExpensesPage";
import IncomePage from "../pages/IncomePage";
import ReportsPage from "../pages/ReportsPage";
import SavingsGoalsPage from "../pages/SavingsGoalsPage";
import DashboardDataContext from "../contexts/DashboardDataContext";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.background.default
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  title: {
    flexGrow: 1
  }
}));

export default function App() {
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
      <Router>
        <div className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                MoneyMax
              </Typography>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/income" element={<IncomePage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/savingsgoals" element={<SavingsGoalsPage />} />
          </Routes>
        </div>
      </Router>
  </DashboardDataContext.Provider>
  );
}
