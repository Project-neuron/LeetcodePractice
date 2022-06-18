const longestSubstring = (string) => {
  //Limit: have to count the number of contiguous charachters within a string
  //       if the charachter repeats you reset the count and restart it again.
  //       find the longest substring you can.

  //Data Structure: Probably a set.
  //Strategy: Sliding window.

  //Process: 1. Iterate over the charahcters,
  //         2. as you go add them to the set increment the count
  //         3. when there is a repeat as found by checking the set increment the right pointer to exclude the
  //            duplicated letter and take the length at that point

  var visited = new Set();
  var leftPointer = 0;
  var rightPointer = 0;
  var length = 0;

  while (rightPointer < string.length) {
    var char = string.charAt(rightPointer);
    if (!visited.has(char)) {
      visited.add(char);
      rightPointer++;
    } else {
      visited.delete(char);
      visited.add(char);
      length = Math.max(length, rightPointer - leftPointer);
      leftPointer++;
      rightPointer++;
    }
  }
  return length;
};
