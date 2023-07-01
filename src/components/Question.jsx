import React from "react";
import Options from "./Options";
import { useQuiz } from "../context/QuizContext";
export default function Question() {
  const { questions, answer, dispatch, index } = useQuiz();
  let quest = questions[index];
  return (
    <div>
      <h4>{quest.question}</h4>
      <Options quest={quest} answer={answer} dispatch={dispatch} />
    </div>
  );
}
