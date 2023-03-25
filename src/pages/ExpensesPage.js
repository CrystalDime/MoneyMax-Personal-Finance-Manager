import React, { useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import Header from "../components/Header";
import VerticalNavBar from "../components/VerticalNavBar";
import ExpensesList from "../components/ExpensesList";
import AddExpenseModal from "../components/AddExpenseModal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(15) + 1,
    height: "100%"
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: theme.spacing(9) + 1
  }
}));

function ExpensesPage() {
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);
  const classes = useStyles();
  const handleOpenAddExpenseModal = () => setOpenAddExpenseModal(true);
  const handleCloseAddExpenseModal = () => setOpenAddExpenseModal(false);

  return (
    <>
      <Header />
      <div className={classes.navbar}>
        <VerticalNavBar />
      </div>
      <div className={classes.content}>
        <Container maxWidth="lg" height="100%">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenAddExpenseModal}
              >
                Add Expense
              </Button>
            </Grid>
            <Grid item xs={12}>
              <ExpensesList />
            </Grid>
          </Grid>
          <AddExpenseModal
            open={openAddExpenseModal}
            handleClose={handleCloseAddExpenseModal}
          />
        </Container>
      </div>
    </>
  );
}

export default ExpensesPage;
