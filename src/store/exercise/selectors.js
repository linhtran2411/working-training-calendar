// get all exercises of workout
export const getExercisesByWorkout = (exerciseState, workoutId) =>
  exerciseState.data.filter((exercise) => exercise.workoutId === workoutId);

// get last character of when create prev exercise
export const getLastCharacter = (exerciseState) => exerciseState.lastCharacter;
