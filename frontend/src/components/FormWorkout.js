import React, { useState, useEffect, useContext } from "react";
import ExerciseForm from "./ExerciseForm";
import { FiPlus, FiSave, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import axios from "axios";
import { WorkoutContext } from "../context/WorkoutContext";

const FormWorkout = ({ formVisibility, setFormVisibility }) => {
  //VARIABLES
  const { dispatch } = useContext(WorkoutContext);
  const savedWorkoutKey = "savedWorkout";
  const savedWorkoutKey2 = "workout";
  const apiUrl = "/api/workouts";
  const [exercises, setExercises] = useState([]);

  //LOAD SAVED WORKOUT IF PAGE GOES OFF
  useEffect(() => {
    const savedWorkout = JSON.parse(localStorage.getItem(savedWorkoutKey)) || {
      exercises: [],
    };
    setExercises(savedWorkout.exercises);
  }, []);

  //DELETE WORKOUT
  const deleteWorkout = () => {
    localStorage.removeItem(savedWorkoutKey);
    localStorage.removeItem(savedWorkoutKey2);
    // Set formVisibility to false
    setFormVisibility(false);
    toast.success("Workout deleted");
  };

  //SAVE TO DATABSE ONCLICK
  const saveToDatabase = async () => {
    try {
      // Ensure there are exercises to save
      if (exercises.length === 0) {
        toast.error("Please add exercises before saving to the database");
        return;
      }

      // Make a POST request to your backend API endpoint to save the workout data
      const response = await axios.post(apiUrl, { savedExercises });

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

  //ADD EXERCICE
  const addExercise = () => {
    setExercises([...exercises, { id: exercises.length + 1 }]);
  };

  //GET THE SAVED DATA FROM CHILD
  const [savedExercises, setSavedExercises] = useState([]);

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
            style={{ fontSize: "16px", color: "#312E7F" }}
            className="cursor-pointer"
            onClick={saveToDatabase}
          />
        </div>
      </div>
      {exercises.map((exercise, index) => (
        <ExerciseForm
          key={index}
          exerciseId={index + 1}
          onSave={(savedExercise) => {
            console.log("Saved Exercise:", savedExercise);
            // Update the state with the saved exercise
            setSavedExercises((prevExercises) => [
              ...prevExercises,
              savedExercise,
            ]);
          }}
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
