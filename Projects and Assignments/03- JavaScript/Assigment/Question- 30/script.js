// Question 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

const firstNum = parseFloat(prompt('Enter the first number:'));
const secondNum = parseFloat(prompt('Enter the second number:'));
const operation = prompt('Enter the operation (+, -, *, /):');

function performOperation(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

const result = performOperation(firstNum, secondNum, operation);
console.log(`Result: ${result}`);
