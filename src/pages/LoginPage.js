import React from "react";
import LoginSquare from "../components/LoginSquare";
import { Container, Box, Typography } from "@material-ui/core";

function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Sign in to MoneyMax
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Enter your email and password to access your MoneyMax account.
        </Typography>
        <LoginSquare />
      </Box>
    </Container>
  );
}

export default LoginPage;
