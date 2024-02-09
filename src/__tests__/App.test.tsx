// import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
// // import store from '../store';

import App from "../App";

global.ResizeObserver = require("resize-observer-polyfill"); // ? related to rechart component  possible

// const middlewares: any[] = []; // Corrected line
const mockStore = configureStore([]);

describe("App", () => {
  test("renders App With Header", () => {
    const initialState = { tickers: { symbols: ["ticker1", "ticker2"] } };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/Trading Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders tickers from store", () => {
    const initialState = { tickers: { symbols: ["ticker1", "ticker2"] } };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/ticker1/i);
    expect(linkElement).toBeInTheDocument();
    const linkElement2 = screen.getByText(/ticker2/i);
    expect(linkElement2).toBeInTheDocument();
  });
});
