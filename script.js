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
  
    const deleteClick = () => {
      currentNumber = currentNumber.slice(0, -1); // Remove the last character
      updateDisplay();
    };
  
    const decimalClick = () => {
      if (!currentNumber.includes('.')) {
        currentNumber += '.';
        updateDisplay();
      }
    };
  
    const themeToggle = document.getElementById('theme-toggle');
  
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');
    });
  
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
        } else if (value === 'Delete') {
          deleteClick();
        } else if (value === '.') {
          decimalClick();
        }
      });
    });
  
    updateDisplay();
  });
  