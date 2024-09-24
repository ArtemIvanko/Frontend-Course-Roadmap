import React, { useState, useMemo } from "react";

export const SquareCalculator = () => {
  const [number, setNumber] = useState(0);

  const squaredNumber = useMemo(() => {
    console.log("Calculating..");
    return number * number;
  }, [number]);

  return (
    <div>
      <h1>Square Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(Number(event.target.value))}
        placeholder="Enter a number"
      />
      <p>The square of {number} is {squaredNumber}</p>
    </div>
  );
};
