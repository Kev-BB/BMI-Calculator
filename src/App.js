import React, { useState, useMemo } from "react";
import "./styles.css";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");

  const calculateBMI = (height, weight) => {
    const heightValue = height / 100;
    const bmi = weight / (heightValue * heightValue);
    setBmi(bmi.toFixed(2));
  };

  const memoizedCalculateBMI = useMemo(() => {
    calculateBMI(height, weight);
    return bmi;
  }, [height, weight]);

  return (
    <div className="App">
      <div className="container border border-dark d-flex justify-content-center align-items-center flex-column">
        <h1>BMI Calculator</h1>
        <form>
          <label htmlFor="height">Height (cm)</label>
          <input
            type="range"
            min="40"
            max="200"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            id="height"
          />
          <p>height: {height}cm</p>
          <br />
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="range"
            min="0"
            max="200"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            id="weight"
          />
          <p>weight: {weight}kg</p>
        </form>
        <p>BMI: {memoizedCalculateBMI}</p>
      </div>
    </div>
  );
}

export default App;
