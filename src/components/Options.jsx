import React from "react";
import Question from "./Question";

export default function Options({ answer, quest, dispatch }) {
  let hasAnswered = answer !== null;
  return (
    <div className="options">
      {quest.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === quest.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
