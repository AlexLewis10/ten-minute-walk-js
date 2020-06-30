import Walk from './walk'

let walk

beforeEach(() => {
  walk = new Walk()
})
describe('Walk', () => {
  it('Returns false when given an array with less than 10 items', () => {
    expect(walk.isTenMinuteWalk(['w', 'e'])).toEqual(false)
  })
})



