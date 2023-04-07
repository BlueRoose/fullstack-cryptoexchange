import { useContext } from "react";
import { CurrenciesContext } from "../providers/Currencies/CurrenciesProvider";

export function useCurrencies() {
  return useContext(CurrenciesContext);
}
