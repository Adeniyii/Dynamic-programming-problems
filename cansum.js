/**
 * Solving a canSum problem using recursion and tabulation
 * and optimizing using memoization
 * 
 * 
 * m = sum
 * n = arr
 * 
 * 
 * Recursive
 * 
 * Brute force
 * time: O(n^m)
 * space: O(m)
 * 
 * memoized
 * time: O(n*m)
 * space: O(m)
 * 
 * 
 * Tabulated
 * 
 * time: O(m*n)
 * space: O(m)
 */


// Main function -- Recursive
const canSum = (sum, arr, memo = {}) => {

    // Base case
    if (sum === 0) return true;
    if (sum < 0) return false;
    if (sum in memo) return memo[sum];

    // Recursive case for each num in arr
    for (let num of arr){

        const remainder = sum - num;

        // Store memo if not exists -- recursive case
        memo[remainder] = canSum(remainder, arr, memo);

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
