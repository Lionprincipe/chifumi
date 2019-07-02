export class Player {
  constructor(name) {
    this.name = name
    this.play = null
  }
  setAttribut(name, value) {
    this[name] = value
  }
}
