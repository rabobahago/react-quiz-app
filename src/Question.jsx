import React from "react";

export default function Question({ quest }) {
  return (
    <div>
      <h4>{quest.question}</h4>
      <div className="options">
        {quest.options.map((option) => (
          <button className="btn btn-option" key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
