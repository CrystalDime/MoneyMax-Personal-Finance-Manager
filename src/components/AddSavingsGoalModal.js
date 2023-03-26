import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";

function AddSavingsGoalModal({ open, handleClose }) {
  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const userId = localStorage.getItem("userId");

  const handleSubmit = async () => {
    const savingsGoalData = { title, targetAmount, currentAmount };

    await fetch(`/api/UserInfo?endpoint=savings_goals&userId=${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(savingsGoalData),
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Add Savings Goal</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Target Amount"
          type="number"
          fullWidth
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Current Amount"
          type="number"
          fullWidth
          value={currentAmount}
          onChange={(e) => setCurrentAmount(e.target.value)}
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

export default AddSavingsGoalModal;