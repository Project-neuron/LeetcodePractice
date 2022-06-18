var leetcode = function (nums) {
  
  var monies = [];
  for (var i = 0; i < nums.length; i++) {
    if (i == 0) {
      monies[i] = nums[i];
    }
    if (i == 1) {
      monies[i] = Math.max(nums[i], monies[i - 1]);
    } else if (i >= 2) {
      if (i - 2 == 0) monies[i] = Math.max(nums[i], monies[i - 1]);
      else monies[i] = Math.max(nums[i] + monies[i - 2], monies[i - 1]);
    }
  }
  return Math.max(...monies);
};

var leetcode2 = function (nums) {
  return Math.max(
    leetcode(nums.slice(1, nums.length)),
    leetcode(nums.slice(0, nums.length - 1))
  );
};
