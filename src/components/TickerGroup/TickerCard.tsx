//components/tickercard/index.tsx

import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

interface TickerCardProps {
  ticker: string;
  setActiveSymbol: Function;
  isActive?: boolean;
}


const TickerCard: React.FC<TickerCardProps> = ({ setActiveSymbol, ticker, isActive=false }) => {
  const cardClassName = isActive ? 'tickerCard centeredContent active' : 'centeredContent tickerCard';
  return (
    <Grid item xs={12} sm={3} md={3} lg={2} key={ticker} onClick={()=>setActiveSymbol(ticker)}>
      <Card className={cardClassName}>
        <CardContent>
          <Typography variant="h6">{ticker}</Typography>
          {/* <Typography variant="body1">Value: $100</Typography> */}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TickerCard;