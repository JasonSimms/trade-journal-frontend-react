import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TickerCard from '../components/TickerGroup/TickerCard';

describe('TickerCard', () => {
  test('renders the ticker symbol', () => {
    const ticker = 'AAPL';
    render(<TickerCard ticker={ticker} />);
    const tickerElement = screen.getByText(ticker);
    expect(tickerElement).toBeInTheDocument();
  });

  // Additional tests can be added here
});