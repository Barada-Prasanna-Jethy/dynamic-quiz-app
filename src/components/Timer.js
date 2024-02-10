import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTime } from "../redux/actions/quizActions";

const Timer = ({ quizInProgress }) => {
  const [seconds, setSeconds] = useState(0);
  const interval = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    interval.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if (!quizInProgress) {
      clearInterval(interval.current);
      dispatch(updateTime(seconds));
    }
  }, [quizInProgress, dispatch, seconds]);

  return (
    <div className={`${quizInProgress ? "" : "displayNone"}`}>
      Timer: {seconds} seconds
    </div>
  );
};

export default Timer;
