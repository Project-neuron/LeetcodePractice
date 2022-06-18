var leetcode = function (text1, wordDict) {
  var wordBool = [...new Array(text1.length)].map(() => false);
  wordBool[text1.length] = true;

  for (var i = text1.length; i >= 0; i--) {
    for (var j = 0; j < wordDict.length; j++) {
      var word = wordDict[j];
      var wordCheck = text1.substring(i, i + word.length);
      if (i + word.length <= text1.length && wordCheck == word) {
        wordBool[i] = wordBool[i + word.length];
      }
      if (wordBool[i]) {
        break;
      }
    }
  }
  return wordBool[0];
};
