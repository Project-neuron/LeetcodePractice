
// max pointer brute force 
var maxArea = function (nums) {
  var area = 0;
  var length = 0;
  var height = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      length = j - i;
      if (nums[i] < nums[j]) {
        height = nums[i];
      } else {
        height = nums[j];
      }

      if (area < length * height) {
        area = length * height;
      }
    }
  }
  return area;
}; 

//max container optimized 
var maxArea = function (nums) {
  var leftPointer = 0;
  var rightPointer = nums.length - 1;
  var maxArea = 0;
  while (leftPointer < rightPointer) {
    var height = Math.min(nums[leftPointer], nums[rightPointer]);
    var length = rightPointer - leftPointer;
    if (length * height > maxArea) {
      maxArea = length * height;
    }
    if (height < nums[leftPointer]) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
  return maxArea;
};

