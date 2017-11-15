export default class {
  constructor (arrStates) {
    this.arrStates = []
    this.idxNextState = 0
  }

  addState (strKey, objArguments) {
    this.arrState.push({key: strKey, arguments: objArguments})
  }

  getNextState () {
    try {
      return this.arrStates[this.idxNextState++]
    } catch (e) {
      return e
    }
  }

  nextStateIsFinal () {
    return !((this.arrStates.length - 1) - this.idxNextState > 0)
  }
}
