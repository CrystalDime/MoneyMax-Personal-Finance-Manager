import React from "react";
import SignUpSquare from "../components/SignUpSquare";
import { Container, Box, Typography } from "@material-ui/core";

function SignUpPage() {
  return (
    <Container maxWidth="sm">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Create your MoneyMax account
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Fill in the form below to sign up for a new MoneyMax account.
        </Typography>
        <SignUpSquare />
      </Box>
    </Container>
  );
}

export default SignUpPage;
