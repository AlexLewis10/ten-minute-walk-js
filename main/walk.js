export default class Walk {

  isTenMinuteWalk(walk) {
    if (walk.length != 10) {
      return false
    }
    if (this.returnsToStart(walk) === false) {
      return false
    }
    return true
  }

  returnsToStart(walk) {
    let east = 0
    let west = 0
    let north = 0
    let south = 0
    for(let i = 0; i < walk.length; i++) {
      if (walk[i] === 'w') {
        west += 1
      }
      if (walk[i] === 'e') {
        east += 1
      }
      if (walk[i] === 'n') {
        north += 1
      }
      if (walk[i] === 's') {
        south += 1
      }
    }
    if (east != west || north != south) {
      return false
    }
    return true
  }
}