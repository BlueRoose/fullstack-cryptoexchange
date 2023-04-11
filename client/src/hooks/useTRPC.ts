import { Currencies } from "../providers/Currencies/types";
import { trpc } from "../trpc";

interface Data {
  data: Currencies[];
  timestamp: number;
}

interface History {
  priceUsd: string;
  time: number;
  date: string;
}

interface HistoryData {
  data: History[];
  timestamp: number;
}

interface TRPCReturn {
  getCryptos: () => Promise<Currencies[]>;
  getCurrencyHistory: (id: string) => Promise<History[]>;
}

function useTRPC(): TRPCReturn {
  async function getCryptos() {
    try {
      const data: Data = await trpc.currency.getCurrencies.query();
      return data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async function getCurrencyHistory(id: string) {
    try {
      const data: HistoryData = await trpc.currency.getCurrencyHistory.query(
        id
      );
      return data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  return {
    getCryptos,
    getCurrencyHistory,
  };
}

export default useTRPC;
