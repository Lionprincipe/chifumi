import React, { Component } from 'react'
import data from './data.json'
import './App.css'
import ResultsView from './views/ResultsView'
import GameBot from './GameBot/GameBot'

export default class Game extends Component {
  state = {
    players: [],
    choices: [],
    iteration: 0,
    game: {},
  }
  componentWillMount() {
    data &&
      this.setState(
        {
          ...data,
        },
        this.handleRestart
      )
  }

  handleRestart = () => {
    const { players, iteration, choices } = this.state
    console.log('before it', players, iteration, choices)
    const game = new GameBot(players, iteration, choices)
    this.setState({ game })
  }
  render() {
    const { results } = this.state.game
    console.log(results, 'results')
    return (
      <div className="App">
        <ResultsView onRestart={this.handleRestart} players={results} />
      </div>
    )
  }
}
