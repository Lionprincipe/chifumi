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

  getResult = () => ({
    players: this.players,
    winner: { ...this.getWinner() },
  })

  getWinner = () => {
    const result = this.resultsMatrix[this.players[0].choice][
      this.players[1].choice
    ]

    switch (result) {
      case this.players[0].choice:
        return this.players[0]
      case this.players[1].choice:
        return this.players[1]
      default:
        return {}
    }
  }

  setSetOfChoices = choices => {
    this.choices = [...new Set(choices)]
  }

  getChoices = () => {
    return this.choices
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
}
