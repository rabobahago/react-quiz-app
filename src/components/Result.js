import React from 'react'
const Result = ({ score, playAgain }) => {
  return (
    <div className="score-card">
      <div className="score">you scored {score} / correct answers!</div>
      <div className="playBtn" onClick={playAgain}>
        Play again!
      </div>
    </div>
  )
}
export default Result
