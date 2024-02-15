import React from "react";
import {
  Container,
  Typography
} from "@mui/material";

import TickerGroup from "./components/TickerGroup/TickerGroup";
import Chart from "./components/Chart";
import TradeForm from "./components/TradeForm";
import Journal from "./components/Journal";

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Trading Dashboard
      </Typography>

      {/* Section for Open Positions */}
      <TickerGroup />

      {/* Section for Chart */}
      <Chart />

      {/* Section for Trade Entry Form */}
      <TradeForm />
      {/* Section for Trade Journal Table */}
      <Journal />
    </Container>
  );
};

export default App;
