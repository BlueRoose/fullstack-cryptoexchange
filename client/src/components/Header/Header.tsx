import { FC } from "react";
import styles from "./Header.module.scss";
import { useCurrencies } from "../../hooks/useCurrencies";
import Case from "../Case/Case";
import { useYourCryptos } from "../../hooks/useYourCryptos";

const Header: FC = () => {
  const { isCaseShowed, setIsCaseShowed } = useYourCryptos();
  const { topThree } = useCurrencies();
  const { currentBalance, oldBalance } = useYourCryptos();

  const calculateProfit = () => {
    if (currentBalance - oldBalance > 0) {
      return `+${(currentBalance - oldBalance).toFixed(2)}`;
    } else {
      return `${(currentBalance - oldBalance).toFixed(2)}`;
    }
  };

  const calculatePercentage = () => {
    if (!currentBalance || !oldBalance) {
      return "0%";
    } else if ((currentBalance / oldBalance) * 100 > 100) {
      return `+${((currentBalance / oldBalance) * 100 - 100).toFixed(2)} %`;
    } else {
      return `-${(100 - (currentBalance / oldBalance) * 100).toFixed(2)} %`;
    }
  };

  const handleCaseClick = () => {
    setIsCaseShowed(!isCaseShowed);
  };

  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <h1 className={styles.heading}>Crypto Exchange</h1>
        <div className={styles.personalInfo}>
          <div className={styles.balance}>
            <p className={styles.price}>{currentBalance.toFixed(2)} USDT</p>
            <p className={styles.price}>
              {calculateProfit()} USDT({calculatePercentage()})
            </p>
          </div>
          <img
            className={styles.case}
            onClick={handleCaseClick}
            src="/res/case.png"
            alt="case"
          />
        </div>
        {isCaseShowed && <Case onChange={setIsCaseShowed} />}
      </div>
      <div className={styles.bottom}>
        {topThree.map((el, index) => (
          <div className={styles.currency} key={index}>
            <p className={styles.value}>
              {el
                ? el?.symbol + " - " + Number(el?.priceUsd).toFixed(5) + " USDT"
                : "---"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
