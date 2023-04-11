import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  type: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, type, onClick }) => {
  const checkType = () => {
    switch (type) {
      case "short":
        return styles.short;
      case "long":
        return styles.long;
      case "cross":
        return styles.cross;
      case "blackCross":
        return styles.blackCross;
      case "plus":
        return styles.plus;
      case "active":
        return styles.active;
      case "common":
        return styles.common;
      default:
        break;
    }
  };
  return (
    <button onClick={onClick} className={checkType()}>
      {children}
    </button>
  );
};

export default Button;
