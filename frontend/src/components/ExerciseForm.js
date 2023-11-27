import React, { useState } from "react";
import SetForm from "./SetForm";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

const muscleGroups = ["Chest", "Shoulder", "Arms", "Legs", "Back"];
const exercisesByMuscleGroup = {
  Chest: ["Bench Press", "Incline Press", "Flyes"],
  Shoulder: ["Shoulder Press", "Lateral Raises", "Front Raises"],
  Arms: ["Bicep Curls", "Tricep Dips", "Hammer Curls"],
  Legs: ["Squats", "Lunges", "Leg Press"],
  Back: ["Deadlifts", "Lat Pulldowns", "Rows"],
};

const ExerciseForm = ({ exerciseId }) => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState("");
  const [selectedExercise, setSelectedExercise] = useState("");
  const [sets, setSets] = useState([]);

  const handleMuscleGroupChange = (e) => {
    setSelectedMuscleGroup(e.target.value);
    setSelectedExercise("");
  };

  const handleAddSet = () => {
    setSets([...sets, { id: sets.length + 1 }]);
  };

  const [exerciseVisibility, setExerciseVisibility] = useState(true);
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
            {exercisesByMuscleGroup[selectedMuscleGroup].map((exercise) => (
              <option key={exercise} value={exercise}>
                {exercise}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className={`${exerciseVisibility === true ? "" : "hidden"}`}>
        {sets.map((set) => (
          <SetForm key={set.id} setId={set.id} />
        ))}
        {selectedMuscleGroup && selectedExercise && (
          <button
            onClick={handleAddSet}
            className="bg-[#312E7F] text-white px-3 py-1 rounded-md mt-2"
          >
            Add Set
          </button>
        )}
      </div>
    </div>
  );
};

export default ExerciseForm;
