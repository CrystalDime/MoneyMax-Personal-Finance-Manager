import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.12)"
  },
  title: {
    fontFamily: "Great Vibes, cursive",
    fontSize: "1.5rem"
  }
}));

function TransactionCard({ transaction }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          {transaction.description}
        </Typography>
        <Typography>Date: {transaction.date}</Typography>
        <Typography>Amount: {transaction.amount}</Typography>
      </CardContent>
    </Card>
  );
}

export default TransactionCard;
