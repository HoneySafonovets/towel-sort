
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  }
  if (matrix.length > 0 || matrix === '') {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        matrix[i].reverse()
      }
    }
    return matrix.flat()
  } else {
    return []
  }
}
