import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";

function AddIncomeModal({ open, handleClose }) {
  const [incomeData, setIncomeData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });
  const userId = localStorage.getItem("userId");

  const handleChange = (e) => {
    setIncomeData({
      ...incomeData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    await fetch(`/api/UserInfo?endpoint=incomes&userId=${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(incomeData),
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Add Income</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Date"
          name="date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={incomeData.date}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Description"
          name="description"
          type="text"
          fullWidth
          value={incomeData.description}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Category"
          name="category"
          type="text"
          fullWidth
          value={incomeData.category}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Amount"
          name="amount"
          type="number"
          fullWidth
          value={incomeData.amount}
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

export default AddIncomeModal;
