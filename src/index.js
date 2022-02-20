
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  let resultArr = [];

  for (i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      resultArr = resultArr.concat(matrix[i]);
    } else {
      resultArr = resultArr.concat(matrix[i].sort((a, b) => b - a));
    }
  }

  return resultArr;
}
