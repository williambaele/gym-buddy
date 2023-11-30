import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

const initialState = {
  workouts: [],
};

export const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        ...state,
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        ...state,
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        ...state,
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    case "UPDATE_WORKOUT":
      return {
        ...state,
        workouts: state.workouts.map((workout) =>
          workout._id === action.payload._id ? action.payload : workout
        ),
      };
    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: [],
  });

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
