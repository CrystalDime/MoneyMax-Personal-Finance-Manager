import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Box, Container } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    textAlign: "center",
    marginTop: theme.spacing(8)
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(4)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup", { replace: false });
  };

  const handleLogInClick = () => {
    navigate("/login", { replace: false });
  };

  return (
    <Container maxWidth="sm" className={classes.content}>
      <Typography variant="h4" gutterBottom>
        Welcome to MoneyMax!
      </Typography>
      <Typography variant="subtitle1">
        A brief description of the application and its features goes here.
        Explain what MoneyMax does and why users should sign up.
      </Typography>

      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSignUpClick}
        >
          Sign Up
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={handleLogInClick}
        >
          Log In
        </Button>
      </div>
    </Container>
  );
}
