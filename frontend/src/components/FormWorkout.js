import React, { useState, useEffect } from "react";
import ExerciseForm from "./ExerciseForm";
import { FiPlus, FiSend } from "react-icons/fi";

const FormWorkout = () => {
  // Load saved workout data from localStorage on component mount
  const savedWorkout = JSON.parse(localStorage.getItem("savedWorkout")) || {
    exercises: [],
  };

  const [exercises, setExercises] = useState(savedWorkout.exercises);

  useEffect(() => {
    // Save workout data to localStorage whenever exercises change
    localStorage.setItem("savedWorkout", JSON.stringify({ exercises }));
  }, [exercises]);

  const addExercise = () => {
    setExercises([...exercises, { id: exercises.length + 1 }]);
  };

  return (
    <div className="w-full p-4 bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between py-2 ">
        <h2 className="text-lg font-bold ">Workout Details</h2>
        <div className="flex items-center gap-2 bg-[#312E7F] p-2 rounded-md justify-center">
          <FiSend
            style={{ fontSize: "16px", color: "#FFFFFF" }}
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
