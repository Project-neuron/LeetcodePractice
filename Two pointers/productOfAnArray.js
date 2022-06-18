
// personal answer 
var productExceptSelf = (nums) => {
  var fastPointer = 1;
  var product = 1;
  var products = [];
  var passedi = 0;
  for (var i = 0; i < nums.length; i++) {
    while (passedi != 1) {
      if (fastPointer == i) {
        passedi++;
      } else if (fastPointer == nums.length) {
        fastPointer = 0;
      } else {
        product = nums[fastPointer] * product;
        fastPointer++;
      }
    }
    products[i] = product;
    product = 1;
    passedi = 0;
    fastPointer = i + 2;
  }
  return products;
}; 

// actual answer 
var productExceptSelf = (nums) => {
  var leftProducts = [1];
  var rightProducts = [1];
  var answer = [];
  var offset = 1;

  for (var i = 1; i < nums.length; i++) {
    leftProducts[i] = nums[i - offset] * leftProducts[i - offset];
    rightProducts[i] =
      nums[nums.length - 1 - (i - offset)] * rightProducts[i - offset];
  }
  for (var i = 0; i < nums.length; i++) {
    answer[i] = leftProducts[i] * rightProducts[nums.length - 1 - i];
  }

  return answer;
};
