import Walk from './walk'

let walk

beforeEach(() => {
  walk = new Walk()
})
describe('Walk length', () => {
  it('returns false when given an array with less than 10 items', () => {
    expect(walk.isTenMinuteWalk(['w', 'e'])).toEqual(false)
  })

  it('returns true when given an array with 10 items', () => {
    expect(walk.isTenMinuteWalk(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w'])).toEqual(true)
  })

  it('returns false when given an array with more than 10 items', () => {
    expect(walk.isTenMinuteWalk(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w', 'w'])).toEqual(false)
  })
})



