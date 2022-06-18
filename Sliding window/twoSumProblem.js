// the tow sum problem is very similar  same process
function run() {
  (nums = [3, 2, 4]), (target = 6);
  var ans = twoSum(nums, target);
  console.log(ans);
}
var twoSum = function (nums, target) {
  var j = 1;
  for (var i = 0; i < nums.length - 1; i++) {
    while (j < nums.length) {
      var check = nums[i] + nums[j];
      if (check == target) {
        return [i, j];
      }
      j++;
    }
    j = i + 2;
  }
};
