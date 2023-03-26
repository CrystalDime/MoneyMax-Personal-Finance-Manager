import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

function IncomeList() {
 const [incomes, setIncomes] = useState([]);
  const userId = localStorage.getItem("userId");
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };
  useEffect(() => {
    const fetchIncomes = async () => {
      const response = await fetch(`/api/UserInfo?endpoint=incomes&userId=${userId}`);
      const data = await response.json();
      setIncomes(data);
    };

    fetchIncomes();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
       <TableBody>
          {incomes.map((income) => (
            <TableRow key={income._id}>
              <TableCell>{formatDate(income.date)}</TableCell>
              <TableCell>{income.description}</TableCell>
              <TableCell>{income.category}</TableCell>
              <TableCell>{income.amount}</TableCell>
              <TableCell>
                  <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default IncomeList;
