/**
 * Solving a fibanacci sequence problem using recursion and tabulation
 * and optimizing using memoization
 * 
 * Problem: Return the nth number of the fibonacci sequence.
 * 
 * 
 * Recursive
 * 
 * Brute force
 * time: O(2^n) exponential
 * space: O(n) linear
 * 
 * Memoized
 * time: O(n) linear
 * space: O(n) linear
 * 
 * 
 * 
 * Tabulated
 * 
 * time: O(n) linear
 * space: O(n) linear
*/


// Main function -- Recursion
const fib = (n, memo = {}) => {

    // Base cases
    if (n <= 2) return 1;
    if (n in memo) return memo[n];

    // Recursive case
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}


// Main function -- Tabulation
/*
const fib = (n) => {
    const series = Array(n + 1).fill(0);
    series[1] = 1;
    for (let i = 0; i < n; i++){
        series[i + 1] += series[i];
        series[i + 2] += series[i];
    }
    return series[n];
}
*/


console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(1400))
