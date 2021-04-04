import { memo } from "react";
import isEqual from "lodash/isEqual";

// styles
import styles from "./index.module.css";

export const ExerciseBase = ({ exercise: { name, setInformation } }) => {
  const numberOfSet = setInformation.split(",").length;

  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <div className={styles.contentWrapper}>
        <p className={styles.numberOfSet}>{`${numberOfSet}x`}</p>
        <p className={styles.setInformation}>{setInformation}</p>
      </div>
    </div>
  );
};

export const Exercise = memo(ExerciseBase, (prevProps, nextProps) =>
  isEqual(prevProps.exercise, nextProps.exercise)
);
