// the chaching potion is the same as the coin problem 
// So is the double loop 
// and the chache update 
// only differences are how it all happens and that is gained from the problem constraints 
// start off by finding the terminal base case then build the cache from there. 

var lengthOfLIS = function (nums) {
  var lis = [...new Array(nums.length)].map(() => 1);

  for (var i = nums.length - 1; i >= 0; i--) {
    for (var j = i + 1; j < nums.length; j++) {
      var first = nums[i];
      var second = nums[j];
      if (first < second) {
        lis[i] = Math.max(lis[i], 1 + lis[j]);
      }
    }
  }
  return Math.max(...lis);
};
