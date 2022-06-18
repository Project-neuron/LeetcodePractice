//You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 


// optimized 
const climbStairs = (n) => {
    var one, two = 1; 
    for(var i = 0; i< n-1; i++){
        var tmp = one;
        one = one + two;  
        two = tmp; 
        return one;
    }
}