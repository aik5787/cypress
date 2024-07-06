// Challenge 4: Find duplicates in two arrays
// Write a function that takes two arrays as arguments and returns an array of values that are repeated more than once across the two input arrays
// Usage examples:
//const array1 = [1, 2, 3, 4, 5, 5]; const array2 = [4, 5, 6, 7, 7, 8]; //console.log(findDuplicates(array1, array2)); //  [4, 5, 7]

const array1 = [1, 2, 3, 4, 5, 5];
const array2 = [4, 5, 6, 7, 7, 8];

function findDuplicates(array1, array2) {
  let jointArray = [...array1, ...array2];
  let duplicates = [];

  for (let i = 0; i < jointArray.length; i++) {
    for (let j = i + 1; j < jointArray.length; j++) {
      if (jointArray[i] === jointArray[j]) duplicates.push(jointArray[i]);
    }
  }

  duplicates = [...new Set(duplicates)];
  return duplicates;
}

console.log(findDuplicates(array1, array2)); //  [4, 5, 7]
