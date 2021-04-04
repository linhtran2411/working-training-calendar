import { memo } from "react";
import moment from "moment";
import clsx from "clsx";

// components
import { Workouts } from "components";

// styles
import styles from "./index.module.css";

const DayBase = ({ day }) => {
  const weekDay = day.substring(0, 3).toUpperCase();

  // get date
  const date = moment().isoWeekday(day);

  // check if the day is today
  const isToday = date.isSame(moment());

  return (
    <div className={styles.container}>
      <p className={styles.weekDay}>{weekDay}</p>

      <div className={styles.contentWrapper}>
        <p
          className={clsx(styles.monthDay, {
            [styles.today]: isToday,
          })}
        >
          {date.format("DD")}
        </p>

        <Workouts day={day} />
      </div>
    </div>
  );
};

export const Day = memo(DayBase);
