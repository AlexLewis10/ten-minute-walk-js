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
    expect(walk.isTenMinuteWalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).toEqual(true)
  })

  it('returns false when given an array with more than 10 items', () => {
    expect(walk.isTenMinuteWalk(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w', 'w'])).toEqual(false)
  })
})

describe('Direction', () => {
  it('returns false if the number of blocks west and east is not equal', () => {
    expect(walk.isTenMinuteWalk(['w', 'w', 'w', 'w', 'w', 'w', 'e', 'e', 'e', 'e'])).toEqual(false)
  })

  it('returns false if the number of blocks west and east is not equal', () => {
    expect(walk.isTenMinuteWalk(['n', 'n', 'n', 'n', 'n', 'n', 's', 's', 's', 's'])).toEqual(false)
  })
  
})



