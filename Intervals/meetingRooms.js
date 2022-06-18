const leetcode = (intervals) => {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  for (var i = 0; i < intervals.length - 1; i++) {
    var [a, b] = intervals[i];
    var [c, d] = intervals[i + 1];
    if (c < b) {
      return false;
    }
  }
  return true;
};
