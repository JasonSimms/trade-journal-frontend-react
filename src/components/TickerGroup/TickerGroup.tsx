import React from "react";
import { Grid, Card, CardContent, Typography, TextField } from "@mui/material";
import TickerCard from "./TickerCard";

//REDUX
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { addSymbol } from "../../slices/tickersSlice";

// interface TickerGroupProps {
//   tickers: string[];
//   onAddTicker: (ticker: string) => void;
// }

const TickerGroup: React.FC = () => {
  //redux state
  const tickers = useAppSelector((state) => state.tickers.symbols);

  // Function to handle the click event
  const [newTicker, setNewTicker] = React.useState("");

  // Get the dispatch function from the hook
  const dispatch = useAppDispatch();

  const handleAddTicker = () => {
    if (newTicker) {
      dispatch(addSymbol(newTicker));
      setNewTicker(""); // Clear the input field
    }
  };

  return (
    <Grid container spacing={3}>
      {tickers.map((ticker) => (
        <TickerCard key={ticker} ticker={ticker} />
      ))}
      <Grid
        onClick={handleAddTicker}
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        key={"addTicker"}
      >
        <Card>
          <CardContent>
            <Typography variant="h6">Add+</Typography>
            <TextField
              value={newTicker}
              onChange={(event) => setNewTicker(event.target.value)}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TickerGroup;
