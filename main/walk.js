export default class Walk {

  isTenMinuteWalk(walk) {
    if (walk.length < 10) {
      return false
    }
    if (walk.length === 10) {
      return true
    }
  }
}