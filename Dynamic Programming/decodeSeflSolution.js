const leetcode = (decode) => {
  var decodeNum = [...new Array(decode.length)];

  for (var i = decode.length - 1; i >= 0; i--) {
    if (i == decode.length - 1) {
      decodeNum[i] = 1;
    } else {
      var num = decode.substring(i, i + 2);
      if (parseInt(num) <= 26 && decode.charAt(i) != "0") {
        decodeNum[i] = 1 + decodeNum[i + 1];
      } else if (parseInt(num) > 26) {
        decodeNum[i] = 1;
      } else if (decode.charAt(i) === "0") {
        decodeNum[i] = -1;
      }
    }
  }
  return decodeNum[0];
};
