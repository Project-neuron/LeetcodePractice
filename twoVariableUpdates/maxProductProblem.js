// optimized solution  

// Limits: sub array must be contigous 
  //        all possible sub arrays must be testes 
  //        smallest sub array is one number long 
  //        largest array product is what we are after 

  // data structures: just standard array 
  // stategy: two variable updates 

  // process:\
  // 1. basically for each additional number you update the current max and current min 
  // with current max containing the multiplication of current min with the additional number
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
