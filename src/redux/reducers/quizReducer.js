import quizData from "../../data/quizData";
const initialState = {
  currentQuestion: 0,
  questions: quizData,
  score: 0,
  timeTaken: 0,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };

    case "UPDATE_SCORE":
      const currentAnswer = action.payload;
      const correctAnswer = state.questions[state.currentQuestion].answer;
      const score =
        currentAnswer === correctAnswer ? state.score + 1 : state.score;
      return {
        ...state,
        score,
      };

    case "UPDATE_TIME":
      return { ...state, timeTaken: action.payload };

    case "RESET_TEST":
      return { ...initialState };

    default:
      return state;
  }
};

export default quizReducer;
