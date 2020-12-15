/**
 * Solve a canConstruct problem using recursion and tabulation
 * and optimize using memoization.
 * 
 * Problem: Return true if the target can be generated using a 
 * combination of words from the words array, else return false.
 * 
 * 
 * m = target
 * n = words
 * 
 * Recursive
 * 
 * Brute force
 * time: O(n^m * m) exponential
 * space: O(m^2) quadratic
 * 
 * Memoized
 * time: O(m^2 * n) polynomial
 * space: O(m^2) quadratic
 * 
 * 
 * Tabulated
 * 
 * time: O(n*m^2) polynomial
 * space: O(m) linear
 */

// Main function -- Recursion
const canConstruct = (target, words, memo = {}) => {
    // Base cases
    if (target === '')return true;
    if (target in memo) return memo[target];

    // Recursive case
    for (let word of words){
        if (target.indexOf(word) === 0){

            const suffix = target.slice(word.length);

            if (canConstruct(suffix, words, memo) === true){
                // Store return value in memo
                memo[target] = true;
                return true;
            }
        }
    }
    // Store return value in memo
    memo[target] = false;
    return false;
}

/* 
// Main program -- Tabulation
const canConstruct = (target, words) => {
    // Create and fill table
    const table = Array(target.length + 1).fill(false);
    // Assign seed value
    table[0] = true;

    for (let i = 0; i < table.length; i++){
        // Check if current table index is true
        if (!table[i]) continue;

        for (let word of words){
            // Check not exceeding table bounds
            if (i + word.length >= table.length) continue;
            // Check next valid word from words array
            if (target.slice(i, i + word.length) === word){
                table[i + word.length] = true;
            }
            // Check if can construct
            if (table[target.length]) return true;
        }
    }
    // Return can construct bool
    return table[target.length];
} 
*/




console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e", 
    "ee", 
    "eee", 
    "eeee", 
    "eeeee", 
    "eeeeee"
]));
