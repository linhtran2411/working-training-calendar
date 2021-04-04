import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import isEqual from "lodash/isEqual";

// components
import { Exercises } from "components/Exercises";
import { Header } from "./Header";
import { Footer } from "./Footer";

// styles
import styles from "./index.module.css";

export const WorkoutBase = ({ workout: { id, name }, index }) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={styles.container}
        >
          <Header {...provided.dragHandleProps} name={name} />
          <Exercises workoutId={id} />
          <Footer workoutId={id} />
        </div>
      )}
    </Draggable>
  );
};

export const Workout = memo(
  WorkoutBase,
  (prevProps, nextProps) =>
    isEqual(prevProps.workout, nextProps.workout) &&
    prevProps.index === nextProps.index
);
