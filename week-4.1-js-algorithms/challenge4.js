// Challenge 4: Check If Array Contains Element
// Write a function that takes an array and an element, and checks if the array contains that element.
// Usage examples:
// console.log(containsElement([1, 2, 3, 4, 5], 3)); // true
// console.log(containsElement(["a", "b", "c", "d"], "e")); // false

function containsElement (arr, el) {
    return arr.includes(el)
}

console.log(containsElement([1, 2, 3, 4, 5], 3)); // true
console.log(containsElement(["a", "b", "c", "d"], "e")); // false