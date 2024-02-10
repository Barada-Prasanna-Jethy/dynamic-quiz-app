import React, { useState } from "react";
import { Provider } from "react-redux";
import Quiz from "./components/Quiz";
import WelcomeScreen from "./components/WelcomeScreen";
import store from "./redux/store";
import "./App.scss";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <Provider store={store}>
      <div>
        <div className="header">Dynamic Quiz App</div>
        <div className="App">
          {startQuiz ? (
            <Quiz setStartQuiz={setStartQuiz} />
          ) : (
            <WelcomeScreen setStartQuiz={setStartQuiz} />
          )}
        </div>
      </div>
    </Provider>
  );
}

export default App;
