/**
 * Solving a grid traveller problem using recursion and tabulation
 * and optimizing using memoization
 * 
 * Problem: Return the number of ways you can traverse a m * n grid
 * from the top left corner to the bottom right by moving either forward or downward.
 * 
 * 
 * Variables
 * m = no of rows
 * n = no of columns
 * 
 * 
 * Recursve
 * 
 * Brute force
 * time: O(2^(n+m)) exponential
 * space: O(n+m) linear
 * 
 * Memoized
 * time: O(n*m) polynomial
 * space: O(n+m) linear
 * 
 * 
 * 
 * Tabulated
 * 
 * time: O(n*m) polynomial
 * space: O(n*m) linear
 */



// Main function - Recursive
const gt = (m, n, memo = {}) => {

    const key = m + ',' + n;
    const invKey = n + ',' + m;

    // Base cases
    if (m === 1 || n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    if (key in memo) return memo[key];
    if (invKey in memo) return memo[invKey]

    // Cache key, value pair in memo object -- recursive case
    memo[key] = gt(m - 1, n, memo) + gt(m, n - 1, memo);

    return memo[key];
}


// Main function - Tabulated
/*
const gridTraveller = (m, n) => {
    const grid = Array(m + 1).fill().map(
        () => Array(n + 1).fill(0));

    // Base case
    grid[1][1] = 1;

    for (let i = 0; i <= m; i++){
        for (let j = 0; j <= n; j++){
            if (i + 1 <= m) grid[i + 1][j] += grid[i][j];
            if (j + 1 <= n) grid[i][j + 1] += grid[i][j];
        }
    }
    return grid;
}
*/



console.log(gt(1, 1))
console.log(gt(2, 3))
console.log(gt(3, 2))
console.log(gt(3, 3))
console.log(gt(4, 4))
console.log(gt(18, 18))
