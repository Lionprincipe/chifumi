import matrixCreator from './matrixCreator'
export default class Chifumi {
  constructor(players, choices) {
    this.nbPlayers = 2 // max players
    this.setSetOfChoices(choices)
    this.setPlayersNames(players)
    this.resultsMatrix = matrixCreator(choices.length)
  }

  setPlayersNames = names => {
    names && this.setPlayersAttibuts('name', names)
  }

  setPlayersChoices = choices => {
    choices && this.setPlayersAttibuts('choice', choices)
  }

  setPlayersAttibuts = (attributName, attributsList) => {
    try {
      this.players =
        attributsList.length === this.nbPlayers
          ? [...Array(this.nbPlayers)].map((_, index) => ({
              ...(this.players && this.players[index]),
              [attributName]: attributsList[index],
            }))
          : this.players
    } catch (err) {
      console.log(err.message)
    }
  }

  getResult = () => ({
    players: this.players,
    winner: { ...this.getWinner() },
  })

  checkForTied = () => {
    return this.players[0].choice === this.players[1].choice
  }

  getWinner = () => {
    return (
      this.checkForTied() ||
      this.checkForWinner(this.players[0], this.players[1]) ||
      this.players[0]
    )
  }

  setSetOfChoices = choices => {
    this.choices = choices && [...new Set([...choices.map(({ name }) => name)])]
  }

  getChoices = () => {
    return this.choices
  }

  checkForWinner(player1, player2) {
    const index = this.resultsMatrix.findIndex(
      ({ name }) => name === player1.choice
    )
    return (
      this.presetChoices[index].beats.some(el => el === player2.choise) &&
      player1
    )
  }
}
