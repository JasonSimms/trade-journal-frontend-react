import React from "react";
import {  TextField, FormControlLabel, Switch, Button } from '@mui/material';


interface TradeFormProps {
    //   ticker: string;
    //   setActiveSymbol: Function;
    //   isActive?: boolean;
    }

const TradeForm: React.FC<TradeFormProps> = () => {

    const tradeFormStyle = {
        // bgcolor: isActive ? "text.secondary" : "info.main",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // height: '4vh'
      };

    return (
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
      );
    };
    
    export default TradeForm;