// Challenge 1: Find the Largest Palindrome
// Write a function to find the largest palindrome made from the product of any two numbers between 0 and 1000
// Usage examples:
// console.log(getLargestPalindrome(1000));; // 906609

function getLargestPalindrome(limit) {
  let largestPalindrome = 0;
  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= i; j++) {
      let curProduct = j * i;
      if (
        curProduct.toString() ===
          curProduct.toString().split("").reverse().join("") &&
        curProduct > largestPalindrome
      ) {
        largestPalindrome = curProduct;
      }
    }
  }

  return largestPalindrome;
}

console.log(getLargestPalindrome(1000)); // 906609
