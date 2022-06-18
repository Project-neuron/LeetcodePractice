var merge = (intervals) => {
  var result = [];
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  var current = intervals[0];
  for (var i = 1; i <= intervals.length; i++) {
    if (i == intervals.length) {
      result.push(current);
    } else if (current[1] < intervals[i][0]) {
      result.push(current);
      current = intervals[i];
    } else {
      current = [
        Math.min(current[0], intervals[i][0]),
        Math.max(current[1], intervals[i][1])
      ];
    }
  }
  return result;
};
