export default class Chifumi {
  constructor(firstPlayer, secondPlayer) {
    this.firstPlayer = { name: firstPlayer, currentChoise: '' }
    this.secondPlayer = { name: secondPlayer, currentChoise: '' }
    this.presetPlays = [
      { name: 'scissors', beats: ['paper', 'lizard'] },
      { name: 'rock', beats: ['scissors', 'lizard'] },
      { name: 'paper', beats: ['rock', 'spock'] },
      { name: 'lizard', beats: ['spock', 'paper'] },
      { name: 'spock', beats: ['scissors', 'rock'] },
    ]
  }

  getResult = () => ({
    firstplayer: this.firstPlayer,
    secondPlayer: this.secondPlayer,
    winner: { ...this.getWinner() },
  })

  getWinner() {
    return (
      this.checkForTied() ||
      this.checkForWinner(this.firstPlayer, this.secondPlayer) ||
      this.firstPlayer
    )
  }

  getPlayChoises() {
    return [...new Set([...this.presetPlays.map(({ name }) => name)])]
  }

  setPlayers(firstPlayer, secondPlayer) {
    this.firstPlayer = { name: firstPlayer, currentChoise: '' }
    this.secondPlayer = { name: secondPlayer, currentChoise: '' }
  }

  setCurrentChoices(firstPlayerSelection, secondPlayerSelection) {
    this.firstPlayer = {
      ...this.firstPlayer,
      currentChoise: firstPlayerSelection,
    }
    this.secondPlayer = {
      ...this.secondPlayer,
      currentChoise: secondPlayerSelection,
    }
  }

  checkForTied() {
    return this.firstPlayer.currentChoise === this.secondPlayer.currentChoise
  }

  checkForWinner(player1, player2) {
    const index = this.presetPlays.findIndex(
      ({ name }) => name === player1.currentChoise
    )
    return (
      this.presetPlays[index].beats.some(el => el === player2.currentChoise) &&
      player1
    )
  }
}
