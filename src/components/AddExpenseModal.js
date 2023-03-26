import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";

function AddExpenseModal({ open, handleClose }) {
  const [expenseData, setExpenseData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });
  const userId = localStorage.getItem("userId");

  const handleChange = (e) => {
    setExpenseData({
      ...expenseData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    await fetch(`/api/UserInfo?endpoint=expenses&userId=${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Add Expense</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Date"
          name="date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={expenseData.date}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Description"
          name="description"
          type="text"
          fullWidth
          value={expenseData.description}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Category"
          name="category"
          type="text"
          fullWidth
          value={expenseData.category}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Amount"
          name="amount"
          type="number"
          fullWidth
          value={expenseData.amount}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddExpenseModal;
