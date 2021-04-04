import { createReducer } from "reduxsauce";
import { Types } from "./actions";

// mock data
import { EXERCISES, LAST_CHARACTER } from "__mocks__";

const INITIAL_STATE = {
  lastCharacter: LAST_CHARACTER,
  data: EXERCISES,
};

// update store for action add new an exercise
const addNewExercise = ({ data }, { exercise }) => ({
  data: [...data, exercise],
  lastCharacter: exercise.name[exercise.name.length - 1],
});

const actionHandles = {
  [Types.ADD_NEW_EXERCISE]: addNewExercise,
};

export default createReducer(INITIAL_STATE, actionHandles);
