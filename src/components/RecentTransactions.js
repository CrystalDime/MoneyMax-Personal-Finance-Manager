import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";

const transactions = [
  {
    id: 1,
    date: "2022-03-15",
    description: "Grocery shopping",
    amount: 50.25
  },
  {
    id: 2,
    date: "2022-03-12",
    description: "Gas station",
    amount: 20.0
  },
  {
    id: 3,
    date: "2022-03-10",
    description: "Online purchase",
    amount: 75.99
  },
  {
    id: 4,
    date: "2022-03-08",
    description: "Restaurant",
    amount: 35.5
  },
  {
    id: 5,
    date: "2022-03-05",
    description: "Movie theater",
    amount: 12.0
  }
];

function RecentTransactions() {
  return (
    <Paper>
      <Typography variant="h6">Recent Transactions</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default RecentTransactions;
