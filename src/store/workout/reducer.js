import { createReducer } from "reduxsauce";
import uniqBy from "lodash/uniqBy";
import { Types } from "./actions";
import { getWorkoutsByDay } from "./selectors";

// mocks data
import { WORKOUTS } from "__mocks__";

const INITIAL_STATE = {
  data: WORKOUTS,
};

// handle update store when move workout
const moveWorkout = (
  state,
  {
    source: { droppableId: sourceDroppableId, index: sourceIndex },
    destination: {
      droppableId: destinationDroppableId,
      index: destinationIndex,
    },
  }
) => {
  // get all workouts of destination day
  const destinationWorkouts = getWorkoutsByDay(state, destinationDroppableId);

  // handle drag drop workout in a day
  if (sourceDroppableId === destinationDroppableId) {
    // identify target workout moved
    const targetWorkout = destinationWorkouts[sourceIndex];

    // remove workout at source position
    destinationWorkouts.splice(sourceIndex, 1);

    // insert workout to destination position
    destinationWorkouts.splice(destinationIndex, 0, targetWorkout);

    // handle drag drop workout from a day to difference days
  } else {
    const sourceWorkouts = getWorkoutsByDay(state, sourceDroppableId);

    // identify target workout and update day to destination day
    const targetWorkout = {
      ...sourceWorkouts[sourceIndex],
      day: destinationDroppableId,
    };

    // insert workout to destination workout
    destinationWorkouts.splice(destinationIndex, 0, targetWorkout);
  }

  return {
    data: uniqBy([...destinationWorkouts, ...state.data], "id"),
  };
};

const actionHandles = {
  [Types.MOVE_WORKOUT]: moveWorkout,
};

export default createReducer(INITIAL_STATE, actionHandles);
