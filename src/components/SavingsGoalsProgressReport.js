import React from "react";
import { Box, Typography, LinearProgress } from "@material-ui/core";

function SavingsGoalsProgressReport({ goals }) {
  return (
    <Box>
      {goals.map((goal) => (
        <Box key={goal._id}>
          <Typography variant="h3">{goal.name}</Typography>
          <LinearProgress
            variant="determinate"
            value={(goal.currentAmount / goal.targetAmount) * 100}
          />
        </Box>
      ))}
    </Box>
  );
}

export default SavingsGoalsProgressReport;
