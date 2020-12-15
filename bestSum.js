/**
 * Solving a bestSum problem using recursion and tabulation
 * and optimizing using memoization
 * 
 * Problem: Return array containing the shortest combination
 * of numbers from the nums array that adds up to the target number
 * 
 * 
 * m = target
 * n = nums
 * 
 * Recursive
 * 
 * Brute force
 * time: O(n^m * m) exponential
 * space: O(m^2) quadratic
 * 
 * Memoized
 * time: O(n*m^2) polynomial
 * space: O(m^2) quadratic
 * 
 * 
 * Tabulated
 * 
 * time: O(n*m^2) polynomial
 * space: O(m^2) quadratic
 * 
 */


//  Main function -- Recursion
const bestSum = (target, nums, memo = {}) => {
    if (target === 0) return [];
    if (target <= 0) return null;
    if (target in memo) return memo[target];

    let shortestCombo = null;

    for (let n of nums){
        const remainder = target - n;
        const result = bestSum(remainder, nums, memo);

        if (result !== null){
            const combination = [...result, n];
            if (shortestCombo === null || combination.length < shortestCombo.length){
                shortestCombo = combination;
            }
        }
    }
    memo[target] = shortestCombo;
    return shortestCombo;
}


// Main program -- Tabulation
/*
const bestSum = (target, nums) => {

    // Create table and initialize elements to null
    const table = Array(target + 1).fill(null);

    // Set seed value
    table[0] = [];

    // Iterate over table
    for (let i = 0; i <= target; i++){
        // Iterate through nums
        for (let n of nums){

            // Check if out of bounds or on null character
            if (!(i + n) || !table[i]) continue;

            // Add current num into array at current index 
            const combo = [...table[i], n];

            // Replace array at next index if longer than new array
            if (!table[i + n] || combo.length < table[i + n].length){
                table[i + n] = combo;
            }
        }
    }
    return table[target];
}
*/




console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
