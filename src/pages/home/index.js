import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

// store
import { Creators } from "store/workout/actions";

// constants
import { DAYS } from "constants/index";

// components
import { Day } from "components";

// styles
import styles from "./index.module.css";

const Home = () => {
  const dispatch = useDispatch();

  // handle action drag drop workout
  const handleDragEnd = useCallback((result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    // dispatch action move workout to update data
    dispatch(Creators.moveWorkout(source, destination));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <DragDropContext onDragEnd={handleDragEnd}>
        {DAYS.map((day) => (
          <Day key={day} day={day} />
        ))}
      </DragDropContext>
    </div>
  );
};

export default memo(Home);
