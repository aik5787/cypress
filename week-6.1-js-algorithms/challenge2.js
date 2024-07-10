// Challenge 2: Find the most frequent element in a given array
// Write a function to find the most frequent element in the array. If there are multiple elements that appear a maximum number of times, print the first of them
// Usage examples:
//let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];

// let n = arr.length;
// console.log(mostFrequent(arr, n));; // 40

let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];

let n = arr.length;

function mostFrequent(arr, n) {
  let frequency = {};
  let maxFrequency = 0;
  let mostFrequentElement = 0;

  arr.forEach((num) => {
    if (frequency[num]) {
      frequency[num] += 1;
      if (frequency[num] > maxFrequency) {
        maxFrequency = frequency[num];
        mostFrequentElement = num;
      }
    } else {
      frequency[num] = 1;
    }
  });

  return mostFrequentElement;
}

// function mostFrequent(arr, n) {
//   let maxCount = 0;
//   let mostFrequentElement = null;

//   for (let i = 0; i < n; i++) {
//     let currentCount = 0;
//     for (let j = 0; j < n; j++) {
//       if (arr[i] === arr[j]) {
//         currentCount++;
//       }
//     }
//     if (currentCount > maxCount) {
//       maxCount = currentCount;
//       mostFrequentElement = arr[i];
//     }
//   }
//   return mostFrequentElement;
// }

console.log(mostFrequent(arr, n)); // 40
