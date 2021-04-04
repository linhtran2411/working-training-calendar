import { combineReducers } from "redux";

// reducers
import { reducer as workout } from "./workout";
import { reducer as exercise } from "./exercise";

export default combineReducers({
  exercise,
  workout,
});
