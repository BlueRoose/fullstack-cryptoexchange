import { useContext } from "react";
import { YourCryptosContext } from "../providers/YourCryptos/YourCryptosProvider";

export function useYourCryptos() {
  return useContext(YourCryptosContext);
}
