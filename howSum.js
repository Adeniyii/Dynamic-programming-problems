/**
 * Solving a howSum problem using recursion
 * and optimizing using memoization
 * 
 * Problem: Return an array of any combination of numbers from the nums array
 * that adds up to the target number, else return null.
 * 
 * 
 * m = target
 * n = nums
 * memo = memoization object
 * 
 * Recursive
 * 
 * Brute force
 * time: O(n^m * m) exponential
 * space: O(m) linear
 * 
 * Memoized
 * time: O(n * m^2) polynomial
 * space: O(m^2) quadratic
 * 
 * 
 * Tabulated
 * time: O(n * m^2) polynomial
 * space: O(m^2) quadratic
 */


// Main function -- Recursion
const howSum = (target, nums, memo = {}) => {

    // Base cases
    if (target === 0) return [];
    if (target < 0) return null;
    if (target in memo) return memo[target];

    // Recursive case
    for (let n of nums){
        const remainder = target - n;
        const returnVal = howSum(remainder, nums, memo);

        if (returnVal !== null){
            memo[target] = returnVal;
            return [...returnVal, n];
        }
    }
    memo[target] = null;
    return memo[target];
}


// Main program -- Tabulation
/*
const howSum = (target, nums) => {
    // Create table and initialize elements to null
    const table = Array(target + 1).fill(null);
    // Set seed value
    table[0] = [];
    
    for (let i = 0; i <= target; i++){
        for (let n of nums){
            if ((i + n) <= target && table[i] !== null){
                table[i + n] = [...table[i], n];
            }
        }
    }
    return table[target];
}
*/

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [14, 7]));
