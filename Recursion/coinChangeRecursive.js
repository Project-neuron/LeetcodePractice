/**
 * Problem description: 
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
    Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
    You may assume that you have an infinite number of each kind of coin.
 */  

/**
* Inputs: Array of coins and a target sum  
* Outputs: A number that corresponds to the minimum number of coins you need in order to reach the target sum 
* or -1 if no such combination exists
* */ 

/**
 * Limits: You have unlimited coins to select from 
 *         You have to return the minimum number of coins that gets to the target sum 
 *         which means you have to traverse the entire tree. 
 */ 

/**  Datastructures: Arrays, and the call stack 
     Strategy: Break the problem down by deducting a coin from the target with each addition on the stack  
               until you get to a successful base case namely where after the deduction is completed you have a 0 
               pass up an empty array in that case and as you pop back up add in the edges or the coins to your array 
               Check to make sure the array that comes up contains the least amount of coins.  
               Store the instances of the tree you have already traversed.
*/  


const recursiveCoinCount = (coins, target,) => {   
    if(target in memo) return memo[target]
    if(target == 0) return [];
    if(target < 0) return -1;
    
    let shortestCombo = -1; 
  
    for(let i = 0; i<coins.length; i++){
      const remainder = target - coins[i]; 
      const result = recursiveCoinCount(coins, remainder, memo); 
      if(result != -1){
        const combo = [...result, coins[i]] 
        if(shortestCombo == null || combo.length < shortestCombo.length){ 
          shortestCombo = combo;
  
        }
      }
    }  
    memo[target] = shortestCombo
    if( shortestCombo!= -1) return shortestCombo.length; 
    else return shortestCombo;
  
  
  }


