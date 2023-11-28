import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import FormWorkout from "../components/FormWorkout";

const Workout = () => {
  const [formVisibility, setFormVisibility] = useState(false);
  useEffect(() => {
    // Check if something is saved in local storage as "workout"
    const savedWorkout = localStorage.getItem("workout");

    if (savedWorkout) {
      setFormVisibility(true);
    }
  }, []);
  return (
    <div className="h-full space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Start a workout</h1>
        <div
          className="flex justify-center items-center bg-[#312E7F] px-4 py-1 rounded-md"
          onClick={() => setFormVisibility(!formVisibility)}
        >
          <FiPlus
            style={{ fontSize: "24px", color: "white" }}
            className="cursor-pointer"
          />
        </div>
      </div>
      {formVisibility ? <FormWorkout /> : null}
    </div>
  );
};

export default Workout;
