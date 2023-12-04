import React, { useState, useEffect, useContext } from "react";
import ExerciseForm from "./ExerciseForm";
import { FiPlus, FiSave } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import axios from "axios";
import { WorkoutContext } from "../context/WorkoutContext";

const FormWorkout = ({ formVisibility, setFormVisibility }) => {
  const { dispatch } = useContext(WorkoutContext);
  const apiUrl = "/api/workouts";

  // Load saved workout data from localStorage on component mount
  const savedWorkout = JSON.parse(localStorage.getItem("savedWorkout")) || {
    exercises: [],
  };
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // Save workout data to localStorage whenever exercises change
    localStorage.setItem("savedWorkout", JSON.stringify({ exercises }));
  }, [exercises]);

  const addExercise = () => {
    setExercises([...exercises, { id: exercises.length + 1 }]);
  };

  //DELETE LOCAL STORAGE
  const savedWorkoutKey = "savedWorkout";
  const savedWorkoutKey2 = "workout";

  const deleteWorkout = () => {
    // Delete the saved workout from localStorage
    localStorage.removeItem(savedWorkoutKey);
    localStorage.removeItem(savedWorkoutKey2);
    // Set formVisibility to false
    setFormVisibility(false);
    toast.success("Workout deleted");
  };

  // SAVE TO DATABASE
  const saveToDatabase = async () => {
    try {
      // Make a POST request to your backend API endpoint to save the workout data
      const response = await axios.post(apiUrl, { exercises });

      // Dispatch the CREATE_WORKOUT action to update the context state
      dispatch({ type: "CREATE_WORKOUT", payload: response.data });

      // Optionally, handle the response from the backend
      console.log("Response from backend:", response.data);

      // Notify the user
      toast.success("Workout saved to the database");
    } catch (error) {
      console.error("Error saving workout to the database:", error.message);
      toast.error("Error saving workout to the database");
    }
  };

  return (
    <div className="w-full p-4 bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between py-2 ">
        <h2 className="text-lg font-bold ">Workout Details</h2>
        <div className="flex items-center justify-between gap-2 p-2 rounded-md">
          <FiTrash2
            style={{ fontSize: "16px", color: "#FF0000" }}
            className="cursor-pointer"
            onClick={deleteWorkout}
          />

          <FiSave
            onClick={saveToDatabase}
            style={{ fontSize: "16px", color: "#312E7F" }}
            className="cursor-pointer"
          />
        </div>
      </div>
      {exercises.map((exercise) => (
        <ExerciseForm
          key={exercise.id}
          exerciseId={exercise.id}
          savedExercise={exercise}
        />
      ))}
      <button
        onClick={addExercise}
        className="bg-[#312E7F] text-white px-4 py-1 rounded-md mt-2 flex gap-2 items-center text-sm"
      >
        <FiPlus style={{ fontSize: "14px" }} /> Exercise
      </button>
    </div>
  );
};

export default FormWorkout;
