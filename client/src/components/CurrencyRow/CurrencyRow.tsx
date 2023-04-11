import { FC } from "react";
import styles from "./CurrencyRow.module.scss";
import Button from "../Button/Button";
import { useYourCryptos } from "../../hooks/useYourCryptos";
import { Link } from "react-router-dom";

interface Props {
  rank: string;
  name: string;
  fullname: string;
  percentage: string;
  volume: string;
  price: string;
}

const CurrencyRow: FC<Props> = ({
  rank,
  name,
  fullname,
  percentage,
  volume,
  price,
}) => {
  const { setIsBuyWindowShowed, setSymbol, setPrice, setIsCaseShowed } =
    useYourCryptos();

  const handleAddButtonClick = () => {
    setSymbol(name);
    setPrice(price);
    setIsCaseShowed(false);
    setIsBuyWindowShowed(true);
  };

  return (
    <div className={styles.currencyRow}>
      <Link to={"/currency/" + name}>
        <p className={styles.view}>{rank}</p>
        <p className={styles.view}>{name}</p>
        <p className={styles.view}>{fullname}</p>
        <p className={styles.hide}>{percentage}</p>
        <p className={styles.hide}>{volume}</p>
        <p className={styles.view}>{price}</p>
      </Link>
      <Button type="plus" onClick={handleAddButtonClick}>+</Button>
    </div>
  );
};

export default CurrencyRow;
