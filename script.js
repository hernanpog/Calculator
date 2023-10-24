const userInput = document.querySelector('.js-input');
const calculation = document.querySelector('.js-calculation');

let isFloat = false;
let isOperator = '';

let firstNumber = '';
let secondNumber = '';

let result = 0;

calculation.innerText = '0';

const numbers = document.getElementsByClassName('number');

for (const num of numbers) {
    num.addEventListener('click', e => {
        const number = e.target.value;
        userInput.innerText += number;

        if (!isOperator) {
            firstNumber += number;
        } else {
            secondNumber += number;
        };
    });
};

document.querySelector('.point').addEventListener('click', () => {
    if (!isFloat) {
        userInput.innerText += '.';

        if (!isOperator) {
            firstNumber += '.';
        } else {
            secondNumber += '.';
        };
        
        isFloat = true;
    };
});

document.querySelector('.divide').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
        return;
    }
    else if (isOperator) {
        calculate();
        userInput.innerText = result;
        isFloat = false;
    };
    userInput.innerText += '÷';
    isOperator = '÷';
    isFloat = false;
});

document.querySelector('.multiply').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
        return;
    }
    else if (isOperator) {
        calculate();
        userInput.innerText = result;
        isFloat = false;
    };
    userInput.innerText += '×';
    isOperator = '×';
    isFloat = false;
});

document.querySelector('.subtract').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
        return;
    }
    else if (isOperator) {
        calculate();
        userInput.innerText = result;
        isFloat = false;
    };
    userInput.innerText += '-';
    isOperator = '-';
    isFloat = false;
});

document.querySelector('.add').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
        return;
    }
    else if (isOperator) {
        calculate();
        userInput.innerText = result;
        isFloat = false;
    };
    userInput.innerText += '+';
    isOperator = '+';
    isFloat = false;
});

document.querySelector('.remainder').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
        return;
    } 
    else if (isOperator) {
        calculate();
        userInput.innerText = result;
        isFloat = false;
    };
    userInput.innerText += '%';
    isOperator = '%';
    isFloat = false;
});

document.querySelector('.equal').addEventListener('click', () => {
    if (!firstNumber) {
        userInput.innerText = 'Error.';
        return;
    };
    calculate();
});

document.querySelector('.clear').addEventListener('click', () => {
    userInput.innerText = '';
    calculation.innerText = '0';
    firstNumber = '';
    secondNumber = '';
    isOperator = false;
    isFloat = false;
});

document.querySelector('.positiveNegative').addEventListener('click', () => {
    if (!isOperator) {
        if (firstNumber > 0) {
            firstNumber = `-${firstNumber}`;
            userInput.innerText = `${firstNumber}`;
        } else {
            firstNumber = firstNumber.slice(1);
            userInput.innerText = `${firstNumber}`;
        };
    } else {
        if (secondNumber > 0) {
            secondNumber = `-${secondNumber}`;
            userInput.innerText = `${firstNumber}${isOperator}${secondNumber}`;
        } else {
            secondNumber = secondNumber.slice(1);
            userInput.innerText = `${firstNumber}${isOperator}${secondNumber}`;
        };
    };
});

document.querySelector('.delete').addEventListener('click', () => {
    if (userInput.innerText.slice(-1) === isOperator) {
        isOperator = false;
        userInput.innerText = userInput.innerText.slice(0, -1);
    } else {
        userInput.innerText = userInput.innerText.slice(0, -1);
        if (!isOperator) {
            firstNumber = firstNumber.slice(0, -1);
        } else {
            secondNumber = secondNumber.slice(0, -1);
        };
    };
});

function calculate() {
    switch (isOperator) {
        case '+':
            result = +firstNumber + +secondNumber;
            calculation.innerText = result;
            userInput.innerText = result;
            firstNumber = `${result}`;
            secondNumber = '';
            isOperator = '';
            isFloat = false;
            break;
        case '-':
            result = +firstNumber - +secondNumber;
            calculation.innerText = result;
            firstNumber = `${result}`;
            secondNumber = '';
            isOperator = '';
            isFloat = false;
            break;
        case '×':
            result = +firstNumber * +secondNumber;
            calculation.innerText = result;
            firstNumber = `${result}`;
            secondNumber = '';
            isOperator = '';
            isFloat = false;
            break;
        case '÷':
            if (secondNumber === '0') {
                calculation.innerText = "Error: can't divide by 0.";
                return;
            };
            result = +firstNumber / +secondNumber;
            calculation.innerText = result;
            firstNumber = `${result}`;
            secondNumber = '';
            isOperator = '';
            isFloat = false;
            break;
        case '%':
            result = +firstNumber % +secondNumber;
            calculation.innerText = result;
            firstNumber = `${result}`;
            secondNumber = '';
            isOperator = '';
            isFloat = false;
            break;
    };
}