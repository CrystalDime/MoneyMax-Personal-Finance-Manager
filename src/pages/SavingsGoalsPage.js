import React, { useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import Header from "../components/Header";
import VerticalNavBar from "../components/VerticalNavBar";
import SavingsGoalsList from "../components/SavingsGoalsList";
import AddSavingsGoalModal from "../components/AddSavingsGoalModal";

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

function SavingsGoalsPage() {
  const [openAddSavingsGoalModal, setOpenAddSavingsGoalModal] = useState(false);

  const handleOpenAddSavingsGoalModal = () => setOpenAddSavingsGoalModal(true);
  const handleCloseAddSavingsGoalModal = () =>
    setOpenAddSavingsGoalModal(false);
  const classes = useStyles();
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
                onClick={handleOpenAddSavingsGoalModal}
              >
                Add Savings Goal
              </Button>
            </Grid>
            <Grid item xs={12}>
              <SavingsGoalsList />
            </Grid>
          </Grid>
          <AddSavingsGoalModal
            open={openAddSavingsGoalModal}
            handleClose={handleCloseAddSavingsGoalModal}
          />
        </Container>
      </div>
    </>
  );
}

export default SavingsGoalsPage;
