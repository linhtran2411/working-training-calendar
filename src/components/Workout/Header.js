import { memo } from "react";

// assets
import { ReactComponent as MoreIcon } from "assets/icons/MoreIcon.svg";

// styles
import styles from "./index.module.css";

export const HeaderBase = ({ name, ...dragHandleProps }) => (
  <div className={styles.header}>
    <p className={styles.name}>{name}</p>
    <button className={styles.iconButton} {...dragHandleProps}>
      <MoreIcon />
    </button>
  </div>
);

export const Header = memo(HeaderBase);
