// optimized solution 
var maxProduct = function (nums) {
  var currMin = 1;
  var currMax = 1;
  var result = Math.max(...nums);

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      currMin = 1;
      currMax = 1;
    }
    var tmp = currMax * nums[i];
    currMax = Math.max(nums[i] * currMax, nums[i] * currMin, nums[i]);
    currMin = Math.min(tmp, nums[i] * currMin, nums[i]);

    result = Math.max(result, currMax);
  }
  return result;
};
