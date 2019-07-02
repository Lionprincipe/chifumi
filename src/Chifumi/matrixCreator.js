/*
the idee behind is to generate  a diagonal inverted matrix  that hold the different result values
The matrix is created in two steps.
1.  we build the table prefilled with the diagonal (here we use the array length)value and a placehoder
2. we fill the matrix with winner index. for a row with n items, the number of wins or loses is equal to( n-1 )/2. 
if result of [i][j], this result is reproduice on [j][i] 


*/

export default function matrixCreator(size) {
  const placeHolder = -1
  return (
    (size > 0 &&
      [...Array(size)]
        .map((_, i, arr) =>
          arr.map((_, j, arr) => (j === i ? arr.length : placeHolder))
        )
        .reduce((accI, currI, i, arrI) => {
          accI = i ? accI : arrI

          const temp = currI.reduce((accJ, currJ, j, arrJ) => {
            let { arr, count } = accJ
            count = j === 0 ? Math.floor(arrJ.length / 2) : count
            let value = null
            if (j === i) {
              value = currJ
            } else if (accI[j][i] > placeHolder) {
              value = accI[j][i]
            } else {
              value = count > 0 ? i : j
            }
            count = value === i ? count - 1 : count
            arr = arr ? [...arr, value] : [value]
            return { arr, count }
          }, {})
          return (accI = [...accI.slice(0, i), temp.arr, ...accI.slice(i + 1)])
        }, [])) ||
    []
  )
}
