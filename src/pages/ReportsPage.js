import React from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "../components/Header";
import VerticalNavBar from "../components/VerticalNavBar";
import ReportsCharts from "../components/ReportsCharts";
import ReportsFilters from "../components/ReportsFilters";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(4),
    paddingLeft: theme.spacing(15) + 1, // Set the paddingLeft to match the width of the navbar
    height: "100%"
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: theme.spacing(9) + 1 // Set the width of the navbar
  }
}));

function ReportsPage() {
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
              <ReportsFilters />
            </Grid>
            <Grid item xs={12}>
              <ReportsCharts />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default ReportsPage;
