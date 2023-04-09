import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  type: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, type, onClick }) => {
  const checkType = () => {
    if (type === "short") {
      return styles.short;
    } else {
      return styles.long;
    }
  };
  return (
    <button onClick={onClick} className={checkType()}>
      {children}
    </button>
  );
};

export default Button;
