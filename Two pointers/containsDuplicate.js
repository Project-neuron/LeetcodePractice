const containsDuplicate = (array) => {
  var start = 0;
  var end = array.length - 1;
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        return true;
      }
    }
  }
  return false;
};
