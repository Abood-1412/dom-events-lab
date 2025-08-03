// Select the display element
const display = document.querySelector('.display');

// Create variables to track the input
let currentInput = '';
let operator = '';
let previousInput = '';

// Listen for all button clicks
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerText;

    // Handle Clear
    if (value === 'C') {
      currentInput = '';
      operator = '';
      previousInput = '';
      updateDisplay('');
      return;
    }

    // Handle equals
    if (value === '=') {
      if (previousInput && operator && currentInput) {
        const result = calculate(Number(previousInput), operator, Number(currentInput));
        updateDisplay(result);
        // Reset inputs after calculation
        currentInput = result.toString();
        operator = '';
        previousInput = '';
      }
      return;
    }

    // Handle operators (+, -, *, /)
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
      return;
    }

    // Handle number button
    if (!isNaN(value)) {
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});

// Function to update display
function updateDisplay(content) {
  display.innerText = content;
}

// Function to perform calculation
function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      
      return num2 !== 0 ? num1 / num2 : 'Error';  // Prevent division by zero
    default:
      return num2;
  }
}
