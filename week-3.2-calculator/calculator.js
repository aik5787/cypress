let operator = prompt("Select operator ( either +, -, * or / ): ");
let firstNumber = Number(prompt("Type first number: "));
let secondNumber = Number(prompt("Type second number: "));

let result;
if (operator === "+") {
    result = firstNumber + secondNumber;
} else if (operator === "-") {
    result = firstNumber - secondNumber;
} else if (operator === "*") {
    result = firstNumber * secondNumber;
} else if (operator === "/") {
    result = firstNumber / secondNumber;
} else {
    result = "Error! Please enter valid numbers and operator without space!";
}

console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);