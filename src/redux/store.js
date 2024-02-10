import { legacy_createStore as createStore } from "redux";
import quizReducer from "./reducers/quizReducer";

const store = createStore(
  quizReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
