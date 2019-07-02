import React, { Component } from 'react'

import './App.css'
import ResultsView from './views/ResultsView'
import GameBot from './GameBot/GameBot'

const players = [
  { name: 'A', strategy: { type: 'random' } },
  { name: 'B', strategy: { type: 'static', value: 'paper' } },
]

export default class Game extends Component {
  state = {
    players: players || [],
    game: new GameBot(players, 10),
  }

  render() {
    const { results } = this.state.game
    return (
      <div className="App">
        <ResultsView players={results} />
      </div>
    )
  }
}
