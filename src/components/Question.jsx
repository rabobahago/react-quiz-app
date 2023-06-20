import React from "react";
import Options from "./Options";
export default function Question({ quest, answer, dispatch }) {
  console.log(answer);
  return (
    <div>
      <h4>{quest.question}</h4>
      <Options quest={quest} answer={answer} dispatch={dispatch} />
    </div>
  );
}
