// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.
// Usage examples:
// console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
// console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
// console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1


function findLargestNumber(array) {
    return Math.max(...array);
}
    


console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1




// function findLargestNumber (array) {
//     let largestNumber = array [0];
//     for (let i = 1; i < array.length; i++ ) {
//         if (array[i] > largestNumber) {
//             largestNumber = array[i];
//         }
//     }
// return largestNumber
// }