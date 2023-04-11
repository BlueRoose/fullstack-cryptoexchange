import { createContext, FC, useEffect, useState } from "react";
import { Currencies, CurrenciesContextType, Props } from "./types";
import useTRPC from "../../hooks/useTRPC";

export const CurrenciesContext = createContext<CurrenciesContextType>({
  currencies: [],
  isCurrenciesLoading: true,
  topThree: [],
});

export const CurrenciesProvider: FC<Props> = ({ children }) => {
  const [currencies, setCurrencies] = useState<Currencies[]>([]);
  const [topThree, setTopThree] = useState<Currencies[]>([]);
  const [isCurrenciesLoading, setIsCurrenciesLoading] = useState(true);
  const { getCryptos } = useTRPC();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptos();
      setCurrencies(data);
      setIsCurrenciesLoading(false);
      setTopThree(data.slice(0, 3));
    };
    fetchData();
  }, [getCryptos]);

  const value = { currencies, isCurrenciesLoading, topThree };

  return (
    <CurrenciesContext.Provider value={value}>
      {children}
    </CurrenciesContext.Provider>
  );
};
