import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function FinancialOverview({ title, value, valueColor }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4" style={{ color: valueColor }}>
          ${value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FinancialOverview;
