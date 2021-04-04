import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    moveWorkout: ["source", "destination"],
  },
  {}
);
