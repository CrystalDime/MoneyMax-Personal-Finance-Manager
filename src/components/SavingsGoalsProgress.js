import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

function SavingsGoalsProgress({ goalTitle, progress }) {
  return (
    <div>
      <Typography variant="h6">{goalTitle}</Typography>
      <CircularProgress variant="determinate" value={progress} />
      <Typography variant="subtitle1">{progress}%</Typography>
    </div>
  );
}

export default SavingsGoalsProgress;
