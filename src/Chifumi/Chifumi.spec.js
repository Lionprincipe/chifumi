import matrixCreator from './matrixCreator'

describe('matrixCreator', () => {
  it('always returns an array', () => {
    expect(matrixCreator()).toEqual([])
  })
  it('return a matrix', () => {
    expect(matrixCreator(3)).toEqual([[3, 0, 2], [0, 3, 1], [2, 1, 3]])
  })
})
