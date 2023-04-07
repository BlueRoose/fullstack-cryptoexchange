export interface Currency {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export interface HistoryItem {
  date: string;
  priceUsd: string;
  time: number;
}

export interface CurrenciesData {
  data: Currency[];
  timestamp: number;
}

export interface HistoryData {
  data: HistoryItem[];
  timestamp: number;
}
