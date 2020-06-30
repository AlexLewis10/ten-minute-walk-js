import Walk from './walk'

let walk

beforeEach(() => {
  walk = new Walk()
})
describe('Walk', () => {
  it('Returns walk', () => {
    expect(walk.isTenMinuteWalk()).toEqual('walk')
  })
})