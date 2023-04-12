import { FC, ReactNode } from "react";
import styles from "./ModalWrapper.module.scss";

interface Props {
  type: string;
  position: string;
  children: ReactNode;
}

const ModalWrapper: FC<Props> = ({ type, position, children }) => {
  const checkType = () => {
    let className = styles.wrapper;
    if (type === "small") {
      className += " " + styles.small;
    } else if (type === "big") {
      className += " " + styles.big;
    }
    if (position === "center") {
      className += " " + styles.center;
    } else if (position === "corner") {
      className += " " + styles.corner;
    }
    return className;
  };
  return <div className={checkType()}>{children}</div>;
};

export default ModalWrapper;
