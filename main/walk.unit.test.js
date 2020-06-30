import Walk from './walk'

let walk

beforeEach(() => {
  walk = new Walk()
})
describe('Walk', () => {
  it('Returns false', () => {
    expect(walk.isTenMinuteWalk()).toEqual(false)
  })
})



