import { FC } from "react";
import styles from "./CrossButton.module.scss";

interface Props {
  type: string;
  onClick: () => void;
}

const CrossButton: FC<Props> = ({ type, onClick }) => {
  const checkType = () => {
    if (type === "cross") {
      return styles.cross;
    } else if (type === "blackCross") {
      return styles.blackCross;
    } else {
      return styles.plus;
    }
  };
  return (
    <button onClick={onClick} className={checkType()}>
      +
    </button>
  );
};

export default CrossButton;
