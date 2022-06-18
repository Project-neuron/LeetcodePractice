
var leetcode = function (nums) {
  var monies = [];
  for (var i = 0; i < nums.length; i++) {
    if (i == 0) {
      monies[i] = nums[i];
    }
    if (i == 1) {
      monies[i] = Math.max(nums[i], monies[i - 1]);
    } else if (i >= 2) {
      monies[i] = Math.max(nums[i] + monies[i - 2], monies[i - 1]);
    }
  }
  return Math.max(...monies);
}; 

console.log(leetcode([1,2,3]))
