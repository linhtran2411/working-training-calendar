import { memo, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

// store
import { Creators } from "store/exercise/actions";

// utilities
import { getNextCharacter, generateId } from "utilities";

// components
import { ReactComponent as AddNewIcon } from "assets/icons/AddNewIcon.svg";

// styles
import styles from "./index.module.css";
import { exerciseSelectors } from "store/exercise";

export const FooterBase = ({ workoutId }) => {
  const dispatch = useDispatch();

  // get last character when create prev exercise
  const lastCharacter = useSelector(
    ({ exercise }) => exerciseSelectors.getLastCharacter(exercise),
    shallowEqual
  );

  // handle add new a exercise
  const handleAddNewExercise = useCallback(() => {
    const nextCharacter = getNextCharacter(lastCharacter);

    // inform to user if the next character is a symbol
    if (nextCharacter > "Z") {
      alert("Please keep this number of exercises for now!");
    } else {
      // create new an exercise
      const exercise = {
        id: generateId(),
        name: `Exercise ${nextCharacter}`,
        setInformation: "50 lb x 5",
        workoutId,
      };

      dispatch(Creators.addNewExercise(exercise));
    }
  }, [workoutId, lastCharacter, dispatch]);

  return (
    <div className={styles.footer}>
      <button className={styles.iconButton} onClick={handleAddNewExercise}>
        <AddNewIcon />
      </button>
    </div>
  );
};

export const Footer = memo(FooterBase);
