// Challenge 6: Factorial a Number
// Write a function that takes a number as an argument and returns the factorial of that number.
// Usage examples:
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(10)); // 3628800

function factorial(num) {
    if (num < 0) 
    return -1;
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}


console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800




// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
//   factorialize(5);