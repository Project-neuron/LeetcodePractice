/**
 * Problem description: Write a function can construct that accepts a target string and an array of strings return a boolean 
 * that denotes whether the target string can be constructed by using the concatinated words in the word bank. You can reuse the elements of 
 * word bank as you need. 
 
 * Inputs:  Target word, as well as a word bank
 * Outputs: a boolean that states if the word can be made  
 
 * Limits: The letters can only be drawn from the word bank, you can return a boolean. 
 * Datastructures: A tree as well as the call stack 
 * Strategy: basically go through the word bank and if you manage to find the starting word remove it and continue until you cannot 
 * create the word anymore or you reach an empty string. 
*/ 

const canConstruct = (wordBank, target, memo ={}) => { 
    if(target in memo) memo[target]; 
    if (target === "") return true;
  
    for (let word of wordBank) {
      if (target.indexOf(word) === 0) {
        const remainder = target.slice(word.length);
        if (canConstruct(wordBank, remainder, memo) === true) { 
          memo[remainder] = true; 
          return true;
        }
  
  
      }
    }  
    memo[target] = false; 
    return false; 
  
  }