var leetCode = (string) => {
  var subStr = "";
  var subStrLen = 0;
  for (let i = 0; i < string.length; i++) {
    //odd palindromes
    var left = i;
    var right = i;
    while (
      left >= 0 &&
      right < string.length &&
      string[left] == string[right]
    ) {
      if (right + 1 - left > subStrLen) {
        subStr = string.substring(left, right + 1);
        subStrLen = subStr.length;
      }
      left--;
      right++;
    }

    //even palindromes
    var left = i;
    var right = i + 1;
    while (
      left >= 0 &&
      right < string.length &&
      string[left] == string[right]
    ) {
      if (right + 1 - left > subStrLen) {
        subStr = string.substring(left, right + 1);
        subStrLen = subStr.length;
      }
      left--;
      right++;
    }
  }
  return subStr;
};
