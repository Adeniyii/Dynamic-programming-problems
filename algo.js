// Memoization

const fib = (n, memo = {}) => {

    // Check pattern match using memoization
    if (n in memo)
    {
        return memo[n];
    }

    // Base case
    if (n <= 2)
    {
        return 1;
    }

    // Recursive case
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(1400))
