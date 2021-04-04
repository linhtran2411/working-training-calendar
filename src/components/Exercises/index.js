import { memo } from "react";
import { useSelector } from "react-redux";
import isEqual from "lodash/isEqual";

// store
import { exerciseSelectors } from "store/exercise";

// components
import { Exercise } from "components";

// styles
import styles from "./index.module.css";

export const ExercisesBase = ({ workoutId }) => {
  // get all exercises of workout
  const exercises = useSelector(
    ({ exercise }) =>
      exerciseSelectors.getExercisesByWorkout(exercise, workoutId),
    (prevExercises, nextExercises) => isEqual(prevExercises, nextExercises)
  );

  return (
    <div className={styles.container}>
      {exercises.map((exercise) => (
        <Exercise key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

export const Exercises = memo(ExercisesBase);
