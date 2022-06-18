var reverseString = function (s) {
  var frontPointer = 0;
  var endPointer = s.length - 1;
  while (frontPointer < endPointer) {
    var temp = s[frontPointer];
    s[frontPointer] = s[endPointer];
    s[endPointer] = temp;
    frontPointer++;
    endPointer--;
  }
  return s;
};
