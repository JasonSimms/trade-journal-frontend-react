//components/chart.tsx

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {  Paper } from '@mui/material';

// Placeholder data for the chart
const data = [
    { name: 'Jan', uv:  4000, pv:  2400, amt:  2400 },
    // ... more data points
  ];

interface ChartProps {
//   ticker: string;
//   setActiveSymbol: Function;
//   isActive?: boolean;
}

const Chart: React.FC<ChartProps> = () => {
  const chartStyle = {
    // bgcolor: isActive ? "text.secondary" : "info.main",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // height: '4vh'
  };
  return (
    <div style={chartStyle}>
      <Paper elevation={3}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r:  8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
      </div>
  );
};

export default Chart;