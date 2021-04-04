// get all workouts of day
export const getWorkoutsByDay = (workoutState, day) =>
  workoutState.data.filter((workout) => workout.day === day);
