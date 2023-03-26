import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import UserIdContext from "../contexts/UserIdContext";


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

function LoginSquare() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { userId, setUserId } = useContext(UserIdContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const response = await fetch("/api/UserInfo?endpoint=login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token, user } = await response.json();
      setUserId(user.id);
      navigate("/dashboard");
    } else {
      alert("Error signing in. Please check your email and password.");
    }
  };

  return (
    <Paper className={classes.paper} component="form" onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
      <TextField
        className={classes.textField}
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        className={classes.textField}
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Sign in
      </Button>
    </Paper>
  );
}

export default LoginSquare;
