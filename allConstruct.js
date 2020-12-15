/**
 * Solving an all construct dynamic problem 
 * using recursion and tabulation and optimizing with memoization.
 * This particular problem cannot be optimized past an exponential time complexity.
 * 
 * 
 * m = target
 * n = words
 * 
 * 
 * Recursion
 * 
 * Brute force
 * time: O(n^m) exponential
 * space: O(m) linear
 * 
 * Memoized
 * time: O(n^m) exponential
 * space: O(m) linear
 * 
 * 
 * Tabulation
 * 
 * time: O(n^m)
 * space: O(n^m)
 */


// Main program -- Recursive
const allConstruct = (target, words, memo = {}) => {
    // Base case
    if (target === '') return [[]];
    if (target in memo) return memo[target];

    let allCon = [];

    for (let word of words){

        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const result = allConstruct(suffix, words, memo);
            
            if (result.length > 0){
                const ways = result.map(arr => [word, ...arr]);
                allCon.push(...ways);
            }
        }
    }
    memo[target] = allCon;
    return allCon;
}

/* 
// Main program -- Tabulation
const allConstruct = (target, words) => {
    const table = Array(target.length + 1).fill([]);
    table[0] = [[]];

    for (let i = 0; i < table.length; i++){
        if (table[i].length < 1) continue;

        for (let word of words){
            if (i + word.length >= table.length) continue;
            if (target.slice(i, i + word.length) !== word) continue;

            let temp = table[i].map((arr) => [ ...arr, word ]);

            table[i + word.length] = [...table[i + word.length], ...temp];
        }
    }
    return table[target.length];
}
 */




console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e", 
    "ee", 
    "eee", 
    "eeee", 
    "eeeee", 
    "eeeeee"
]));
