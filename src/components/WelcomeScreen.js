import React from "react";

export default function WelcomeScreen({ setStartQuiz }) {
  return (
    <div>
      <div className="welcomeText">Welcome to Quiz App!</div>
      <div>
        <h3>Instructions:</h3>
        <ul>
          <li>Read each question carefully.</li>
          <li>Select the answer you believe is correct.</li>
          <li>
            Question type may be multiple choice, true/false, explanatory.
          </li>
          <li>
            Once you've answered all the questions, submit your responses to see
            your score and time
          </li>
        </ul>
      </div>
      <div className="startButton button" onClick={() => setStartQuiz(true)}>
        Start
      </div>
    </div>
  );
}
