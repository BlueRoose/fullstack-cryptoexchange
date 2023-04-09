import { FC, ReactNode } from "react";
import styles from "./PaginationButton.module.scss";

interface Props {
  children: ReactNode;
  type: string;
  onClick: () => void;
}

const PaginationButton: FC<Props> = ({ children, type, onClick }) => {
  const checkType = () => {
    if (type === "active") {
      return styles.active;
    } else {
      return styles.common;
    }
  };
  return (
    <button className={checkType()} onClick={onClick}>
      {children}
    </button>
  );
};

export default PaginationButton;
