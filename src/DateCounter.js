import React, { useState } from "react";

export default function DateCounter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  // Steps handlers
  function handlePrevStep() {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  }
  function handleNextStep() {
    setStep((nextStep) => nextStep + 1);
  }

  // Count handlers
  function handlePrevCount() {
    if (count <= 0) {
      setCount(0);
      return;
    }

    setCount(count - 1);
  }
  function handleNextCount() {
    if (step > 1) {
      setCount((nextCount) => nextCount + step);
    } else {
      setCount(count + 1);
    }
  }

  // Function to get future date
  function getFutureDate() {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + count);
    return futureDate.toDateString();
  }

  return (
    <div className="date-counter">
      <h2>Date Counter App</h2>
      <div className="step">
        <button onClick={handlePrevStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div className="count">
        <button onClick={handlePrevCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleNextCount}>+</button>
      </div>
      <p>
        {count} days from today is {getFutureDate()}
      </p>
    </div>
  );
}
