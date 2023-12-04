import React, { useState, useEffect, useContext } from "react";
import ExerciseForm from "./ExerciseForm";
import { FiPlus, FiSave, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import axios from "axios";
import { WorkoutContext } from "../context/WorkoutContext";

const FormWorkout = ({ formVisibility, setFormVisibility, user }) => {
  const userId = user._id;
  // VARIABLES
  const { dispatch } = useContext(WorkoutContext);
  const savedWorkoutKey = "savedWorkout";
  const savedWorkoutKey2 = "workout";
  const apiUrl = "/api/workouts";
  const [exercises, setExercises] = useState([]);

  // LOAD SAVED WORKOUT IF PAGE GOES OFF
  useEffect(() => {
    const savedWorkout = JSON.parse(localStorage.getItem("workout")) || {
      exercises: [],
    };
    setExercises(savedWorkout.exercises);
  }, []);

  // DELETE WORKOUT
  const deleteWorkout = () => {
    localStorage.removeItem(savedWorkoutKey);
    localStorage.removeItem(savedWorkoutKey2);
    // Set formVisibility to false
    setFormVisibility(false);
    toast.success("Workout deleted");
  };

  // SAVE TO DATABASE ONCLICK
  console.log(exercises);
  const saveToDatabase = async () => {
    try {
      // Ensure there are exercises to save
      if (exercises.length === 0) {
        toast.error("Please add exercises before saving to the database");
        return;
      }

      // Transform the exercises structure to match the backend model
      const transformedExercises = exercises.map((exercise) => ({
        id: exercise.id,
        muscleGroup: exercise.muscleGroup,
        name: exercise.exercise, // Assuming the exercise name is stored in 'exercise' property
        sets: exercise.sets.map(({ id, repetitions, weight }) => ({
          id,
          repetitions: parseInt(repetitions),
          weight: parseInt(weight),
        })),
      }));

      // Make a POST request to your backend API endpoint to save the workout data
      const response = await axios.post(apiUrl, {
        user_id: userId, // Use user._id for the user
        date: Date.now(), // Use Date.now() for the date
        exercises: transformedExercises,
      });

      if (!response || !response.data) {
        // Handle unexpected response format
        console.error("Unexpected response format:", response);
        toast.error("Error saving workout to the database");
        return;
      }

      // Dispatch the CREATE_WORKOUT action to update the context state
      dispatch({ type: "CREATE_WORKOUT", payload: response.data });

      // Optionally, handle the response from the backend
      console.log("Response from backend:", response.data);

      // Notify the user
      toast.success("Workout saved to the database");
    } catch (error) {
      console.error("Error saving workout to the database:", error.message);
      if (error.response) {
        console.log("Error response from the server:", error.response.data);
      }
      toast.error("Error saving workout to the database");
    }
  };

  // ADD EXERCISE
  const addExercise = () => {
    setExercises([...exercises, { id: exercises.length + 1 }]);
  };

  return (
    <div className="w-full p-4 bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between py-2 ">
        <h2 className="text-lg font-bold ">Workout details</h2>
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
