export default class Walk {

  isTenMinuteWalk(walk) {
    if (walk.length != 10) {
      return false
    }
    return (this._returnsToStart(walk))
  }

  _returnsToStart(walk) {
    let east = 0; let west = 0; let north = 0; let south = 0
    for(let i = 0; i < walk.length; i++) {
      if (walk[i] === 'w') {
        west += 1
      } else if (walk[i] === 'e') {
        east += 1
      } else if (walk[i] === 'n') {
        north += 1
      } else {
        south += 1
      }
    }
    if (east != west || north != south) {
      return false
    }
    return true
  }
}