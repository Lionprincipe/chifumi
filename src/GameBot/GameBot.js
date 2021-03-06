import Chifumi from '../Chifumi/Chifumi'
import { getRandomInt } from '../utils'

export default class GameBot {
  constructor(players, iteration = 0, choices) {
    this.players = players
    const names = this.players.map(({ name }) => name)
    this.game = new Chifumi(names, choices)
    this.iteration = iteration
    this.results = []
    this.runAllRounds()
    this.resultsParser()
  }

  runAllRounds = () => {
    this.iteration > 0 && [...Array(this.iteration)].forEach(this.runOneRound)
  }

  runOneRound = () => {
    const choices = this.getPlayersChoices()
    choices && this.game.setPlayersChoices(choices)
    const roundResult = this.game.getResult()
    this.results = roundResult ? [...this.results, roundResult] : this.results
  }

  resultsParser = () => {
    this.results = this.results.reduce((acc, { winner: { name } }) => {
      name = name || 'tie'
      const index = acc.findIndex(({ name: accName }) => accName === name)
      return (acc =
        index > -1
          ? [
              ...acc.slice(0, index),
              { name: name, score: acc[index].score + 1 },
              ...acc.slice(index + 1),
            ]
          : [...acc, { name, score: 1 }])
    }, [])
  }

  getPlayersChoices() {
    return this.players.map(({ name, strategy }) =>
      this.getOnePlayerChoice(strategy, this.game.getChoices())
    )
  }

  getOnePlayerChoice = ({ type, value }, choices) => {
    if (type === 'static') {
      return choices.findIndex(item => item === value)
    } else if (type === 'random') {
      return getRandomInt(0, choices.length)
    }
  }
}
