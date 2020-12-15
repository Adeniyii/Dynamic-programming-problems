/**
 * Solving a countConstruct problem using recursion and tabulation
 * and optimizing using memoization
 * 
 * 
 * m = target
 * n = words
 * 
 * 
 * Recursion
 * 
 * Brute force
 * time: O(n^m * m)
 * space: O(m^2)
 * 
 * 
 * Memoized
 * time: O(m^2 * n)
 * space: O(m^2)
 * 
 * 
 * Tabulation
 * time: O(m^2 * n)
 * space: O(m)
 */


//  Main program -- Recursive, Memoized
const countConstruct = (target, words, memo = {}) => {

    // Base cases
    if (target === '') return 1;
    if (target in memo) return memo[target];

    let count = 0;

    // Recursive case
    for (let word of words){
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const result = countConstruct(suffix, words, memo);
            count += result;
        }
    }
    // Cache return value
    memo[target] = count;
    return count;
}


/* 
// Main program -- Tabulated
const countConstruct = (target, words) => {
    // Create and fill table
    const table = Array(target.length + 1).fill(0);
    // Set seed value
    table[0] = 1;

    for (let i = 0; i < table.length; i++){
        if (!table[i]) continue;

        for (let word of words){
            // Check out of bounds
            if (i + word.length >= table.length) continue;
            // Check next valid word
            if (target.slice(i, i + word.length) !== word) continue;

            table[i + word.length] += table[i];
        }
    }
    return table[target.length];
}
 */


console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e", 
    "ee", 
    "eee", 
    "eeee", 
    "eeeee", 
    "eeeeee"
]));
