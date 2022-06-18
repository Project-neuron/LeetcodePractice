var maxSubArray = function (nums) {
  var maxSum = nums[0];
  var newSum = 0;
  for (var i = 0; i < nums.length; i++) {
    newSum = newSum + nums[i];
    if (newSum < nums[i]) {
      newSum = nums[i];
    }

    if (newSum > maxSum) {
      maxSum = newSum;
    }
  }
  return maxSum;
};
