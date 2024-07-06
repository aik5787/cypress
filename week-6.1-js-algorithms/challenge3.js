// Challenge 3: Count positive and negative numbers in an array
// Write a function to count positive and negative numbers in an array
// Usage examples:
//let arr = [10,20, -1,22,99,20, -9];
// console.log(`The negative numbers in an array is ${negativeCount}`) //"The negative numbers in an array is 2"
// console.log(`The negative numbers in an array is ${poitiveCount}`) // "The positive numbers in an array is 5"

let arr = [10, 20, -1, 22, 99, 20, -9];

function countPosNegNum(arr) {
  let negativeCount = 0;
  let poitiveCount = 0;
  arr.forEach((el) => {
    if (el < 0) {
      negativeCount++;
    } else if (el > 0) {
      poitiveCount++;
    }
  });
  console.log(`The negative numbers in an array is ${negativeCount}`); //"The negative numbers in an array is 2"
  console.log(`The negative numbers in an array is ${poitiveCount}`); // "The positive numbers in an array is 5"
}

countPosNegNum(arr);
