import { isSymbolValid, getSymbolInfo } from './isSymbolValid';

describe('isSymbolValid', () => {
  it('should return true for a valid symbol', () => {
    expect(isSymbolValid('AAPL')).toBe(true);
  });

  it('should return false for an invalid symbol', () => {
    expect(isSymbolValid('INVALIDSYMBOL')).toBe(false);
  });
});

describe('getSymbolInfo', () => {
  it('should return the correct stock object for a valid symbol', () => {
    const expectedStock = {
        "Symbol": "AAPL",
        "Name": "Apple Inc. Common Stock",
        "Market Cap": "2889948029150",
        "Country": "United States",
        "IPO Year": "1980",
        "Volume": "41781934",
        "Sector": "Technology",
        "Industry": "Computer Manufacturing",
        "": ""
      };
    expect(getSymbolInfo('AAPL')).toEqual(expectedStock);
  });

  it('should return undefined for an invalid symbol', () => {
    expect(getSymbolInfo('INVALIDSYMBOL')).toBeUndefined();
  });
});