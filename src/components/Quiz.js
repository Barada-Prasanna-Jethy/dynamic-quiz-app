import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextQuestion, updateScore } from "../redux/actions/quizActions";
import Timer from "./Timer";
import Result from "./Result";
import Question from "./Question";

const Quiz = ({ setStartQuiz }) => {
  const dispatch = useDispatch();
  const { currentQuestion, questions } = useSelector((state) => state);
  const [quizInProgress, setQuizInProgress] = useState(true);

  const handleAnswer = (choice) => {
    dispatch(updateScore(choice));
    dispatch(nextQuestion());
  };

  useEffect(() => {
    if (currentQuestion >= questions.length) setQuizInProgress(false);
  }, [currentQuestion, questions.length, setQuizInProgress]);

  return (
    <div>
      <div className="quizHeader">
        {currentQuestion < questions.length ? (
          <div className="quizProgress">
            <div>Question: </div>
            <div className="progress">{`${currentQuestion + 1}/`}</div>
            <div>{`${questions.length}`}</div>
          </div>
        ) : null}
        <Timer quizInProgress={quizInProgress} />
      </div>
      {currentQuestion < questions.length ? (
        <>
          <Question
            question={questions[currentQuestion].question}
            choices={questions[currentQuestion].choices}
            type={questions[currentQuestion].type}
            handleAnswer={handleAnswer}
          />
        </>
      ) : (
        <Result totalQuestions={questions.length} setStartQuiz={setStartQuiz} />
      )}
    </div>
  );
};

export default Quiz;
