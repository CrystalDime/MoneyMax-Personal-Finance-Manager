import React, { useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import Header from "../components/Header";
import VerticalNavBar from "../components/VerticalNavBar";
import IncomeList from "../components/IncomeList";
import AddIncomeModal from "../components/AddIncomeModal";
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

function IncomePage() {
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
  const classes = useStyles();
  const handleOpenAddIncomeModal = () => setOpenAddIncomeModal(true);
  const handleCloseAddIncomeModal = () => setOpenAddIncomeModal(false);

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
                onClick={handleOpenAddIncomeModal}
              >
                Add Income
              </Button>
            </Grid>
            <Grid item xs={12}>
              <IncomeList />
            </Grid>
          </Grid>
          <AddIncomeModal
            open={openAddIncomeModal}
            handleClose={handleCloseAddIncomeModal}
          />
        </Container>
      </div>
    </>
  );
}

export default IncomePage;
