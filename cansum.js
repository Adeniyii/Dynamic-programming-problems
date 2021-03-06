/**
 * Solving a canSum problem using recursion and tabulation
 * and optimizing using memoization.
 * 
 * Problem: Return true if the target can be generated using 
 * any combination of the numbers in the nums array.
 * 
 * 
 * m = target
 * n = nums
 * memo = memoization object
 * 
 * Recursive
 * 
 * Brute force
 * time: O(n^m) exponential
 * space: O(m) linear
 * 
 * memoized
 * time: O(n*m) polynomial
 * space: O(m) linear
 * 
 * 
 * Tabulated
 * 
 * time: O(m*n) polynomial
 * space: O(m) linear
 */


// Main function -- Recursive
const canSum = (target, nums, memo = {}) => {

    // Base case
    if (target === 0) return true;
    if (target < 0) return false;
    if (target in memo) return memo[target];

    // Recursive case for each num in arr
    for (let num of nums){

        const remainder = target - num;

        // Store memo if not exists -- recursive case
        memo[remainder] = canSum(remainder, nums, memo);

        if (memo[remainder] === true) return true;
    }

    return false;
}


// Main program -- Tabulation
/*
const canSum = (target, nums) => {
    // Create table and initialize values to false
    const table = Array(target + 1).fill(false);

    // Assign seed value
    table[0] = true;

    // Iterate over table assigning bool for each index increment from nums array 
    for (let i = 0; i <= target; i++){
        for (let n of nums){
            if (i + n <= target && table[i] === true) table[i + n] = true;
        }
    }
    
    return table[target];
}
*/


console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [5, 3, 2]));
console.log(canSum(300, [14, 7]));
