import React, { useContext } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import DashboardDataContext from "../contexts/DashboardDataContext";

function SavingsGoalsProgress({ goalTitle, progress }) {
  const { savingsGoals } = useContext(DashboardDataContext);
  const goal = savingsGoals.find((goal) => goal.title === goalTitle);
  
  if (!goal) {
    return null;
  }

  return (
    <div>
      <Typography variant="h6">{goal.title}</Typography>
      <CircularProgress variant="determinate" value={goal.progress} />
      <Typography variant="subtitle1">{goal.progress}%</Typography>
    </div>
  );
}

export default SavingsGoalsProgress;
