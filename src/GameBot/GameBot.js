import Chifumi from '../Chifumi/Chifumi'
import { getRandomInt } from '../utils'

export default class GameBot {
  constructor(players, nbItteration = 0) {
    this.players = players
    const names = this.players.map(({ name }) => name)
    this.game = new Chifumi(names, ['rock', 'paper', 'scissor'])
    this.nbItteration = nbItteration
    this.results = []
    this.runAllRounds()
    this.resultsParser()
  }

  runAllRounds = () => {
    console.log(this.nbItteration, ' tu me saoule')
    this.nbItteration > 0 &&
      [...Array(this.nbItteration)].forEach(this.runOneRound)
  }

  runOneRound = () => {
    const choices = this.getPlayersChoices()
    console.log(choices)
    // choices && this.game.setPlayersChoices(choices)
    //  const roundResult = this.game.getResult()
    //  this.results = roundResult ? [...this.results, roundResult] : this.results
  }

  resultsParser = () => {
    this.results = this.results.reduce((acc, { winner: { name } }) => {
      const index = acc.findIndex(({ name: accName }) => accName === name)
      console.log(index)
      return (acc =
        index > -1
          ? [
              ...acc.slice(0, index),
              { name, score: acc[index].score + 1 },
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
      console.log(choices, 'ca c4est pas des choix')
      return choices.findIndex(item => item === value)
    } else if (type === 'random') {
      return getRandomInt(0, choices.length)
    }
  }
  /*
   */
}
