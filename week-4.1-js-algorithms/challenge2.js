// Challenge 2: Concatenate Array Elements
// Write a function that takes an array of strings and concatenates all the elements into one string.
// Usage examples:
// console.log(concatenateElements(["Hello", "world"])); // "Helloworld"
// console.log(concatenateElements(["I", "love", "JavaScript"])); // "IloveJavaScript"

function concatenateElements(arr) {
    return arr.join('')
}


console.log(concatenateElements(["Hello", "world"])); // "Helloworld"
console.log(concatenateElements(["I", "love", "JavaScript"])); // "IloveJavaScript"