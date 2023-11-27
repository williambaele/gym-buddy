import React, { useState } from "react";
import ExerciseForm from "./ExerciseForm";
import { FiPlus } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

const FormWorkout = () => {
  const [exercises, setExercises] = useState([]);

  const addExercise = () => {
    setExercises([...exercises, { id: exercises.length + 1 }]);
  };

  return (
    <div className="w-full bg-white p-4 shadow-sm rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold mb-2">Workout Details</h2>
        <div className="flex gap-2 items-center">
          <FiSave
            style={{ fontSize: "20px", color: "#312E7F" }}
            className="cursor-pointer"
          />
          <FiSend
            style={{ fontSize: "20px", color: "#312E7F" }}
            className="cursor-pointer"
          />
        </div>
      </div>
      {exercises.map((exercise) => (
        <ExerciseForm key={exercise.id} exerciseId={exercise.id} />
      ))}
      <button
        onClick={addExercise}
        className="bg-[#312E7F] text-white px-4 py-2 rounded-md mt-2 flex gap-2 items-center"
      >
        <FiPlus style={{ fontSize: "18px" }} />
        Add Exercise
      </button>
    </div>
  );
};

export default FormWorkout;
