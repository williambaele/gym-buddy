import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import FormWorkout from "../components/FormWorkout";

const Workout = () => {
  const [formVisibility, setFromVisibility] = useState(false);
  return (
    <div className="h-full space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Start a workout</h1>
        <div
          className="flex justify-center items-center bg-[#312E7F] px-4 py-1 rounded-md"
          onClick={() => setFromVisibility(!formVisibility)}
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
