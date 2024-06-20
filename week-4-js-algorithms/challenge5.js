// Challenge 5: Sum of Numbers
// Write a function to find the sum of all numbers in the array.
// Usage examples:
// console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
// console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
// console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15


function sumNumbers (arr) {
    return arr.reduce((acc, current) => acc+current,0);
}



console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15