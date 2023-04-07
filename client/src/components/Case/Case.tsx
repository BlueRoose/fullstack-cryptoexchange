import { FC } from "react";
import styles from "./Case.module.scss";
import SmallCurrencyRow from "../SmallCurrencyRow/SmallCurrencyRow";
import { useYourCryptos } from "../../hooks/useYourCryptos";
import { Currency } from "../../providers/YourCryptos/types";

interface Props {
  onChange: (state: boolean) => void;
}

const Case: FC<Props> = ({ onChange }) => {
  const { yourCryptos } = useYourCryptos();

  const handleCrossClick = () => {
    onChange(false);
  };

  return (
    <div className={styles.case}>
      <button className={styles.cross} onClick={handleCrossClick}>
        X
      </button>
      <p className={styles.text}>Your cryptos</p>
      <div className={styles.rows}>
        {yourCryptos.map((element: Currency, index: number) => {
          return (
            <SmallCurrencyRow
              key={index}
              symbol={element.symbol}
              amount={element.amount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Case;
