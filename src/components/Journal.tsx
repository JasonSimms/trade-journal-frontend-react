import React from "react";
// import {  TextField, FormControlLabel, Switch, Button,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


interface JournalProps {

}
const Journal: React.FC<JournalProps> = () => {
    const journalStyle = {
      // bgcolor: isActive ? "text.secondary" : "info.main",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      // height: '4vh'
    };
    return (
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
    );
    };

    export default Journal;