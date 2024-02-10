export const nextQuestion = () => ({
  type: "NEXT_QUESTION",
});

export const updateScore = (choice) => ({
  type: "UPDATE_SCORE",
  payload: choice,
});

export const updateTime = (time) => ({
  type: "UPDATE_TIME",
  payload: time,
});

export const resetTest = () => ({ type: "RESET_TEST" });
