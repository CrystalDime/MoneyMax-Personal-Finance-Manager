import React from "react";
import { Box, Typography } from "@material-ui/core";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function IncomeCategoriesPieChart({ incomeCategoriesData }) {
  return (
    <Box>
      <Typography variant="h2">Income Categories</Typography>
      <PieChart width={400} height={400}>
        <Pie
          data={incomeCategoriesData}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          dataKey="value"
        >
          {incomeCategoriesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
}

export default IncomeCategoriesPieChart;
