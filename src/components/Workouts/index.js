import { memo } from "react";
import { useSelector } from "react-redux";
import isEqual from "lodash/isEqual";
import { Droppable } from "react-beautiful-dnd";

// store
import { workoutSelectors } from "store/workout";

// components
import { Workout } from "components";

// styles
import styles from "./index.module.css";

export const WorkoutsBase = ({ day }) => {
  // get all workouts of day
  const workouts = useSelector(
    ({ workout }) => workoutSelectors.getWorkoutsByDay(workout, day),
    (prevWorkouts, nextWorkouts) => isEqual(prevWorkouts, nextWorkouts)
  );

  return (
    <Droppable droppableId={day}>
      {(provided) => (
        <div ref={provided.innerRef} className={styles.workoutsWrapper}>
          {workouts.map((workout, index) => (
            <Workout key={workout.id} workout={workout} index={index} />
          ))}
        </div>
      )}
    </Droppable>
  );
};

export const Workouts = memo(WorkoutsBase);
