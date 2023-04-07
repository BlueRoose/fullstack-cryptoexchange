import { createContext, FC, useEffect, useState } from "react";
import { getCurrencies } from "../../api/currenciesRequests";
import { Currencies, CurrenciesContextType, Props } from "./types";

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
    getCurrencies().then((currencies) => {
      setCurrencies(currencies);
      setIsCurrenciesLoading(false);
      setTopThree(currencies.slice(0, 3));
    });
  }, []);

  const value = { currencies, isCurrenciesLoading, topThree };

  return (
    <CurrenciesContext.Provider value={value}>
      {children}
    </CurrenciesContext.Provider>
  );
};
