function run2Sum() {
  var nums = [1, 2, 3, 4, 6];
  var target = 6;
  console.log(twoSumOrdered(nums, target));
}

// personal answer 
var twoSumOrdered = function (nums, target) {
  var startPointer = 0;
  var endPointer = nums.length - 1;
  var complete = false;
  while (complete != true) {
    if (startPointer == endPointer) {
      complete = true;
    } else if (nums[startPointer] + nums[endPointer] > target) {
      endPointer = endPointer - 1;
    } else if (nums[startPointer] + nums[endPointer] < target) {
      startPointer = startPointer + 1;
    } else if (nums[startPointer] + nums[endPointer] == target) {
      return [startPointer, endPointer];
    }
  }
};
