//components/tickercard/index.tsx

import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

interface TickerCardProps {
  ticker: string;
}

const TickerCard: React.FC<TickerCardProps> = ({ ticker }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={ticker}>
      <Card>
        <CardContent>
          <Typography variant="h6">{ticker}</Typography>
          <Typography variant="body1">Value: $100</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TickerCard;