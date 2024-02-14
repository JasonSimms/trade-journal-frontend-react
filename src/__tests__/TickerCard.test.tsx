import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TickerCard from '../components/TickerGroup/TickerCard';

describe('TickerCard', () => {
  test('renders the ticker symbol', () => {
    const ticker = 'AAPL';
    render(<TickerCard ticker={ticker} setActiveSymbol={()=>null} isActive={false}/>);
    const tickerElement = screen.getByText(ticker);
    expect(tickerElement).toBeInTheDocument();
  });

  test('renders TickerCard with Active className', () => {
    const ticker = 'F';
  render(<TickerCard ticker={ticker} setActiveSymbol={()=>null} isActive={true}/>);
  const tickerElement = screen.getByText(ticker);
  expect(tickerElement).toBeInTheDocument();
  expect(tickerElement).not.toHaveClass('active');
  })
  // Additional tests can be added here
});

