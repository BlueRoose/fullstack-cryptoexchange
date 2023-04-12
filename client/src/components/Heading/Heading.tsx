import { FC, ReactNode } from "react";
import styles from "./Heading.module.scss";

interface Props {
  children: ReactNode;
  animated: boolean;
  marginBottom: boolean;
}

const Heading: FC<Props> = ({ children, animated, marginBottom }) => {
  const checkProps = () => {
    let className = styles.heading;
    if (animated) {
      className += " " + styles.animated;
    }
    if (marginBottom) {
      className += " " + styles.marginBottom;
    }
    return className;
  };
  return <h2 className={checkProps()}>{children}</h2>;
};

export default Heading;
