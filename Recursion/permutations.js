var permutations = (nums) => {
  var result = [];
  if (nums.length == 1) {
    return [[...nums]];
  }
  for (var i = 0; i < nums.length; i++) {
    var item = nums.splice(0, 1)[0];
    var perms = permutations(nums);
    for (let perm of perms) {
      perm.push(item);
    }
    result = [...perms];
    nums.push(item);
  }
  return result;
};
