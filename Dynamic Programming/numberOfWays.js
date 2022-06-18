const leetcode = (m, n) => {
  var arr = [...new Array(m)].map(() => [...new Array(n)].map(() => 0));

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (i == 0 && j == 0) {
        arr[i][j] = 1;
      } else if (i - 1 == -1 && j > 0) {
        arr[i][j] = arr[i][j - 1];
      } else if (j - 1 == -1 && i > 0) {
        arr[i][j] = arr[i - 1][j];
      } else if (i - 1 > -1 && j - 1 > -1) {
        arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
      }
    }
  }
  return arr[m - 1][n - 1];
};
