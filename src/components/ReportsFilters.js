import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from "@material-ui/core";

function ReportsFilters() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <Typography variant="h6">Filters</Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormControl fullWidth>
          <InputLabel>Date Range</InputLabel>
          <Select>
            <MenuItem value="all">All Time</MenuItem>
            <MenuItem value="month">This Month</MenuItem>
            <MenuItem value="week">This Week</MenuItem>
            <MenuItem value="custom">Custom Range</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          fullWidth
          label="From"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          fullWidth
          label="To"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
    </Grid>
  );
}

export default ReportsFilters;
