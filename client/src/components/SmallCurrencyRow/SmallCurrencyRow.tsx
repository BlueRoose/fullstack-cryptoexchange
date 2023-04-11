import { FC } from "react";
import styles from "./SmallCurrencyRow.module.scss";
import { useCurrencies } from "../../hooks/useCurrencies";
import { Currencies } from "../../providers/Currencies/types";
import { useYourCryptos } from "../../hooks/useYourCryptos";
import Button from "../Button/Button";

interface Props {
  symbol: string;
  amount: number;
}

const SmallCurrencyRow: FC<Props> = ({ symbol, amount }) => {
  const { currencies } = useCurrencies();
  const { removeCryptos } = useYourCryptos();

  const getPrice = () => {
    return (
      Number(
        currencies.find((element: Currencies) => element.symbol === symbol)
          ?.priceUsd
      ) * amount
    );
  };

  const handleClickCross = () => {
    removeCryptos(symbol);
  };

  return (
    <div className={styles.row}>
      <p>
        {amount} <span>{symbol}</span> ~ {getPrice().toFixed(5)}{" "}
        <span>USDT</span>
      </p>
      <Button type="blackCross" onClick={handleClickCross}>+</Button>
    </div>
  );
};

export default SmallCurrencyRow;
