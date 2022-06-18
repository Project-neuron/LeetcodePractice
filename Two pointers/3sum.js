var leetCode = (nums) => {
  var results = [];
  nums.sort((a, b) => {
    return a - b;
  });
  for (var i = 0; i < nums.length; i++) {
    if (i < 0 && nums[i] == nums[i - 1]) {
      i++;
    }
    var left = i + 1;
    var right = nums.length;
    while (left < right) {
      var threeSum = nums[i] + nums[left] + nums[right];
      if (threeSum > 0) {
        right--;
      } else if (threeSum < 0) {
        left++;
      } else {
        results.push(nums[i], nums[left], nums[right]);
        left++;
        while (nums[left] == nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return results;
};
