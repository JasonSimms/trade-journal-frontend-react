import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TickersState {
  symbols: string[];
  activeSymbol?: string;
}

const initialState: TickersState = {
  symbols: ['SBUX', 'IWM', 'AAPL'],
  activeSymbol: undefined, // Initialize with no active symbol
};

const tickersSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    setSymbols: (state, action: PayloadAction<string[]>) => {
      state.symbols = action.payload;
    },
    addSymbol: (state, action: PayloadAction<string>) => {
      state.symbols.push(action.payload);
    },
    removeSymbol: (state, action: PayloadAction<string>) => {
      state.symbols = state.symbols.filter((symbol) => symbol !== action.payload);
    },
    setActiveSymbol: (state, action: PayloadAction<string>) => {
      state.activeSymbol = action.payload;
    },
  }
});

export const { setSymbols, addSymbol, removeSymbol, setActiveSymbol } = tickersSlice.actions;

export default tickersSlice.reducer;