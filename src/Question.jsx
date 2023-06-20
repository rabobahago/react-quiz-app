import React from "react";

export default function Question({ quest }) {
  const { question, options } = quest;
  return (
    <div>
      <h4>{question}</h4>
      <div className="options">
        {options.map((option) => (
          <button className="btn btn-option" key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
