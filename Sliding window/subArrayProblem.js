// Given an array of positive integers, find the subarrays that add up to
// a given number 
 /**
 * problems like these are called sliding window problems. Usually they have an array of contingous 
 * numbers or letters or the like and you are required to find some combination of the two in order get the correct answer 
 * you can create a sliding window that encapsulates a sub array of the main array and check that sub array for your answer
 */

function arrayTest() {
  const example = [1, 7, 4, 3, 1, 2, 1, 5, 1];
  const sum = 8;
  subArraySum(example, sum);
}

const subArraySum = (array, sum) => {
  var sums = 0;
  var j = 1;

  // initialize the first part of the window 
  for (var i = 0; i < array.length - 1; i++) {
    sums = array[i]; 
    // in this instance I want to make sure that a single element isn't equal to the answer 
    if (checkForSumMatching(sum, sums) == 1) {
      printOutArray(sum, array.slice(i, i + 1));
    } 
    // if the first element in the beggining of the window isn't equal then you move to instantiating the second 
    // part of the window 
    while (j < array.length) { 
      // add the second item within the window 
      sums += array[j]; 
      // now check to make sure that the first two items within the window aren't the items you are looking for 
      if (checkForSumMatching(sum, sums) == -1) break; 
      // if the first two items are over then increment j by one to go to the next item 
      else if (checkForSumMatching(sum, sums) == 1) { 
        // if the the sums are equal to the target then you simply print out the array you found 
        printOutArray(sum, array.slice(i, j + 1));
        break;
      }
      j++;
    } 
    // when you shift the window j is always going to be 1 more than i 
    j = i + 2;
  }
};

const checkForSumMatching = (targetSum, checkingSum) => {
  if (targetSum == checkingSum) return 1;
  else if (targetSum < checkingSum) return -1;
};

const printOutArray = (sum, arrayList) => {
  console.log("The array that matches " + sum + " is as follows");
  var list = "[";
  for (var i = 0; i < arrayList.length; i++) {
    list = list + " " + arrayList[i];
  }
  list = list + " ]";

  console.log(list);
};

