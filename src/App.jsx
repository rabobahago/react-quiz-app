import { useEffect, useReducer } from "react";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Loader from "./Loader.jsx";
import StartScreen from "./StartScreen.jsx";
import Question from "./Question.jsx";
const initialState = {
  questions: [],
  //loading, error, ready, finished
  status: "loading",
  index: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    default:
      throw new Error("Action unknown");
  }
}
const App = () => {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  let numQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="App">
      <Header />
      <Home className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question quest={questions[index]} />}
      </Home>
    </div>
  );
};
export default App;
