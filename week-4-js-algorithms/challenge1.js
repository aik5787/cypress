
// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.
// Usage examples:
// console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
// console.log(findLongestString(["one", "two", "three"])); // "three"
// console.log(findLongestString(["1", "22", "333"])); // "333"


function findLongestString (array) {
    let longestString = "";
    for (let i = 0; i < array.length; i++ ) {
        if (array[i].length > longestString.length) {
        longestString = array[i];
        }
    }
return longestString
}



console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"




// function findLongestString(array) {
//     return array.reduce((longest, current) => {
//         return current.length > longest.length ? current : longest;
//     }, "");
// }


// function findLongestString(array) {
//     let longestString = "";

//     for (let str of array) {
//         if (str.length > longestString.length) {
//             longestString = str;
//         }
//     }

//     return longestString;
// }


// function findLongestString(array) {
//     array.sort((a, b) => b.length - a.length);
//     return array[0];
// }


