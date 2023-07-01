import { useEffect, useReducer } from "react";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Loader from "./Loader.jsx";
import Question from "./Question.jsx";
import StartScreen from "./StartScreen.jsx";
import NextButton from "./NextButton.jsx";
import Progress from "./Progress.jsx";
import FinishScreen from "./FinishScreen.jsx";
import Footer from "./Footer.jsx";
import Timer from "./Timer.jsx";
import { useQuiz } from "../context/QuizContext.jsx";
const App = () => {
  const { status } = useQuiz();
  return (
    <div className="App">
      <Header />
      <Home className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Home>
    </div>
  );
};
export default App;
