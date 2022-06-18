var leetcode = function (text1, text2) {
  var lcs = [...new Array(text1.length + 1)].map(() =>
    [...new Array(text2.length + 1)].map(() => 0)
  );

  for (var i = text1.length - 1; i >= 0; i--) {
    for (var j = text2.length - 1; j >= 0; j--) {
      if (text1.charAt(i) == text2.charAt(j)) {
        lcs[i][j] = 1 + lcs[i + 1][j + 1];
      } else {
        lcs[i][j] = Math.max(lcs[i + 1][j], lcs[i][j + 1]);
      }
    }
  }
  return lcs[0][0];
};
