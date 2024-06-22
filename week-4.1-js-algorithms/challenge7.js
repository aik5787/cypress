// Challenge 7: Find Odd Numbers
// Write a function that takes an array of numbers and returns a new array with only the odd numbers.
// Usage examples:
// console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
// console.log(findOddNumbers([2, 4, 6, 8, 10])); // []

function findOddNumbers (arr) {
    return arr.filter((num) => num % 2 !== 0)

}

console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(findOddNumbers([2, 4, 6, 8, 10])); // []