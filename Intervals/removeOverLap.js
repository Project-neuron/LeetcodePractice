const leetcode = (intervals) => {
  var result = 0;
  var prevEnd = intervals[0][1];
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  for (var i = 1; i < intervals.length; i++) {
    var [a, b] = intervals[i];
    if (a >= prevEnd) prevEnd = b;
    else {
      result++;
      prevEnd = Math.min(b, prevEnd);
    }
  }

  return result;
};
