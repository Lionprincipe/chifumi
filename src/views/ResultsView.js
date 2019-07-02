import React from 'react'
import Players from '../components/Players/Players'
import Scores from '../components/Scores'

const ResultsView = ({ players, onRestart }) => {
  const { names, scores } =
    (players &&
      players.reduce(
        ({ scores, names }, { score, name }) => ({
          scores: [...scores, score],
          names: [...names, name],
        }),
        { scores: [], names: [] }
      )) ||
    []
  return (
    <React.Fragment>
      <h1>Chifumi</h1>
      <h3>Results after 100 runs</h3>

      <Players names={names} />
      <Scores scores={scores} />
      <button onClick={onRestart}>Run Again</button>
    </React.Fragment>
  )
}

export default ResultsView
