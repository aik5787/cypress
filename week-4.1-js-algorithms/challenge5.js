// Challenge 5: Remove Duplicate Elements
// Write a function that takes an array and returns a new array with duplicate elements removed.
// Usage examples:
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
// console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]


function removeDuplicates (arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]


// function removeDuplicates (arr) {
//     return [...new Set(arr)];
// }