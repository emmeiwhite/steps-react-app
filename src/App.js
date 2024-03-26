import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    setStep((prev) => {
      if (prev === 1) {
        return 1;
      } else {
        return prev - 1;
      }
    });
  }

  function handleNext() {
    setStep((next) => {
      if (next === 3) {
        return 3;
      } else {
        return next + 1;
      }
    });
  }

  function handleBtnClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button
        className="close"
        onClick={handleBtnClick}
      >
        &times;
      </button>

      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 && "active"}`}>1</div>
            <div className={`${step >= 2 && "active"}`}>2</div>
            <div className={`${step >= 3 && "active"}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button onClick={handlePrev}>previous</button>
            <button onClick={handleNext}>next</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
