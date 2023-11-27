import React, { useState } from "react";

const SetForm = ({ setId }) => {
  const [repetitions, setRepetitions] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <div className="grid grid-cols-4 mb-2 gap-2">
      <p className="col-span-1">Set {setId}:</p>
      <div className="grid grid-cols-2 gap-1 col-span-3">
        <input
          type="text"
          placeholder="Repetitions"
          value={repetitions}
          onChange={(e) => setRepetitions(e.target.value)}
          className="border pl-2 py-1 rounded-md"
        />
        <input
          type="text"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border pl-2 py-1 rounded-md"
        />
      </div>
    </div>
  );
};

export default SetForm;
