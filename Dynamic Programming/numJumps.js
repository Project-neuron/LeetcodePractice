const leetCoe = (arr) => {
  var can_reach = true;
  var min_jump = 1;
  var i = arr.length - 1;
  for (var j = i - 1; j >= 0; j--) {
    if (arr[j] >= min_jump) {
      can_reach = true;
      min_jump = 1;
      i = j;
    } else {
      can_reach = false;
      min_jump++;
    }
  }

  return can_reach;
};
