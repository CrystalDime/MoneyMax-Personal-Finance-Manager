import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

function SavingsGoalsProgress({ goal }) {
  const progress = Math.min(Math.floor((goal.currentAmount / goal.targetAmount) * 100), 100);

  return (
    <div>
      <Typography variant="h6">{goal.title}</Typography>
      <CircularProgress variant="determinate" value={progress} />
      <Typography variant="subtitle1">
        {progress}% ({goal.currentAmount} / {goal.targetAmount})
      </Typography>
    </div>
  );
}

export default SavingsGoalsProgress;
