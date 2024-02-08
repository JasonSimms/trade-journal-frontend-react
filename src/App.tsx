import React from 'react';
import { Container, Typography, Card, CardContent, TextField, FormControlLabel, Switch, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const App: React.FC = () => {
  // Placeholder data for the chart
  const data = [
    { name: 'Jan', uv:  4000, pv:  2400, amt:  2400 },
    // ... more data points
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Trading Dashboard
      </Typography>

      {/* Section for Open Positions */}
      <Grid container spacing={3}>
        {['AAPL', 'GOOG'].map((ticker) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={ticker}>
            <Card>
              <CardContent>
                <Typography variant="h6">{ticker}</Typography>
                <Typography variant="body1">Value: $100</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Section for Chart */}
      
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

  

      {/* Section for Trade Entry Form */}
      <form noValidate autoComplete="off">
        <TextField label="Ticker" fullWidth margin="normal" />
        <FormControlLabel
          control={<Switch color="primary" />}
          label="Limit Order"
        />
        <TextField label="Limit Price" fullWidth margin="normal" disabled />
        <Button variant="contained" color="primary">Buy</Button>
        <Button variant="contained" color="secondary">Sell</Button>
        <Button variant="contained">Watch</Button>
      </form>
   {/* Section for Trade Journal Table */}
   <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ticker</TableCell>
              <TableCell align="right">Date Closed</TableCell>
              <TableCell align="right">Strategy</TableCell>
              <TableCell align="right">Outcome</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(5)].map((_, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  Ticker {index +  1}
                </TableCell>
                <TableCell align="right">2023-04-01</TableCell>
                <TableCell align="right">Strategy {index +  1}</TableCell>
                <TableCell align="right">Profit</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};


export default App;
