var leetcode = function (target, nums) {
  var result = [];
  var dfs = function (i, array, total) {
    if (total == target) {
      result.push([...array]);
      return;
    }
    if ((i >= nums.length) | (total > target)) {
      return;
    }
    array.push(nums[i]);
    dfs(i, array, total + nums[i]);
    array.pop();
    dfs(i + 1, array, total);
  };

  dfs(0, new Array(), 0);
  return result;
};
