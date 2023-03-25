import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

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

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <Paper className={classes.paper}>
      <TextField
        className={classes.textField}
        label="Email"
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        label="Password"
        type="password"
        variant="outlined"
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleSignIn}
      >
        Sign in
      </Button>
    </Paper>
  );
}

export default LoginSquare;
