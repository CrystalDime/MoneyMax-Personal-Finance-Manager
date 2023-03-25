import React from "react";
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

  return (
    <Paper className={classes.paper}>
      <TextField label="Full Name" className={classes.textField} />
      <TextField label="Email" className={classes.textField} />
      <TextField
        label="Password"
        type="password"
        className={classes.textField}
      />
      <TextField
        label="Confirm Password"
        type="password"
        className={classes.textField}
      />
      <Button variant="contained" color="primary" className={classes.button}>
        Sign Up
      </Button>
    </Paper>
  );
}

export default SignUpSquare;
