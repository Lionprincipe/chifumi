import React from 'react'

const Scores = ({ scores }) => {
  const scoresEl =
    scores && scores.map((score, index) => <div key={index}>{score}</div>)
  return <section>{scoresEl}</section>
}

export default Scores
