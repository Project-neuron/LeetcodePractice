// actual answer 
const maxProfit = function (array) {
  var smallNum = array[0];
  var maxProfit = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < smallNum) {
      smallNum = array[i];
    } else if (array[i] - smallNum > maxProfit) {
      maxProfit = array[i] - smallNum;
    }
  }
  return maxProfit;
};
