import { useEffect, useReducer } from "react";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Loader from "./Loader.jsx";
const initialState = {
  questions: [],
  //loading, error, ready, finished
  status: "loading",
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
    default:
      throw new Error("Action unknown");
  }
}
const App = () => {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
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
        <p>1/16</p>
        <p>Question?</p>
      </Home>
    </div>
  );
};
export default App;
