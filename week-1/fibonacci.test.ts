import { getFibonacci } from './fibonacci'

describe('getFibonacci', () => {
  it('should get 1st value of array as 0', () => {
    const actual = getFibonacci(1)
    const expected = [0]
    expect(actual).toEqual(expected)
  })
})
