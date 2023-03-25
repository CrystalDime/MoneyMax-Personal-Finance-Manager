import React from "react";
import { Grid } from "@material-ui/core";
import SpendingOverview from "./SpendingOverview";
import MonthlyTrend from "./MonthlyTrend";

function ReportsCharts() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <SpendingOverview />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MonthlyTrend />
      </Grid>
    </Grid>
  );
}

export default ReportsCharts;
