// Challenge 6: Calculate Average
// Write a function that takes an array of numbers and returns the average.
// Usage examples:
// console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
// console.log(calculateAverage([10, 20, 30, 40, 50])); // 30

function calculateAverage (arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = arr.reduce((acc, current) => acc + current, 0)
    let result = sum/arr.length
    return result
}


console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
console.log(calculateAverage([10, 20, 30, 40, 50])); // 30