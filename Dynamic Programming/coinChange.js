// dynamic programming solutions will most likely have some form of array to store the answers 
// bottom up will mean you start with the base case and work your way up 
// eliminate the branches on the tree where you go over 
// basically you have to generate the answers you would get from the tree then translate that into an array of somesort 

const coinChange = (coins, amount) => {
  var dp = [...new Array(amount + 1)].map(() => amount + 1);
  dp[0] = 0;

  for (var i = 1; i < amount + 1; i++) {
    for (var j = 0; j < coins.length; j++) {
      var coin = coins[j];
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  if (dp[amount] != amount + 1) {
    return dp[amount];
  }
  return -1;
};
