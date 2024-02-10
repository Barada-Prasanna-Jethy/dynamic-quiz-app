import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetTest } from "../redux/actions/quizActions";

const Result = ({ setStartQuiz, totalQuestions }) => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);
  const timeTaken = useSelector((state) => state.timeTaken);
  const onReset = () => {
    dispatch(resetTest());
    setStartQuiz(false);
  };

  return (
    <div>
      <div className="welcomeText">Quiz Completed!</div>
      <div className="resultItem">
        <div>Your score:</div>
        <div className="result">{score}</div>
      </div>
      <div className="resultItem">
        <div>Time taken:</div>
        <div className="result">{timeTaken} seconds</div>
      </div>
      <div className="resultItem">
        <div>Wrong Answers:</div>
        <div className="wrongResult">{totalQuestions - score}</div>
      </div>

      <div className="startButton button" onClick={() => onReset()}>
        Retake
      </div>
    </div>
  );
};

export default Result;
