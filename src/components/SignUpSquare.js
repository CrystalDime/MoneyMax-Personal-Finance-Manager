import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1)
  },
  textField: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  button: {
    width: "100%",
    marginTop: theme.spacing(2)
  }
}));

function SignUpSquare() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch("https://money-max-personal-finance-manager.vercel.app//api/UserInfo?endpoint=register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      alert("Account created successfully!");
    } else {
      alert("Error creating account. Please try again.");
    }
  };

  return (
    <Paper className={classes.paper} component="form" onSubmit={handleSubmit}>
      <TextField
        label="Full Name"
        className={classes.textField}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        className={classes.textField}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        className={classes.textField}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        type="password"
        className={classes.textField}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Sign Up
      </Button>
    </Paper>
  );
}

export default SignUpSquare;
