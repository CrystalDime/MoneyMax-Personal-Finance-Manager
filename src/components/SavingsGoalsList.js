import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  LinearProgress,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Edit, Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  goalCard: {
    padding: theme.spacing(2),
    position: "relative"
  },
  goalActions: {
    position: "absolute",
    top: 0,
    right: 0
  }
}));

function SavingsGoalsList() {
  const classes = useStyles();
  const [userId, setUserId] = useState(null);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    if (userId) {
      fetchSavingsGoals();
    }
  }, [userId]);

  const fetchSavingsGoals = async () => {
    const response = await fetch(`/api/UserInfo?endpoint=savings_goals&userId=${userId}`);
    const data = await response.json();
    setGoals(data);
  };
 return (
    <Grid container spacing={3}>
      {goals.map((goal) => (
        <Grid item xs={12} sm={6} md={4} key={goal.id}>
          <Paper className={classes.goalCard}>
            <div className={classes.goalActions}>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton>
                <Delete />
              </IconButton>
            </div>
            <Typography variant="h6">{goal.title}</Typography>
            <Typography variant="subtitle2">
              {goal.currentAmount} / {goal.targetAmount}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(goal.currentAmount / goal.targetAmount) * 100}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );t
}

export default SavingsGoalsList;

