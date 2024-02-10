import React, { useState } from "react";

const Question = ({ question, choices, handleAnswer, type }) => {
  const [currentAnswer, setCurrentAnswer] = useState("");
  return (
    <div>
      <h2>Q: {question}</h2>
      {type === "MCQ" ? (
        <ul className="choicesContainer">
          {choices.map((choice, index) => (
            <li
              className={`choice ${choice === currentAnswer ? "active" : ""}`}
              key={index}
              onClick={() => setCurrentAnswer(choice)}
            >
              {choice}
            </li>
          ))}
        </ul>
      ) : (
        <div className="choicesContainer">
          <input
            className="answerInput"
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
          />
        </div>
      )}
      <div
        className={`button nextButton ${currentAnswer ? "" : "disabled"}`}
        onClick={{() => {
          if (currentAnswer) {
            handleAnswer(currentAnswer);
            setCurrentAnswer("");
          }
        }}}
      >
        Next
      </div>
    </div>
  );
};

export default Question;
