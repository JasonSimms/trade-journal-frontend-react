import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TickersState {
  symbols: string[];
}

const initialState: TickersState = {
  symbols: ['INITIAL', 'STATE']
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
    }
  }
});

export const { setSymbols, addSymbol, removeSymbol } = tickersSlice.actions;

export default tickersSlice.reducer;