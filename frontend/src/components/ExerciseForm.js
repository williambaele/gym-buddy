import React, { useEffect, useState } from "react";
import SetForm from "./SetForm";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

const muscleGroups = ["Chest", "Shoulder", "Arms", "Legs", "Back"];
const exercisesByMuscleGroup = {
  Chest: ["Bench Press", "Incline Press", "Flyes"],
  Shoulder: ["Shoulder Press", "Lateral Raises", "Front Raises"],
  Arms: ["Bicep Curls", "Tricep Dips", "Hammer Curls"],
  Legs: ["Squats", "Lunges", "Leg Press"],
  Back: ["Deadlifts", "Lat Pulldowns", "Rows"],
};

const ExerciseForm = ({ exerciseId, onSave }) => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState("");
  const [selectedExercise, setSelectedExercise] = useState("");
  const [sets, setSets] = useState([]);

  useEffect(() => {
    // Load saved exercise data when available
    const savedExercise = JSON.parse(localStorage.getItem("workout")) || {};
    const exerciseData = savedExercise.exercises
      ? savedExercise.exercises[exerciseId - 1]
      : null;

    if (exerciseData) {
      setSelectedMuscleGroup(exerciseData.muscleGroup || "");
      setSelectedExercise(exerciseData.exercise || "");
      setSets(exerciseData.sets || []);
    }
  }, [exerciseId]);

  const handleMuscleGroupChange = (e) => {
    setSelectedMuscleGroup(e.target.value);
    setSelectedExercise("");
  };

  const handleAddSet = () => {
    setSets((prevSets) => {
      const newSet = { id: prevSets.length + 1 };
      return [...prevSets, newSet];
    });
  };

  const handleSave = () => {
    const exerciseData = {
      id: exerciseId,
      muscleGroup: selectedMuscleGroup,
      exercise: selectedExercise,
      sets: sets,
    };

    // Retrieve the current workout data or initialize an empty array
    const savedExercise = JSON.parse(localStorage.getItem("workout")) || {
      exercises: [],
    };

    // Update the exercise data in the workout array
    savedExercise.exercises[exerciseId - 1] = exerciseData;

    // Save the updated workout data in local storage
    localStorage.setItem("workout", JSON.stringify(savedExercise));
    toast("Exercice saved");

    // Trigger onSave callback if provided
    if (onSave) {
      onSave(savedExercise);
    }
  };

  const [exerciseVisibility, setExerciseVisibility] = useState(true);

  const handleSetChange = (setId, property, value) => {
    // Update the state or perform any necessary action
    // For example, update the sets array in state

    setSets((prevSets) =>
      prevSets.map((set) =>
        set.id === setId ? { ...set, [property]: value } : set
      )
    );
  };

  return (
    <div className="mb-4">
      <div className="w-full flex items-center justify-between bg-gray-100 rounded-md px-1 py-2 mb-4">
        <h3 className="text-md font-semibold">Exercise {exerciseId}</h3>
        {exerciseVisibility === true ? (
          <FiArrowUp
            onClick={() => setExerciseVisibility(!exerciseVisibility)}
          />
        ) : (
          <FiArrowDown
            onClick={() => setExerciseVisibility(!exerciseVisibility)}
          />
        )}
      </div>
      <div
        className={`items-center mb-2 w-full grid grid-cols-3 gap-2 ${
          exerciseVisibility === true ? "" : "hidden"
        }`}
      >
        <label>Muscle group:</label>
        <select
          value={selectedMuscleGroup}
          onChange={handleMuscleGroupChange}
          className="border px-2 py-1 rounded-md bg-gray-100 w-full col-span-2"
        >
          {muscleGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>
      {selectedMuscleGroup && (
        <div
          className={`items-center mb-2 w-full grid grid-cols-3 gap-2 ${
            exerciseVisibility === true ? "" : "hidden"
          }`}
        >
          <label className="mr-2">Exercise:</label>
          <select
            value={selectedExercise}
            onChange={(e) => setSelectedExercise(e.target.value)}
            className="border px-2 py-1 rounded-md bg-gray-100 w-full col-span-2"
          >
            {(exercisesByMuscleGroup[selectedMuscleGroup] || []).map(
              (exercise) => (
                <option key={exercise} value={exercise}>
                  {exercise}
                </option>
              )
            )}
          </select>
        </div>
      )}
      <div className={`${exerciseVisibility === true ? "" : "hidden"}`}>
        {sets &&
          sets.map((set, index) => (
            <SetForm
              key={index + 1}
              setId={index + 1}
              repetitions={set.repetitions} // Pass repetitions and weight as props
              weight={set.weight}
              onSetChange={handleSetChange} // Pass the function to handle set changes
            />
          ))}
        <div className="flex gap-2">
          {selectedMuscleGroup && selectedExercise && (
            <button
              onClick={handleAddSet}
              className="bg-[#312E7F] text-white px-3 py-1 rounded-md mt-2"
            >
              <FiPlus />
            </button>
          )}
          {selectedMuscleGroup && selectedExercise && (
            <button
              onClick={handleSave}
              className="bg-[#312E7F] text-white px-3 py-1 rounded-md mt-2"
            >
              <FiSave />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseForm;
