export default class Walk {

  isTenMinuteWalk(walk) {
    let east = 0
    let west = 0
    if (walk.length != 10) {
      return false
    }

    for(let i = 0; i < walk.length; i++) {
      if (walk[i] === 'w') {
        west += 1
      }
      if (walk[i] === 'e') {
        east += 1
      }
    }
    if (east != west) {
      return false
    }
    return true
  }
}