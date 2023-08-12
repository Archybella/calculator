document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentNumber = '';
    let operator = '';
    let firstNumber = '';
  
    const updateDisplay = () => {
      display.textContent = currentNumber || '0';
    };
  
    const handleNumberClick = (num) => {
      currentNumber += num;
      updateDisplay();
    };
  
    const handleOperatorClick = (op) => {
      if (currentNumber !== '') {
        firstNumber = currentNumber;
        currentNumber = '';
        operator = op;
      }
    };
  
    const handleEqualsClick = () => {
      if (operator && currentNumber !== '') {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(currentNumber);
        switch (operator) {
          case '+':
            currentNumber = (num1 + num2).toString();
            break;
          case '-':
            currentNumber = (num1 - num2).toString();
            break;
          case '*':
            currentNumber = (num1 * num2).toString();
            break;
          case '/':
            currentNumber = (num1 / num2).toString();
            break;
        }
        firstNumber = '';
        operator = '';
        updateDisplay();
      }
    };
  
    const clearAll = () => {
      currentNumber = '';
      operator = '';
      firstNumber = '';
      updateDisplay();
    };
  
    const decimalClick = () => {
      if (!currentNumber.includes('.')) {
        currentNumber += '.';
        updateDisplay();
      }
    };
  
    document.querySelectorAll('.btn').forEach((button) => {
      button.addEventListener('click', () => {
        const value = button.textContent;
        if (/\d/.test(value)) {
          handleNumberClick(value);
        } else if (['+', '-', '*', '/'].includes(value)) {
          handleOperatorClick(value);
        } else if (value === '=') {
          handleEqualsClick();
        } else if (value === 'C') {
          clearAll();
        } else if (value === '.') {
          decimalClick();
        }
      });
    });
  
    updateDisplay();
  });
  