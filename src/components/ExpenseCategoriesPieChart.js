import React from "react";
import { Box, Typography } from "@material-ui/core";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function ExpenseCategoriesPieChart({ expenseCategoriesData }) {
  return (
    <Box>
      <Typography variant="h2">Expense Categories</Typography>
      <PieChart width={400} height={400}>
        <Pie
          data={expenseCategoriesData}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          dataKey="value"
        >
          {expenseCategoriesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
}

export default ExpenseCategoriesPieChart;
