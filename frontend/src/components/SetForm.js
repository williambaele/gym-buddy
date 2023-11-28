import React from "react";

const SetForm = ({ setId, repetitions, weight, onSetChange }) => {
  return (
    <div className="grid grid-cols-4 mb-2 gap-2">
      <p className="col-span-1">Set {setId}:</p>
      <div className="grid grid-cols-2 gap-1 col-span-3">
        <input
          type="text"
          placeholder="Repetitions"
          value={repetitions}
          onChange={(e) => onSetChange(setId, "repetitions", e.target.value)}
          className="border pl-2 py-1 rounded-md"
        />

        <input
          type="text"
          placeholder="Weight"
          value={weight}
          onChange={(e) => onSetChange(setId, "weight", e.target.value)}
          className="border pl-2 py-1 rounded-md"
        />
      </div>
    </div>
  );
};

export default SetForm;
