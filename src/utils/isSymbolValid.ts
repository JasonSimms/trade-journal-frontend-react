import stockListJson from './nasdaq_list.json'; // Adjust the path to your JSON file

interface Stock {
  Symbol: string;
  Name: string;
  MarketCap: string;
  Country: string;
  IPOYear: string;
  Volume: string;
  Sector: string;
  Industry: string;
}

export function isSymbolValid(symbol: string): boolean {
  const stockList: any[] = stockListJson;
  return stockList.some((stock: Stock) => stock.Symbol === symbol);
}

export function getSymbolInfo(symbol: string): boolean {
    const stockList: any[] = stockListJson;
    return stockList.find((stock: Stock) => stock.Symbol === symbol);
  }