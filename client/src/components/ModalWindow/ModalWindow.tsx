import { ChangeEvent, FC, useState } from "react";
import styles from "./ModalWindow.module.scss";
import { useYourCryptos } from "../../hooks/useYourCryptos";
import Button from "../Button/Button";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

interface Props {
  price: string;
  symbol: string;
}

const ModalWindow: FC<Props> = ({ price, symbol }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { setIsBuyWindowShowed, addCryptos } = useYourCryptos();

  const getPrice = () => {
    return Number(Number(searchValue) * Number(price)).toFixed(5);
  };

  const handleClickAdd = () => {
    if (searchValue === "" || searchValue === "0") {
      alert("Input value can not be empty or zero!");
    } else {
      addCryptos({
        symbol: symbol,
        amount: Number(searchValue),
        price: Number(getPrice()),
      });
      setIsBuyWindowShowed(false);
    }
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(event.target.value)) && event.target.value !== "") {
      event.target.value = "";
      setSearchValue("");
      alert("Input value must contain only numbers!");
    } else {
      setSearchValue(event.target.value);
    }
  };

  const handleClickCross = () => {
    setIsBuyWindowShowed(false);
  };

  return (
    <ModalWrapper position="center" type="big">
      <div className={styles.head}>
        <p>Buy crypto</p>
        <Button type="cross" onClick={handleClickCross}>
          +
        </Button>
      </div>
      <div className={styles.buyArea}>
        <p>Enter amount: </p>
        <input
          type="text"
          onChange={(event) => handleChangeInput(event)}
          required
        />
        <p>Price: {getPrice()} USDT</p>
      </div>
      <div style={{ margin: "0 50px 0 117px" }}>
        <Button type="short" onClick={handleClickAdd}>
          Buy
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default ModalWindow;
