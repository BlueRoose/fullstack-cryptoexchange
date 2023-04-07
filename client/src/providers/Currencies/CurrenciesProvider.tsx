import { createContext, FC, useEffect, useState } from "react";
import { Currencies, CurrenciesContextType, Props } from "./types";
import { trpc } from "../../trpc";

interface Data {
  data: Currencies[];
  timestamp: number;
}

export const CurrenciesContext = createContext<CurrenciesContextType>({
  currencies: [],
  isCurrenciesLoading: true,
  topThree: [],
});

export const CurrenciesProvider: FC<Props> = ({ children }) => {
  const [currencies, setCurrencies] = useState<Currencies[]>([]);
  const [topThree, setTopThree] = useState<Currencies[]>([]);
  const [isCurrenciesLoading, setIsCurrenciesLoading] = useState(true);

  useEffect(() => {
    trpc.currency.getCurrencies
      .query()
      .then((data: Data) => {
        setCurrencies(data.data);
        setIsCurrenciesLoading(false);
        setTopThree(data.data.slice(0, 3));
      })
      .catch(console.error);
  }, []);

  const value = { currencies, isCurrenciesLoading, topThree };

  return (
    <CurrenciesContext.Provider value={value}>
      {children}
    </CurrenciesContext.Provider>
  );
};
