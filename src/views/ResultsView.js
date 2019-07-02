import React from 'react'
import Players from '../components/Players/Players'
import Scores from '../components/Scores'

const ResultsView = ({ players }) => {
  players = players || []
  const { names, scores } =
    players &&
    players.reduce(
      ({ scores, names }, { score, name }) => ({
        scores: [...scores, score],
        names: [...names, name],
      }),
      { scores: [], names: [] }
    )
  return (
    <React.Fragment>
      <header> Chifumi</header>
      <Players names={names} />
      <Scores scores={scores} />
    </React.Fragment>
  )
}

export default ResultsView
