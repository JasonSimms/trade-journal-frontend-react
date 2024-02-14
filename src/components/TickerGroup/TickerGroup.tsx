import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import TickerCard from "./TickerCard";

//REDUX
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { addSymbol, setActiveSymbol } from "../../slices/tickersSlice";

import { getSymbolInfo, isSymbolValid } from "../../utils/isSymbolValid";

const TickerGroup: React.FC = () => {
  //redux state
  const tickers = useAppSelector((state) => state.tickers.symbols);
  const activeSymbol = useAppSelector((state) => state.tickers.activeSymbol);

  const [newTicker, setNewTicker] = React.useState("");
  const [inputError, setInputError] = React.useState(false);

  // Get the dispatch function from the hook
  const dispatch = useAppDispatch();

  const handleAddTicker = async () => {
    if (newTicker) {
      const symbolInfo = await getSymbolInfo(newTicker);
      if (symbolInfo && !tickers.includes(newTicker)) {
        dispatch(addSymbol(newTicker));
        dispatch(setActiveSymbol(newTicker));
        setNewTicker(""); // Clear the input field
        setInputError(false); // Reset the error state
      } else {
        console.error("Not a valid Symbol"); //TODO TOASt notification
        setInputError(true); // Set the error state
      }
    }
  };

  const handleSetActiveSymbol = (str: string) => {
    dispatch(setActiveSymbol(str));
  };

  return (
    <Grid container spacing={3}>
      {tickers.map((ticker) => (
        <TickerCard
          setActiveSymbol={handleSetActiveSymbol}
          key={ticker}
          ticker={ticker}
          isActive={ticker === activeSymbol}
        />
      ))}
      <Grid
        item
        onClick={handleAddTicker}
        xs={12}
        sm={3}
        md={3}
        lg={2}
        key={"addTicker"}
      >
        <Card>
          <CardContent >
            <TextField
              label="Add A Ticker"
              error={inputError}
              helperText={
                inputError ? "Symbol provided is not valid try TSLA" : ""
              }
              value={newTicker}
              onChange={(event) =>
                setNewTicker(event.target.value.toUpperCase())
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  return handleAddTicker();
                }
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TickerGroup;
