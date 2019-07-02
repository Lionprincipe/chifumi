export default class Chifumi2 {
  constructor(players) {
    this.nbPlayers = 2
    this.setPlayersNames(players)
    console.log(this.players)
    this.presetChoices = [
      { name: 'scissors', beats: ['paper', 'lizard'] },
      { name: 'rock', beats: ['scissors', 'lizard'] },
      { name: 'paper', beats: ['rock', 'spock'] },
      { name: 'lizard', beats: ['spock', 'paper'] },
      { name: 'spock', beats: ['scissors', 'rock'] },
    ]
  }

  setPlayersNames = names => {
    names && this.setPlayersAttibuts('name', names)
  }

  setPlayersChoices = choices => {
    choices && this.setPlayersAttibuts('choice', choices)
  }

  setPlayersAttibuts = (attributName, attributsList) => {
    console.log(this.players)
    try {
      console.log(this.players && this.players[0], 'debut de try')
      this.players =
        attributsList.length === this.nbPlayers
          ? [...Array(this.nbPlayers)].map((_, index) => ({
              ...(this.players && this.players[index]),
              [attributName]: attributsList[index],
            }))
          : this.players
      console.log(this.players, 'end try')
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

  getSetOfChoices = () => {
    return [...new Set([...this.presetChoices.map(({ name }) => name)])]
  }

  checkForWinner(player1, player2) {
    const index = this.presetChoices.findIndex(
      ({ name }) => name === player1.choice
    )
    return (
      this.presetChoices[index].beats.some(el => el === player2.choise) &&
      player1
    )
  }
}
